import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Posts</Link>
      <Link to="/counter">Counter</Link>
    </div>
  );
};

export default Header;
