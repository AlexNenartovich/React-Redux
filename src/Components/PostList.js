import React, { useState } from "react";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from "@material-ui/core/CircularProgress";

export default ({ data, displayDelete, type }) => {
  const [slice, setSlice] = useState(10);
  const [more, setMore] = useState(true);
  const incr = 10;
  const len = data.length;

  const handleClick = () => {
    if (slice === len) {
      setMore(false);
      return;
    } else if (slice + incr > len) {
      //    setMore(false);
      setSlice(len);
      return;
    }
    setTimeout(() => {
      setSlice(slice + incr);
    }, 2000);
  };
  const res = data
    .slice(0, slice)
    .map((post, index) => (
      <Post type={type} displayDelete={displayDelete} key={index} post={post} />
    ));

  return (
    <InfiniteScroll
      dataLength={slice}
      next={handleClick}
      hasMore={more}
      loader={<CircularProgress size="8rem" />}
      endMessage={<h2>You have reached the end</h2>}
    >
      <div>{res}</div>
    </InfiniteScroll>
  );
};
