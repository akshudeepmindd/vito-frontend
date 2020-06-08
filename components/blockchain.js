import React, { useState } from "react";
import { Card, Button, Col, Row, ListGroup } from "react-bootstrap";
const AppSection = () => {
  return (
    <>
      <div className="clearfix"></div>
      <div className="container">
        <div className="blockchain__section text-center">
          <h2>
            Blockchain demand is booming and the market is expected to grow at
            over 60% per year
          </h2>
          <p>
            Learn Blockchain – Blockchain Courses and Training – Success starts
            here
          </p>
        </div>
        <div className="text__align">
          <Row>
            <Col md={6} sm={12}>
              <div className="img_left">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFno2uYEEzSz9yLWPDQFp2Dq5jnHsS6wROIjB57pj-n_dDydiN&usqp=CAU"
                  style={{ width: "100%" }}
                ></img>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="">
                <img
                  src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/image-feature-4-min.png"
                  style={{ marginBottom: "2rem",marginTop: "2rem" }}
                ></img>
                <p className="font-weight-bold">
                  Manage conversations with leads and customers at scale
                </p>
                <p>
                  That cheeky bugger down the pub squiffy arse spiffing cup of
                  char on your bike mate, quaint I Jeffrey I don't want no agro
                  you mug zonked Richard, barney bobby matie boy David
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="lower-section">
          <Row>
            <Col md={6} sm={12}>
              <div className="text-right content__sec">
                <img
                  src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/image-feature-5-min.png"
                  style={{ marginBottom: "2rem", marginTop: "2rem" }}
                ></img>
                <p className="font-weight-bold">
                  Manage conversations with leads and customers at scale
                </p>
                <p>
                  That cheeky bugger down the pub squiffy arse spiffing cup of
                  char on your bike mate, quaint I Jeffrey I don't want no agro
                  you mug zonked Richard, barney bobby matie boy David
                </p>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="img_left">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTwyrDd6ZhYi9IUtSa-neM9WhhEIqBd84_n-FyKhZ9Pg7dHebj&usqp=CAU"
                  style={{ width: "100%" }}
                ></img>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default AppSection;
