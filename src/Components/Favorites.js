import React from "react";
import { useSelector } from "react-redux";
import PostList from "./PostList";
import "./index.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.posts.favorites);
  return (
    <div className="post-container">
      <PostList displayDelete={false} data={favorites} />
    </div>
  );
};

export default Favorites;
