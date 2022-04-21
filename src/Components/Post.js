import React from "react";
import { Card, CardActionArea, CardContent, Button } from "@material-ui/core";
import { addToFavorites, removeFromFavorites } from "../Actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

const Post = ({ post }) => {
  const favorites = useSelector((state) => state.posts.favorites);
  const dispatch = useDispatch();
  const toFavorites = (post) => {
    if (!isInFavorites(post)) dispatch(addToFavorites(post));
    else dispatch(removeFromFavorites(post));
  };

  const isInFavorites = (post) => {
    return favorites.some((elem) => {
      if (elem.id === post.id) return true;
      return false;
    });
  };

  return (
    <div>
      <Link
        state={{ title: post.title, body: post.body }}
        to="read"
        style={{ textDecoration: "none" }}
      >
        <Card>
          <CardActionArea
          //    component={Link} to={"/read"}
          >
            <CardContent title={post.title}>
              <img
                style={{ height: 200, width: 300 }}
                src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
              />
              <h2>{post.title}</h2>
              <h3>{post.body}</h3>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <Button
        color="primary"
        variant="contained"
        onClick={() => toFavorites(post)}
      >
        {!isInFavorites(post) ? "Add to Favorites" : "Remove from Favorites"}
      </Button>
      <br />
      <br />
    </div>
  );
};

export default Post;
