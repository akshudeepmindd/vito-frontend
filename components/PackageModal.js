import React, { Component } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { modalState } from "../redux/actions/modalActions";
import {
  addPlan,
  PlaneList,
  updatePlan,
  deletePlan,
} from "../redux/actions/planActions";
import { getCookie } from "../utils/cookies";
class PackageModal extends Component {
  state = {
    packageName: "",
    cost: "",
  };

  // componentDidMount(){
  //   if(this.props.modal.name == "edit"){

  //   }
  // }

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onHandleSubmit = async (e) => {
    e.preventDefault();
    let token = getCookie("token");
    if (this.props.modal.name != "edit") {
      await this.props.addPlan(this.state, token);
    } else {
      let params = {
        packageName: this.state.packageName || this.props.plan?.packageName,
        cost: this.state.cost || this.props.plan?.cost,
      };
      await this.props.updatePlan(this.props.packageId, params, token);
      this.setState({
        packageName: "",
        cost: "",
      });
    }
    await this.props.PlaneList();
    await this.props.modalState(null);
  };

  onDelete = () => {
    let token = getCookie("token");
    this.props.deletePlan(this.props.packageId, token);
    this.props.modalState(null);
  };

  render() {
    return (
      <Modal
        show={this.props.modal.show}
        onHide={() => this.props.modalState(null)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center font-weight-bold">
            {this.props.modal.name == "edit"
              ? "Update Package"
              : this.props.modal.name == "delete"
              ? "Are You sure to Delete Package"
              : "Add Package"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.modal.name == "delete" ? (
            <Row className="text-center">
              <Col md="6">
                <Button className="btn-danger" onClick={this.onDelete}>
                  Yes Sure
                </Button>
              </Col>
              <Col md="6">
                <Button
                  className="btn-info"
                  onClick={() => this.props.modalState(null)}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          ) : (
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Package Name"
                  defaultValue={
                    this.state.packageName || this.props.plan?.packageName
                  }
                  name="packageName"
                  onChange={(e) => this.onHandleChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="number"
                  placeholder="price"
                  defaultValue={this.state.cost || this.props.plan?.cost}
                  name="cost"
                  onChange={(e) => this.onHandleChange(e)}
                />
              </Form.Group>
              <Button
                variant="warning"
                type="Login"
                className="large__button"
                onClick={this.onHandleSubmit}
              >
                {this.props.modal.name == "edit"
                  ? "Edit Package"
                  : "Add Package"}
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state, props) => ({
  modal: state.modal,
  plan: state.plan.singleplan,
});

const mapDispatchToProps = {
  modalState,
  addPlan,
  PlaneList,
  updatePlan,
  deletePlan,
};

export default connect(mapStateToProps, mapDispatchToProps)(PackageModal);
