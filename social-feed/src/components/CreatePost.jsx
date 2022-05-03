import React, { useState } from "react";
import "./CreatePost.css";

const CreatePost = (props) => {
  const [date] = useState(new Date().toLocaleDateString());
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      date: date,
      name: name,
      post: post,
    };
    props.addNewPosting(newPost);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="border-box">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Post</label>
        <textarea
          type="text"
          className="form-control"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />{" "}
        <div>
          <button className='post'type="submit">Create</button>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
