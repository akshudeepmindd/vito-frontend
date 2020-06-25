import React from "react";
import SideBar from "../components/adminSideBar";
import AdminLayout from "../components/common/adminLayout";
import UserTable from "../components/usertable";
export default () => {
  return (
    <>
      <AdminLayout title="Admin Dashboard">
        <UserTable />
      </AdminLayout>
    </>
  );
};
