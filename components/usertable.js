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
import { getUserList } from "../redux/actions/userActions";
import { getCookie } from "../utils/cookies";
class UserTable extends Component {
  componentDidMount() {
    const { getUserList } = this.props;
    let token = getCookie("token");
    getUserList(token);
  }
  render() {
    return (
      <>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">User List</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th className="text-center">Created At</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.userList?.data.map((item, key) => {
                      return (
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.role}</td>
                          <td className="text-center">{item.createdAt}</td>
                          <td>
                            <button
                              class="material-icons"
                              style={{
                                border: "none",
                                background: "transparent",
                              }}
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
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  userList: state.user.userList,
});

const mapDispatchToProps = {
  getUserList,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
