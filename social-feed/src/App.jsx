import React, { useState } from "react";
import Post from "./components/Post";
import DisplayPosts from "./components/DisplayPosts";
import CreatePost from "./components/CreatePost";
import NavBar from "./components/NavBar";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([{name: "", post: ""}]);

  function addCreatePost(posting) {
    let tempPosts = [...posts, posting];
    setPosts(tempPosts);
  }

  useEffect(() => {
    // Trigger a re-render
  }, [posts]);

  const newLocal = "#E5F2EE";
  return (
    <div className="App">
      <h1 style={{ margin: "1em" }}>
        Social
        <small className="text-muted">Feed</small>
      </h1>

      <script>{(document.body.style.backgroundColor = newLocal)};</script>

        <div className="card-body">
          <CreatePost addNewPosting={addCreatePost} />
        </div>

      <div>
        <DisplayPosts parentPosting={posts}/>
      </div> 

      <div>
        <Post />
      </div>
    </div>
  );
}

export default App;
