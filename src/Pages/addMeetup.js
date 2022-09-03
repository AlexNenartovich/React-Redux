import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { addPost, addToFavorites } from "../Actions/actions";
import { useNavigate } from "react-router-dom";

const addMeetup = () => {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const titleRef = useRef();
  const bodyRef = useRef();
  const posts = useSelector((state) => state.posts.items);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: posts[posts.length - 1]["id"] + 1,
      title: titleRef.current.value,
      body: bodyRef.current.value
    };
    if(check)
      dispatch(addToFavorites(data));
    else
      dispatch(addPost(data));
    titleRef.current.value = "";
    bodyRef.current.value = "";
    navigate("/");
  };

  return (
    <div className="post-container">
      <div>
        <input ref={titleRef} type="text" placeholder="Title" />
      </div>
      <br />
      <div>
        <textarea
          style={{ height: 100 }}
          ref={bodyRef}
          type="text"
          placeholder="Body"
        />
      </div>
      <br />
      <div>
        <input onChange={() => setCheck(!check)} value={check} type="checkbox" />
        <span style={{ fontSize: 15, paddingLeft: 10}}>Add to favorites</span>
      </div>
      <br />
      <div style={{ paddingLeft: 70 }}>
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default addMeetup;