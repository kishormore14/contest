import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/top-10">Top</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Nav;
