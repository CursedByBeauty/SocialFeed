import React, { useState } from 'react';
import './CreatePost.css'



const CreatePost = ({addNewPosting}) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost);
        addNewPosting(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit} className='border-box'>
            <div class="CreatePostCenter">
                <div class="card-body">
                    <h3>Name</h3>
                    <input type='name' className="card-text" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div class="card-body">
                    <h3>Post</h3>
                    <input type='post' className="card-text" value={post} onChange={(event) => setPost(event.target.value)} />
                </div>
                <button type='submit' class="btn btn-primary" style={{'margin-top': '1em'}}>Create</button>
            </div>
        </form>
    
    );
}
 
export default CreatePost;