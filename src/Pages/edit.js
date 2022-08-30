import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [dataKey, setDatakey] = useState("");

  useEffect(() => {
    fetch(`https://react-project-ada3d-default-rtdb.firebaseio.com/posts.json/`)
      .then((res) => res.json())
      .then((data) => {
        let ar = [];
        for (const key in data) {
          if (data[key].id == params.id) {
            setDatakey(key);
            ar.push(data[key]);
          }
        }
        setTitle(ar[0].title);
        setBody(ar[0].body);
      });
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const upd = {
      title,
      body
    };
    fetch(
      `https://react-project-ada3d-default-rtdb.firebaseio.com/posts/${dataKey}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(upd)
      }
    ).then(() => navigate("/"));
  };

  return (
    <div>
      <div>
        <label>Title</label>
      </div>
      <div>
        <textarea
          onChange={handleTitleChange}
          name="title"
          style={{ height: 50, width: 300 }}
          value={title}
          type="text"
        />
      </div>
      <div>
        <label>Body</label>
      </div>
      <div>
        <textarea
          onChange={handleBodyChange}
          name="body"
          style={{ height: 500, width: 300 }}
          value={body}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
        <span>
          <button onClick={() => navigate("/")}>Cancel</button>
        </span>
      </div>
    </div>
  );
};

export default Edit;
