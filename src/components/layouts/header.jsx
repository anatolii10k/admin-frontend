import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import { getAdmin } from "../../api/auth";
import "./layouts.scss";

export const Header = () => {
  const [adminInfo, setAdminInfo] = useState({});
  useEffect(() => {
    if (localStorage.authToken) {
      getAdmin(jwt_decode(localStorage.authToken).userId).then((res) => {
        setAdminInfo(res);
      });
    }
  });
  return (
    <Navbar expand="lg" id="headerBar" className="shadow rounded">
      <div className="searchBar">
        {/* <form className="example" action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><BiSearch/></button>
                </form> */}
      </div>
      {/* <div className="profileDropDown">
        <img
          src={process.env.PUBLIC_URL + "./logo.png"}
          width="30"
          height="30"
          alt="logo"
        />
        <div className="dropdown">
          <button
            className="btn btn-secondary"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {adminInfo.name ? adminInfo.name : ""}
          </button>
        </div>
      </div> */}
    </Navbar>
  );
};
