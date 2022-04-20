import React from "react";
import { Card, CardActionArea } from "@material-ui/core";

const Post = ({ title, body }) => {
  return (
    <Card>
      <CardActionArea>
        <img
          style={{ height: 200, width: 300 }}
          src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
        />
        <h2>{title}</h2>
        <h3>{body}</h3>
      </CardActionArea>
    </Card>
  );
};

export default Post;
