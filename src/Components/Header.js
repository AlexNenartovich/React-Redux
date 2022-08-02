import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./index.css";

const Header = () => {
  let activeStyle = {
    textDecoration: "underline"
  };
  let activeClassName = "underline";
  const favCount = useSelector((state) => state.posts.favorites.length);
  const style = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold"
  };
  return (
    <nav className="container">
      <nav className="nav">
        <Button className="posts" title="Posts">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { color: "blue", fontWeight: "bold" }
                : { color: "black", textDecoration: "none", fontWeight: "bold" }
            }
            to="/"
          >
            Posts
          </NavLink>
        </Button>
        <Button className="counter" title="Counter">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { color: "blue", fontWeight: "bold" }
                : { color: "black", textDecoration: "none", fontWeight: "bold" }
            }
            to="/counter"
          >
            Counter
          </NavLink>
        </Button>
        <Button className="favorites" title="Favorites">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { color: "blue", fontWeight: "bold" }
                : { color: "black", textDecoration: "none", fontWeight: "bold" }
            }
            to="favorites"
          >
            Favorites
          </NavLink>
        </Button>
        <span className="badge">{favCount}</span>
      </nav>
    </nav>
  );
};

export default React.memo(Header);
