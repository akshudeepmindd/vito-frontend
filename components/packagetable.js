import React, { Component } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import { connect } from "react-redux";
import { PlaneList, getSinglePlan } from "../redux/actions/planActions";
import { modalState } from "../redux/actions/modalActions";
import { getCookie } from "../utils/cookies";
import PackageModal from "./PackageModal";

class PackageTable extends Component {
  state = {
    packageId: "",
  };
  componentDidMount() {
    const { PlaneList } = this.props;
    PlaneList();
  }

  handleEdit = async (id) => {
    let token = getCookie("token");
    await this.props.modalState("edit");
    await this.props.getSinglePlan(id, token);
    this.setState({
      packageId: id,
    });
  };

  handleDelete = async (id) => {
    this.props.modalState("delete");
    this.setState({
      packageId: id,
    });
  };
  render() {
    return (
      <>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col>
                    <CardTitle tag="h4">Package List</CardTitle>
                  </Col>
                  <Col>
                    <button
                      className="material-icons button-add"
                      onClick={() => this.props.modalState("add")}
                    >
                      add
                    </button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Package Name</th>
                      <th>Price</th>

                      <th className="text-center">Created At</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.planList?.map((item, key) => {
                      return (
                        <tr>
                          <td>{item.packageName}</td>
                          <td>{item.cost}</td>
                          <td className="text-center">{item.createdAt}</td>
                          <td>
                            <button
                              class="material-icons"
                              style={{
                                border: "none",
                                background: "transparent",
                              }}
                              onClick={() => this.handleEdit(item._id)}
                            >
                              edit
                            </button>
                          </td>
                          <td>
                            <button
                              class="material-icons"
                              style={{
                                color: "red",
                                border: "none",
                                background: "transparent",
                              }}
                              onClick={() => this.handleDelete(item._id)}
                            >
                              restore_from_trash
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <PackageModal packageId={this.state.packageId} />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  planList: state.plan.allPlan,
  modal: state.modal,
});

const mapDispatchToProps = {
  PlaneList,
  modalState,
  getSinglePlan,
};

export default connect(mapStateToProps, mapDispatchToProps)(PackageTable);
