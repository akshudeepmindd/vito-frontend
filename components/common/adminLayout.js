import React from "react";
import MainHead from "../common/mainhead";
import "../../static/scss/dashboard/black-dashboard-react.scss";
import Nav from "../nav";
import Footer from "../footer";
import "react-toastify/dist/ReactToastify.min.css";
import SideBar from "../adminSideBar";
import AdminNavbar from "../adminNavbar";
export default (props) => {
  return (
    <>
      <MainHead title={props.title} />
      <SideBar />
      <AdminNavbar />
      {props.children}
    </>
  );
};
