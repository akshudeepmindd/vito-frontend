import React from "react";
import Login from "../components/sigin";
import "../static/scss/index.sass";
import "../static/scss/dashboard/black-dashboard-react.scss";
import {
  Container,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
} from "reactstrap";
const AdminLogin = () => {
  return (
    <Container className="login-form">
      <Card>
        <CardHeader>
          <CardTitle>Admin Sign In</CardTitle>
        </CardHeader>
        <CardBody>
          <Login />
        </CardBody>
      </Card>
    </Container>
  );
};

export default AdminLogin;
