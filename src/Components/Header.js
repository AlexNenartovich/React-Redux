import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./index.css";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";

const Header = () => {
  const favCount = useSelector((state) => state.posts.favorites.length);

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
      <Badge color="primary" badgeContent={favCount}>
        <MailIcon />
      </Badge>
    </div>
  );
};

export default Header;
