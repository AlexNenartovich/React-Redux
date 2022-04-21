import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./index.css";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";

const Header = () => {
  const favCount = useSelector((state) => state.posts.favorites.length);
  const style = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold"
  };
  return (
    <div className="container">
      <nav className="nav">
        <Button className="posts">
          <Link style={style} to="/">
            Posts
          </Link>
        </Button>
        <Button className="counter">
          <Link style={style} to="/counter">
            Counter
          </Link>
        </Button>
        <Button>
          <Link style={style} to="/favorites">
            Favorites
          </Link>
        </Button>
        <span className="badge">{favCount}</span>
      </nav>
    </div>
  );
};

export default Header;
