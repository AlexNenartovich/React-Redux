import React from "react";
import { useSelector } from "react-redux";
import PostList from "./PostList";

const Favorites = () => {
  const favorites = useSelector((state) => state.posts.favorites);
  return (
    <div>
      <PostList data={favorites} />
    </div>
  );
};

export default Favorites;
