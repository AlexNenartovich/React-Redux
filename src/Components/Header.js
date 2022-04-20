import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./index.css";

const Header = () => {
  return (
    <div className="container">
      <Button className="posts">
        <Link to="/">Posts</Link>
      </Button>
      <Button className="counter">
        <Link to="/counter">Counter</Link>
      </Button>
      <Button>
        <Link to="/favorites">Favorites</Link>
      </Button>
    </div>
  );
};

export default Header;
