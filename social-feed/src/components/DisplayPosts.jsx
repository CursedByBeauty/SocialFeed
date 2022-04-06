import React, {useState} from 'react';
import CreatePost from './CreatePost';
import ReactDOM from 'react-dom';
import './DisplayPosts'

const DisplayPosts = ({parentPosting}) => {
    
    
    return ( 
        

        <div>
            {parentPosting.map((posting) => {
                return (
            
                <div className='DisplayPosts'>
                    <div className="grid-container">
                        <div className="grid-col">
                            <h3 className="card-title">{posting.name}</h3>
                            <p className="card-text">{posting.post}</p>
                            <button className="button-4" role="button">Like</button>
                            <br></br>
                            <button className="button-4" role="button">Dislike</button>
                        </div>
                    </div>
                </div>
            
                );
            })}
        </div>
        


 );
}
 
export default DisplayPosts;