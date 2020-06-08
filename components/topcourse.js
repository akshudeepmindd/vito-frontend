import React, { useState } from "react";
import { Card, Button, Col, Row, ListGroup, Container } from "react-bootstrap";
const Course = () => {
  return (
    <>
      <div className="top__course">
        <h4 className="text-center"> Browse Our Top Courses</h4>
        <p className="text-center">
          Learn Blockchain – Blockchain Courses and Training - Success starts
          here
        </p>
        <Container>
          <Row>
            <Col md={4} sm={6} xs={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2015/11/course-4-2-400x170.jpg"
                />
                <Card.Body>
                  <Card.Title>Admin</Card.Title>
                  <Card.Text>Introduction LearnPress – LMS plugin</Card.Text>
                  <Button variant="outline-secondary">
                    Subscribe for free
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2015/06/course-2-2-400x170.jpg"
                />
                <Card.Body>
                  <Card.Title>Admin</Card.Title>
                  <Card.Text>Introduction LearnPress – LMS plugin</Card.Text>
                  <Button variant="outline-secondary">
                    Subscribe for free
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2015/06/course-5-2-400x170.jpg"
                />
                <Card.Body>
                  <Card.Title>Admin</Card.Title>
                  <Card.Text>Introduction LearnPress – LMS plugin</Card.Text>
                  <Button variant="outline-secondary">
                    Subscribe for free
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2015/06/course-6-2-400x170.jpg"
                />
                <Card.Body>
                  <Card.Title>Admin</Card.Title>
                  <Card.Text>Introduction LearnPress – LMS plugin</Card.Text>
                  <Button variant="outline-secondary">
                    Subscribe for free
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2015/12/course-10-2-400x170.jpg"
                />
                <Card.Body>
                  <Card.Title>Admin</Card.Title>
                  <Card.Text>Introduction LearnPress – LMS plugin</Card.Text>
                  <Button variant="outline-secondary">
                    Subscribe for free
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2015/12/course-16-2-400x170.jpg"
                />
                <Card.Body>
                  <Card.Title>Admin</Card.Title>
                  <Card.Text>Introduction LearnPress – LMS plugin</Card.Text>
                  <Button variant="outline-secondary">
                    Subscribe for free
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
       
        <div class="text-center mt-4">
          <Button variant="warning">View All Courses</Button>{" "}
        </div>
      </div>
    </>
  );
};

export default Course;
