import React from "react";
import { useSelector } from "react-redux";
import PostList from "./PostList";
import "./index.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.posts.favorites);
  let res = "";
  if (favorites.length === 0) {
    res = <h2>You currently have no favorite posts</h2>;
  } else {
    res = <PostList displayDelete={false} data={favorites} />;
  }
  return <div className="post-container">{res}</div>;
};

export default Favorites;
