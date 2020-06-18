import React from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
const AppLearn = () => {
  return (
    <>
      <div className="learn-section">
        <Container>
          <Row>
            <Col md={4} sm={12}>
              <div className="">
                <img
                  src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/image-cta-min-1.png"
                  style={{ width: "100%" }}
                ></img>
              </div>
            </Col>
            <Col md={4}>
              <div className="top_area">
                <h5 className="font-weight-bold">
                  Limitless learning, more possibilities
                </h5>
                <p className="text-muted">
                  Answer a few questions for your top picks
                </p>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="right_area">
                <Button variant="primary">Join For Free</Button>{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="course__section">
        <Container>
          <Row>
            <Col md={3}>
              <div className="section__gap">
                <h3
                  className="font-weight-bold"
                >
                  {" "}
                  Course Curricullam
                </h3>
              </div>
            </Col>
            <Col md={9}>
              <div className="mid__gap">
                <Button variant="outline-secondary">Backend</Button>{" "}
                <Button variant="outline-secondary">Css</Button>{" "}
                <Button variant="outline-secondary">Frontend</Button>{" "}
                <Button variant="outline-secondary">General</Button>{" "}
                <Button variant="outline-secondary">IT&SOFTWARE</Button>{" "}
                <Button variant="outline-secondary">Photography</Button>{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AppLearn;
