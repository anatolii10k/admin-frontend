import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import {CgUserList} from 'react-icons/cg'
import { BsNewspaper,BsController } from "react-icons/bs";
import { BiCalendarEvent, BiVideo, BiLogOut } from "react-icons/bi";

import "./vertical.scss";

const VerticalBar = () => {
  return (
    <>
      <div id="desktopVerticalBar" className="shadow bg-white rounded">
        <div className="headerImage">
          <img
            src={process.env.PUBLIC_URL + "./logo.png"}
            width="50"
            height="50"
            alt="logo"
          />
          {/* <span className="iconOpened" onClick={toggleVerticalBar}><AiOutlineAlignLeft/></span> */}
        </div>
        <hr />
        <div className="links">
          <NavLink to="/users">
            <AiOutlineUser />
            Users
          </NavLink>
          <NavLink to="/news">
            <BsNewspaper />
            News
          </NavLink>
          <NavLink to="/events">
            <BiCalendarEvent />
            Event
          </NavLink>
          <NavLink to="/videos">
            <BiVideo />
            Video
          </NavLink>
          <NavLink to="/whitelist">
            <CgUserList/>
            Whitelist
          </NavLink>
          <NavLink to="/fee">
            <BsController />
            Fee Control
          </NavLink>
          <NavLink to="/logout">
            <BiLogOut />
            Logout
          </NavLink>
        </div>
      </div>

      <div id="mobileVerticalBar">
        <div className="headerImage">
          <img
            src={process.env.PUBLIC_URL + "./logo512.png"}
            width="40"
            height="40"
          />
        </div>
        <hr />
        <div className="links">
          <NavLink to="/users">
            <AiOutlineUser />
          </NavLink>
          <NavLink to="/news">
            <BsNewspaper />
          </NavLink>
          <NavLink to="/events">
            <BiCalendarEvent />
          </NavLink>
          <NavLink to="/videos">
            <BiVideo />
          </NavLink>
          <NavLink to="/signin">
            <BiLogOut />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default VerticalBar;
