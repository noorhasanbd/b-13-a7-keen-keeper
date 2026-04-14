import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  return (
    <div>
      <div className=" bg-base-100 shadow-sm">
        <div className="navbar container mx-auto">
          <div className="flex-1">
            <NavLink to={'/'}>
            <img src={logo} alt="" />
            
            </NavLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to={'/'}
                  className={({ isActive }) =>
                    `font-semibold mx-2 ${isActive ? "text-white bg-[#244D3F]" : " text-[#244D3F]"}`
                  }
                >
                  {" "}
                  <RiHome2Line />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={'/timeline'}
                  className={({ isActive }) =>
                    `font-semibold mx-2 ${isActive ? "text-white bg-[#244D3F]" : " text-[#244D3F]"}`
                  }
                >
                  {" "}
                  <IoTimeOutline /> Timeline
                </NavLink>
              </li>
              <li>
                <NavLink to={'/status'}
                  className={({ isActive }) =>
                    `font-semibold mx-2 ${isActive ? "text-white bg-[#244D3F]" : " text-[#244D3F]"}`
                  }
                >
                  {" "}
                  <ImStatsDots />
                  Status
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
