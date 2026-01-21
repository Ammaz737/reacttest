import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { CiStickyNote } from "react-icons/ci";
import { FaTachometerAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { GoTools } from "react-icons/go";
import { Link, useNavigate } from "react-router";
import { FaRegCircle } from "react-icons/fa";
import HoverSidebar from "./HoverSidebar";
const Sidebar = () => {
    const [hover, setHover] = useState(false)
  return (
    <div>
      <div className=" bg-black w-50 h-screen text-white text-center">
        <div className="pt-6">
          <Link to="/" className="text-xl font-bold">
            Utar Pardesh
          </Link>
          <div className="pt-7">
            <Link
              to={"/dashboard"}
              className="flex flex-col items-center gap-2 py-2 hover:bg-gray-800"
            >
              <MdOutlineDashboard size={20} />
              <h2>Dashboard </h2>
            </Link>
            <Link
              to={"/article"}
              className="flex flex-col items-center gap-2 py-2 hover:bg-gray-800"
            >
              <CiStickyNote size={20} />
              <h2>Story Management</h2>
            </Link>
            <Link
              to="/Priority Management"
              className="flex flex-col items-center gap-2 py-2 hover:bg-gray-800"
            >
              <FaTachometerAlt size={20} />
              <h2>Priority Management</h2>
            </Link>
            <Link
              to="/Tools"
              className="flex flex-col items-center gap-2 py-2 hover:bg-gray-800"
            >
              <GoTools size={20} />
              <h2>Tools</h2>
            </Link>
            <Link
              to="/user-management"
              className="flex flex-col items-center gap-2 py-2 hover:bg-gray-800"
            >
              <CiUser size={20} />
              <h2>User</h2>
            </Link>
          </div>
        </div>
        <div>
          <Link
            to="/logout"
            className="flex flex-col items-center gap-2 py-18 hover:text-red-600"
          >
            <FaRegCircle size={25} />
            <h2>Logout</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
