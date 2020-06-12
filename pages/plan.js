import React from "react";
import Layout from "../components/common/layout";
import Router from "next/router";
import "../static/scss/index.sass";
import { ListGroup, Container, Table, Button } from "react-bootstrap";

const Plans = () => {
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
                <th className="" style={{ width: "12%" }}>
                  <h6 className="font-weight-bold">BASIC</h6>
                  <span class="list-price">5,000 per Month</span>
                </th>
                <th className="" style={{ width: "12%" }}>
                  <h6 className="font-weight-bold">STANDARD</h6>
                  <span class="list-price"> 5,000 per Month</span>
                </th>
                <th className="" style={{ width: "12%" }}>
                  <h6 className="font-weight-bold">PREMIUM</h6>
                  <span class="list-price"> 5,000 per Month</span>
                </th>
                <th className="" style={{ width: "12%" }}>
                  <h6 className="font-weight-bold">ENTERPRISE</h6>
                  <span class="list-price"> 5,000 per Month</span>
                </th>
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>The Art of Black and White Photography</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Introduction to networking for beginners</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Learn Python – Interactive Python Tutorial</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>Your Complete Guide to Photography</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Easy Zurb Foundation</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Improve Your CSS Workflow with SASS </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Become a PHP Master and Make Money Fast</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Getting Started with LESS – Beginner Crash</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Learning jQuery Mobile for Beginners</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Learning jQuery Mobile for Beginners</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Web Designing & HTML5/CSS3 Essentials</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Learn and Understand AngularJS</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>PHP 5 Introduction to coding Tutorial</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {" "}
                  <Button variant="warning">GET IT NOW</Button>{" "}
                </td>
                <td>
                  {" "}
                  <Button variant="warning">GET IT NOW</Button>{" "}
                </td>
                <td>
                  {" "}
                  <Button variant="warning">GET IT NOW</Button>{" "}
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
};

export default Plans;
