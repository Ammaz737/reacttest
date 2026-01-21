import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const HoverSidebar = () => {
  const Navigate = useNavigate;
  return (
    <div>
      <div className=" bg-black w-50 h-screen text-white text-center">
      <Link to={"/article"}>Add Story</Link>
      <Link>View Story</Link>
      <Link>View Schedule Story</Link>
      <Link>E-PDF</Link>
      <Link>Create Poll</Link>
      <Link>Video List</Link>
      <Link>Contact List</Link>
    </div>
    </div>
  );
};

export default HoverSidebar;
