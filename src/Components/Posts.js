import React, { useRef, useEffect } from "react";
import { fetchPosts, addPost } from "../Actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardActionArea, CarContent } from "@material-ui/core";

export default (props) => {
  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();
  const titleRef = useRef();
  const bodyRef = useRef();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: titleRef.current.value,
      body: bodyRef.current.value
    };
    //  console.log(data);
    dispatch(addPost(data));
    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  const res = posts.map((post) => (
    <Card>
      <CardActionArea>
        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
      </CardActionArea>
    </Card>
  ));

  return (
    <div>
      <div>
        <input ref={titleRef} type="text" placeholder="Title" />
      </div>
      <br />
      <div>
        <input ref={bodyRef} type="text" placeholder="Body" />
      </div>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <div>{res}</div>
    </div>
  );
};
