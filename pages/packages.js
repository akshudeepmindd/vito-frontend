import React from "react";
import SideBar from "../components/adminSideBar";
import AdminLayout from "../components/common/adminLayout";
import PackageTable from "../components/packagetable";

import "../static/scss/index.sass";
export default () => {
  return (
    <>
      <AdminLayout title="Package List">
        <PackageTable />
      </AdminLayout>
    </>
  );
};
