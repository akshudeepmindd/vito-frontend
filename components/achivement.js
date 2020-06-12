import React, { useState } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import Slider from "react-slick";
const AppAchieve = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="acheve__image">
        <div className="text-center acheve__text">
          <h2>Our Achievements</h2>
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring whichI enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot,which
            wascreated for the bliss of souls like mine.
          </p>
          <div className="text__upper">
            <Row>
              <Col md={4} sm={12}>
                <Row>
                  <Col md={3}>icon</Col>
                  <Col md={3}>
                    <p className="f40">259</p>
                    <p className="">Certifications</p>
                  </Col>
                </Row>
              </Col>
              <Col md={4} sm={12}>
                <Row>
                  <Col md={3}>icon</Col>
                  <Col md={3}>
                    <p className="f40">259</p>
                    <p className="">Certifications</p>
                  </Col>
                </Row>
              </Col>
              <Col md={4} sm={12}>
                <Row>
                  <Col md={3}>icon</Col>
                  <Col md={3}>
                    <p className="f40">259</p>
                    <p className="">Certifications</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="slider__stream">
        <Row>
          <Col md={6} sm={12}>
            <img src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/image-testimonial-min.png"></img>
          </Col>
          <Col sm={6}>
            <div className="lorem__ipsum-text">
              {/* <Slider {...settings}> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                varius nunc finibus urna venenatis mollis vitae in urna. Aliquam
                facilisis elit nec nulla viverra, vel scelerisque quam
                facilisis. Maecenas vitae libero vitae sapien pellentesque
                fringilla.
              </p>
              <h5 className="font-weight-bold">Manual</h5>
              <p>Designer</p>
              {/* </Slider> */}
            </div>
          </Col>
        </Row>
      </div>
      <div className="d__none">
        <Container>
          <Row>
            <Col className="paddingLeft">
              <img src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/gallery-6-min.jpg"></img>
            </Col>
            <Col className="paddingLeft">
              <img src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/gallery-7-min.jpg"></img>
            </Col>
            <Col className="paddingLeft">
              <img src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/gallery-8-min.jpg"></img>
            </Col>
            <Col className="paddingLeft">
              <img src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/gallery-9-min.jpg"></img>
            </Col>
            <Col className="paddingLeft">
              <img src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/gallery-10-min.jpg"></img>
            </Col>
          </Row>
          <div className="gap__betwen">
            <Row>
              <Col className="paddingLeft">
                <img src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/gallery-15-min-1.jpg"></img>
              </Col>
              <Col className="paddingLeft">
                <img src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/gallery-16-min-1.jpg"></img>
              </Col>
              <Col className="paddingLeft">
                <img src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/gallery-17-min-1.jpg"></img>
              </Col>
              <Col className="paddingLeft">
                <img src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/gallery-17-min-1.jpg"></img>
              </Col>
              <Col className="paddingLeft">
                <img src="http://academy.startupdigitalnetwork.com/wp-content/uploads/2019/10/gallery-16-min.jpg"></img>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="learn__sec">
        <Container>
          <Row>
            <Col md={6} className="text-right">
              <h3 className="font-weight-bold">
                Learn what really matters and advance your career
              </h3>
              <p className="text-muted">
                With Blockgeeks, you’ll have blockchain courses authored by
                leading experts at your fingertips. It’s relevant, in-depth
                content that goes beyond the fundamentals to teach you practical
                skills you can apply immediately
              </p>
              <Button variant="warning" className="wng_btn">
                Start Your Free Trial
              </Button>{" "}
            </Col>
            <Col md={6}>
              <img
                src="https://image.shutterstock.com/image-photo/image-business-partners-discussing-documents-260nw-125338145.jpg"
                style={{ width: "100%" }}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AppAchieve;
