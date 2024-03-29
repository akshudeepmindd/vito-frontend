import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";
import "react-toastify/dist/ReactToastify.min.css";

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>
      {props.title || ""} | Academy – http://academy.startupdigitalnetwork.com/
    </title>

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i&display=swap"
      rel="stylesheet"
    />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <link rel="stylesheet" href="../static/icons/icofont.min.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
      integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    ></link>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossOrigin="anonymous"
    />
    <script src="https://www.paypal.com/sdk/js?client-id=Afhf-7kPvB5CqC7_KPTp4BkL5lHXDjnCwHWrCc6NMa9qZellqcN60c7hvgLM2JlSeGSod54vj9l6VcuW&currency=INR"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
      type="text/javascript"
    ></script>
    <script src="https://use.fontawesome.com/052a276510.js"></script>
    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
