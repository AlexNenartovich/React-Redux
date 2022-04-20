import React from "react";
import Post from "./Post";

export default ({ data }) => {
  return data.map((post) => <Post title={post.title} body={post.body} />);
};
