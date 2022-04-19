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
  //  console.log(data);
  return {
    type: FETCH_POSTS,
    payload: data
  };
};

export const fetchPosts = () => async (dispatch) => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());
  dispatch(load(data));
};
