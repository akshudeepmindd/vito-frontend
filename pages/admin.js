import React from "react";
import AdminLayout from "../components/common/adminLayout";
import { Card, CardBody, CardHeader } from "reactstrap";

const AdminPage = () => {
  return (
    <AdminLayout title="Admin Dashboard">
      <Card>
        <CardBody>
          <h1>Welcome To Dashboad</h1>
        </CardBody>
      </Card>
    </AdminLayout>
  );
};
export default AdminPage;
