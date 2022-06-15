import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = (props) => {
  const params = useParams();
  //  console.log(params.id)
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    fetch(`https://react-project-ada3d-default-rtdb.firebaseio.com/posts.json/`)
      .then((res) => res.json())
      .then((data) => {
        let ar = [];
        for (const key in data) {
          if (data[key].id == params.id) {
            ar.push(data[key]);
          }
        }
        setTitle(ar[0].title);
        setBody(ar[0].body);
      });
  }, []);

  return (
    <div>
      <div>
        <label>Title</label>
      </div>
      <div>
        <input value={title} type="text" />
      </div>
      <div>
        <label>Body</label>
      </div>
      <div>
        <textarea value={body} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Edit;
