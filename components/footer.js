import React, { useState } from "react";
import { Button, Row, Col, ListGroup, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="clearfix"></div>
      <div className="footer__bg">
        <div className="footer__content">
          <div className="info__top">
            <Row>
              <Col md={3} xs={6} className="border-right height5">
                <span className="d-block text-grey mt-4">+91 2233445544</span>
                <span className="text-grey">+91 2233445544</span>
              </Col>
              <Col md={3} xs={6} className="border-right height5">
                {" "}
                <span className="d-block text-grey mt-4">A26BT5 BUILDING</span>
                <span className="text-grey">LONDON, ENGLAND</span>
              </Col>
              <Col md={3} xs={6} className="border-right height5">
                {" "}
                <span className="d-block text-grey mt-4">SUPPORT</span>
                <span className="text-grey">@CRYPTOSCHOOL.COM</span>
              </Col>
              <Col md={3} xs={6}>
                {" "}
                <span className="d-block text-grey mt-4">
                  DAILY: 10:00 AM – 5:00 PM
                </span>
                <span className="text-grey">MONDAY & HOLIDAYS: CLOSED</span>
              </Col>
            </Row>
          </div>
          <Container>
            <Row>
              <Col md={3}>
                <div className="inner__space">
                  <h4>
                    Eduma <span className="text-warning">Crypto</span>
                  </h4>

                  <ListGroup horizontal>
                    <ListGroup.Item>
                      <img src="https://static.mastrolinks.com/Assets/Icons/Twitter.png"></img>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <img src="https://static.mastrolinks.com/Assets/Icons/facebook.png"></img>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <img src="https://static.mastrolinks.com/Assets/Icons/linkedin.png"></img>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <img src="https://static.mastrolinks.com/Assets/Icons/linkedin.png"></img>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
              <Col md={9} className="footer__links">
                <Row>
                  <Col md={3}>
                    <ListGroup>
                      <h5 className="">Menu</h5>

                      <ListGroup.Item>Classes</ListGroup.Item>
                      <ListGroup.Item>Programs</ListGroup.Item>
                      <ListGroup.Item>About us</ListGroup.Item>
                      <ListGroup.Item>Team</ListGroup.Item>
                      <ListGroup.Item>Contact Us</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col md={3}>
                    <ListGroup>
                      <h5 className="">Course</h5>
                      <ListGroup.Item>Pending</ListGroup.Item>
                      <ListGroup.Item>Sketch</ListGroup.Item>
                      <ListGroup.Item>Drawings</ListGroup.Item>
                      <ListGroup.Item>Sculpture</ListGroup.Item>
                      <ListGroup.Item>Digital</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col md={3}>
                    <ListGroup>
                      <h5 className="">Topics</h5>
                      <ListGroup.Item>Accreditation</ListGroup.Item>
                      <ListGroup.Item>Disclosures</ListGroup.Item>
                      <ListGroup.Item>Student Code</ListGroup.Item>
                      <ListGroup.Item>Job Opportunities</ListGroup.Item>
                      <ListGroup.Item>Campus Safety</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col md={3}>
                    <ListGroup>
                      <h5 className="">Info For</h5>
                      <ListGroup.Item>Prospective Student</ListGroup.Item>
                      <ListGroup.Item>Parents & Families</ListGroup.Item>
                      <ListGroup.Item>Transfer Students</ListGroup.Item>
                      <ListGroup.Item>Industry Leader</ListGroup.Item>
                      <ListGroup.Item>Military Student</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="cp-text ">
        <p className="text-center">
          <span className="text-warning">Education WordPress Theme</span> by{" "}
          <span className="text-warning">ThimPress</span>. Powered by WordPress.
        </p>
      </div>
    </>
  );
};

export default Footer;
