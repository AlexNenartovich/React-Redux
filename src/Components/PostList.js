import React from "react";
import Post from "./Post";

export default ({ data }) => {
  console.log(data);
  return data.map((post) => <Post post={post} />);
};
