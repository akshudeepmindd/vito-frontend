import React, { useState } from "react";
import { Card, Button, Col, Row, ListGroup } from "react-bootstrap";
const CardSection = () => {
  return (
    <>
      <div className="">
        <Row>
          <Col md={4} sm={12}>
            <div className="cards__position">
              <Card>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/image-feature-1-min.png"
                    className="card__img"
                  />
                  <Card.Title>Free Updates</Card.Title>
                  <Card.Text>
                    <ListGroup>
                      <ListGroup.Item>
                        Cryptocurrency market updates
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Industry leader interviews.
                      </ListGroup.Item>
                      <ListGroup.Item>Become a better trader.</ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Button className="mb-3 mt-3" variant="outline-secondary">
                    Subscribe for free
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="cards__position">
              <Card>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src=" http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/image-feature-2-min.png
                    "
                    className="card__img"
                  />
                  <Card.Title>Free Updates</Card.Title>
                  <Card.Text>
                    <ListGroup>
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Button className="mb-3 mt-3" variant="outline-secondary">
                    Explore Courses
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="cards__position">
              <Card>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/image-feature-3-min.png"
                    className="card__img"
                  />
                  <Card.Title>Premium</Card.Title>
                  <Card.Text>
                    <ListGroup>
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Button className="mb-3 mt-3" variant="outline-secondary">
                    Premium Subscription
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CardSection;
