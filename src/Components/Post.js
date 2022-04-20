import React from "react";
import { Card, CardActionArea, Button } from "@material-ui/core";
import { addToFavorites } from "../Actions/actions";
import { useSelector, useDispatch } from "react-redux";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const toFavorites = (post) => {
    dispatch(addToFavorites(post));
  };

  return (
    <Card>
      <CardActionArea>
        <img
          style={{ height: 200, width: 300 }}
          src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
        />
        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
        <Button onClick={() => toFavorites(post)}>Add to Favorites</Button>
      </CardActionArea>
    </Card>
  );
};

export default Post;
