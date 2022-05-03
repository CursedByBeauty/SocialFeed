import React, { useState } from "react";
import DisplayPosts from "./components/DisplayPosts";
import CreatePost from "./components/CreatePost";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      date: "4/1/2022",
      name: "JJ Vega",
      post: "It's April Fools Day! Give this a disklike if your really like",
    },
    {
      date: "4/19/2022",
      name: "David L",
      post: "I love playing guitar. Does anyone want to play with me?",
    },
  ]);

  function addCreatePost(posting) {
    let tempPosts = [...posts, posting];
    setPosts(tempPosts);
  }

  return (
    <div className="App">
      <nav className="NavBarItems">
        <h1>
          Social<small className="text-muted">Feed</small>
        </h1>
      </nav>

      <div className="card-body">
        <CreatePost addNewPosting={addCreatePost} />
      </div>

      <div>
        <DisplayPosts parentPosting={posts} />
      </div>
    </div>
  );
}

export default App;
