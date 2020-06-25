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
      <div className="wrapper">
        <SideBar />
        <div
          className="main-panel"
          //   data={this.state.backgroundColor}
        >
          <AdminNavbar />
          <div className="content">{props.children}</div>
        </div>
      </div>
    </>
  );
};
