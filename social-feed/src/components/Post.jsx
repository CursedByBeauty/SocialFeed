import React from 'react';
import DisplayPosts from './DisplayPosts';
const Post = (props) => {
    
    return ( 
        <div class="card w-50">
            <div class="card-body">
                <h3 style={{margin: 'em'}}>David Lagrange</h3>
                <p class="card-text">I recently went into the woods to search for the oldest tree I could find. To my luck I
found a very old hemlock around 200 - 250 years old. Let me know if you would like
me to show it to you!</p>
                <a href="#" class="btn btn-primary">Like</a><br></br>
                <a href="#" class="btn btn-primary">Dislike</a>
            </div>
            <div class="card-body">
                <h3 class="card-title">JJ Vega</h3>
                <p class="card-text">Its April Fools Day! Give this a dislike if you really like it. : )</p>
                <a href="#" class="btn btn-primary">Like</a><br></br>
                <a href="#" class="btn btn-primary">Dislike</a>
            </div>
            <div class="card-body">
                <h3 class="card-title">Nevin Seibel</h3>
                <p class="card-text">My Rubik's cube is fully charged and ready for battle. Right after I eat my meal that
has appeared from the magical hand from behind my curtain.</p>
                <a href="#" class="btn btn-primary">Like</a><br></br>
                <a href="#" class="btn btn-primary">Dislike</a>
            </div>
        </div>
        
    );
}
 
export default Post;