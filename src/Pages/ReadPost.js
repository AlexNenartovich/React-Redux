import React from "react";
import { useLocation } from "react-router-dom";

export default () => {
  const location = useLocation();
  return (
    <div>
      <div>Hello!!!</div>
      <h1>{location.state.title}</h1>
      <h2>{location.state.body}</h2>
    </div>
  );
};
