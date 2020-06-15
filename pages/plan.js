import React, { Component } from "react";
import Layout from "../components/common/layout";
import Router from "next/router";
import "../static/scss/index.sass";
import { connect } from "react-redux";
import { ListGroup, Container, Table, Button } from "react-bootstrap";
import { PlaneList } from "../redux/actions/planActions";
import { getCookie } from "../utils/cookies";
import { Payment } from "./payment";

class Plans extends Component {
  async componentDidMount() {
    const { PlaneList, plan } = this.props;
    let token = getCookie("token");
    console.log(token, "tokenb");
    let res = await PlaneList(token);

    console.log(res, "ressss");
  }
  // getCookie()

  render() {
    const { plan } = this.props;
    console.log(plan, "plan123");
    return (
      <Layout>
        <div className="black__banner">
          <h1>Membership levels</h1>
        </div>
        <div className="listing">
          <Container>
            <ListGroup horizontal>
              <ListGroup.Item>Home</ListGroup.Item>
              <ListGroup.Item>Membership Account</ListGroup.Item>
              <ListGroup.Item>Membership Level</ListGroup.Item>
            </ListGroup>
            <Table bordered hover responsive className="table__Plan">
              <thead>
                <tr>
                  <th className="" style={{ width: "30%" }}></th>
                  {plan?.map((item, key) => {
                    return (
                      <>
                        <th className="" style={{ width: "12%" }}>
                          <h6>{item.packageName}</h6>
                          <span class="list-price">{item.cost} per Month</span>
                        </th>
                      </>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-success">Number Of courses</td>
                  <td>5</td>
                  <td>O5</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Learning jQuery Mobile for Beginners</td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                </tr>
                <tr>
                  <td>The Art of Black and White Photography</td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                </tr>
                <tr>
                  <td>Introduction to networking for beginners</td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                </tr>
                <tr>
                  <td>Learn Python – Interactive Python Tutorial</td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                </tr>

                <tr>
                  <td>Your Complete Guide to Photography</td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                </tr>
                <tr>
                  <td>Easy Zurb Foundation</td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                </tr>
                <tr>
                  <td>Improve Your CSS Workflow with SASS </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-times"></i>
                  </td>
                </tr>
                <tr>
                  <td>Become a PHP Master and Make Money Fast</td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                </tr>
                <tr>
                  <td>Getting Started with LESS – Beginner Crash</td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                </tr>
                <tr>
                  <td>Learning jQuery Mobile for Beginners</td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                </tr>
                <tr>
                  <td>Learning jQuery Mobile for Beginners</td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-check"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                </tr>
                <tr>
                  <td>Web Designing & HTML5/CSS3 Essentials</td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Learn and Understand AngularJS</td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>PHP 5 Introduction to coding Tutorial</td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    {" "}
                    <i class="fas fa-times"></i>
                  </td>
                  <td>
                    <i class="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    <Button
                      variant="warning"
                      onClick={() => Router.push("/checkout")}
                    >
                      GET IT NOW
                    </Button>{" "}
                  </td>
                  <td>
                    {" "}
                    <Button
                      variant="warning"
                      onClick={() => Router.push("/checkout")}
                    >
                      GET IT NOW
                    </Button>{" "}
                  </td>
                  <td>
                    {" "}
                    <Button
                      variant="warning"
                      onClick={() => Router.push("/checkout")}
                    >
                      GET IT NOW
                    </Button>{" "}
                  </td>
                  <td>
                    {" "}
                    <Button
                      variant="warning"
                      onClick={() => Router.push("/checkout")}
                    >
                      GET IT NOW
                    </Button>{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  PlaneList,
};

const mapStateToProps = (state) => ({
  plan: state.plan.allPlan || [],
});

export default connect(mapStateToProps, mapDispatchToProps)(Plans);

// export default Plans;
