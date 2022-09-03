import React, { useEffect } from "react";
import { fetchPosts } from "../Actions/actions";
import { useSelector, useDispatch } from "react-redux";
import PostList from "./PostList";
import "./index.css";

export default (props) => {
  const posts = useSelector((state) => state.posts.items);
  const search = useSelector((state) => state.posts.searchParam);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const resposts = posts.filter((post) =>
    JSON.stringify(post).includes(search)
  );

  return (
    <div className="post-container">
      <div>
        <PostList type="posts" displayDelete={true} data={resposts} />
      </div>
    </div>
  );
};
