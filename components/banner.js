import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Form,
  FormControl,
  Row,
  Col,
  Card,
  ListGroup,
} from "react-bootstrap";
const Banner = () => {
  return (
    <>
      <div className="bg_image">
        <div className="banner-text text-center">
          <h1>Crypo Trading Course</h1>
          <p>
            This trading course is the Trade use to learn improve results. the
            Trade use to learn improve r
          </p>
          <Button variant="warning">Warning</Button>{" "}
        </div>
        <div className="mt__2">
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
                    <Button variant="outline-secondary">
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
                    <Button variant="outline-secondary">
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
                      src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/image-feature-3-min.png"
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
                    <Button variant="outline-secondary">
                      Subscribe for free
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="clearfix"></div>
    </>
  );
};

export default Banner;
