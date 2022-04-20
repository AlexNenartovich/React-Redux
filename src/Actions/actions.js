import { INCREMENT, DECREMENT, FETCH_POSTS } from "./types";
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

const load = (data) => {
  return {
    type: FETCH_POSTS,
    payload: data
  };
};

const add = (post) => {
  return {
    type: "ADD_POST",
    payload: post
  };
};

export const addToFavorites = (post) => {
  return {
    type: "ADD_FAVORITE",
    payload: post
  };
};

export const removeFromFavorites = (post) => {
  return {
    type: "REMOVE_FAVORITE",
    payload: post
  };
};

export const addPost = (post) => async (dispatch) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  }).then((res) => res.json());
  dispatch(add(post));
};

export const fetchPosts = () => async (dispatch) => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());
  dispatch(load(data));
};
