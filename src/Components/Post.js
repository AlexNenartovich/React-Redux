import React from "react";
import { Card, CardActionArea, Button } from "@material-ui/core";
import { addToFavorites } from "../Actions/actions";
import { useSelector, useDispatch } from "react-redux";

const Post = ({ post }) => {
  const favorites = useSelector((state) => state.posts.favorites);
  const dispatch = useDispatch();
  const toFavorites = (post) => {
    dispatch(addToFavorites(post));
  };

  const isInFavorites = (post) => {
    return favorites.some((elem) => {
      if (elem.id === post.id) return true;
      return false;
    });
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
        <Button onClick={() => toFavorites(post)}>
          {!isInFavorites(post) ? "Add to Favorites" : "Remove from Favorites"}
        </Button>
      </CardActionArea>
    </Card>
  );
};

export default Post;
