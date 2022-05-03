import React from "react";
import "./DisplayPosts.css";
import Buttons from "./Buttons";
const DisplayPosts = (props) => {
  return (
    <div>
      {props.parentPosting.map((post, index) => {
        return (
          <ul className="border-box">
            <div>
              <li>{post.date}</li>
              <li>
                <h3>{post.name}</h3>
              </li>
              <li>{post.post}</li>
              <Buttons />
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
