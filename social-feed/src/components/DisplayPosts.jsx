import React, {useState} from 'react';
import CreatePost from './CreatePost';
import ReactDOM from 'react-dom';

const DisplayPosts = ({parentPosting}) => {
    
    
    return ( 
        <form className="border-box">

            <div>
            {parentPosting.map((posting, index) => {
                return (
            <p key={index}>
                <h3>{posting.name}</h3>
                <p>{posting.post}</p>
            </p>
                );
            })}
            </div>
        </form>


 );
}
 
export default DisplayPosts;