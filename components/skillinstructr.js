import React, { useState } from "react";
import {
  Form,
  FormControl,
  Button,
  Container,
  Col,
  Row
} from "react-bootstrap";
import Slider from "react-slick";
const Service = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
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
          slidesToShow: 1,
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
      <div className="portfolio">
        <Container>
          <Row>
            <Col md={4} sm={12}>
              <h3 className="font-weight-bold">Our Skilled Instructors</h3>
              <div class="portfolio__gap"></div>
              <span className="text__ton">
                Gentium a well crafted, creative and modern designed Digital &
                Marketing Agency OnePage WordPress Theme.
              </span>
            </Col>
            <Col md={8} sm={12}>
              <div className="company__slider">
                <Slider {...settings}>
                  <div className="paddingLeft">
                    <img src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640__340.jpg"></img>
                  </div>
                  <div className="paddingLeft">
                    <img src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640__340.jpg"></img>
                  </div>
                  <div className="paddingLeft">
                    <img src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640__340.jpg"></img>
                  </div>
                  <div className="paddingLeft">
                    <img src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640__340.jpg"></img>
                  </div>
                </Slider>
              </div>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Service;
