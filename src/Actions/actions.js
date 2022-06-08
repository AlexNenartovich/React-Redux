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

const loadFav = (data) => {
  return {
    type: "FAVORITES",
    payload: data
  };
};

const add = (post) => {
  return {
    type: "ADD_POST",
    payload: post
  };
};

const addFavoritePost = (post) => {
  return {
    type: "ADD_FAVORITE",
    payload: post
  };
};

export const deletePost = (post) => async (dispatch) => {
  const rem = await fetch(
    "https://react-project-ada3d-default-rtdb.firebaseio.com/posts.json"
  ).then((res) => res.json());
  let del = "";
  for (const key in rem) {
    if (rem[key].id === post.id) del = key;
  }
  const data = await fetch(
    `https://react-project-ada3d-default-rtdb.firebaseio.com/posts/${del}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    }
  ).then((res) => res.json());
  dispatch(deleteP(post));
};

const deleteP = (post) => {
  return {
    type: "DELETE",
    payload: post
  };
};

export const addToFavorites = (post) => async (dispatch) => {
  const data = await fetch(
    "https://react-project-ada3d-default-rtdb.firebaseio.com/favorites.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    }
  ).then((res) => res.json());
  dispatch(addFavoritePost(post));
  // return {
  // type: "ADD_FAVORITE",
  //payload: post
  //};
};

const remove = (post) => {
  return {
    type: "REMOVE_FAVORITE",
    payload: post
  };
};

export const removeFromFavorites = (post) => async (dispatch) => {
  //console.log("Deleting");
  //console.log(post.id);
  const rem = await fetch(
    "https://react-project-ada3d-default-rtdb.firebaseio.com/favorites.json"
  ).then((res) => res.json());
  let del = "";
  for (const key in rem) {
    if (rem[key].id === post.id) del = key;
  }
  const data = await fetch(
    `https://react-project-ada3d-default-rtdb.firebaseio.com/favorites/${del}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    }
  ).then((res) => res.json());
  dispatch(remove(post));
  /*
  return {
    type: "REMOVE_FAVORITE",
    payload: post
  };
  */
};

export const addPost = (post) => async (dispatch) => {
  const data = await fetch(
    "https://react-project-ada3d-default-rtdb.firebaseio.com/posts.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    }
  ).then((res) => res.json());
  dispatch(add(post));
};

export const fetchPosts = () => async (dispatch) => {
  const data = await fetch(
    //  "https://jsonplaceholder.typicode.com/posts"
    "https://react-project-ada3d-default-rtdb.firebaseio.com/posts.json"
  )
    .then((res) => res.json())
    .then((post) => {
      let ar = [];
      for (const key in post) {
        const obj = {
          id: key,
          ...post[key]
        };
        ar.push(obj);
      }
      return ar;
    });

  const fav = await fetch(
    //  "https://jsonplaceholder.typicode.com/posts"
    "https://react-project-ada3d-default-rtdb.firebaseio.com/favorites.json"
  )
    .then((res) => res.json())
    .then((post) => {
      let ar = [];
      for (const key in post) {
        const obj = {
          id: key,
          ...post[key]
        };
        ar.push(obj);
      }
      return ar;
    });
  //  dispatch(load(res))
  dispatch(load(data));
  dispatch(loadFav(fav));
};
