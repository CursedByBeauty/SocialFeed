import React, {Fragment} from "react";
import DisplayPosts from "./DisplayPosts";
import './Post.css'
import './NavBar.css'

const Post = () => {
  return (
    <Fragment>
       
            <div className="grid-container">
                <div className="col-md-12">
                    <h3 className="card-title">David Lagrange</h3>
                    <p className="card-text">
                        I recently went into the woods to search for the oldest tree I could
                        find. To my luck I found a very old hemlock around 200 - 250 years
                        old. Let me know if you would like me to show it to you!
                    </p>
                    <a href="#" className="btn btn-primary">
                        Like
                    </a>
                    <br></br>
                    <a href="#" className="btn btn-primary">
                        Dislike
                    </a>
                </div>
                <div className="col-md-12">
                    <h3 className="card-title">JJ Vega</h3>
                    <p className="card-text">
                        Its April Fools Day! Give this a dislike if you really like it. : )
                    </p>
                    <a href="#" className="btn btn-primary">
                        Like
                    </a>
                    <br></br>
                    <a href="#" className="btn btn-primary">
                        Dislike
                    </a>
                </div>
                <div className="col-md-12">
                    <h3 className="card-title">Nevin Seibel</h3>
                    <p className="card-text">
                        My Rubik's cube is fully charged and ready for battle. Right after I
                        eat my meal that has appeared from the magical hand from behind my
                        curtain.
                    </p>
                    <a href="#" className="btn btn-primary">
                        Like
                    </a>
                    <br></br>
                    <a href="#" className="btn btn-primary">
                        Dislike
                    </a>
                </div>
            </div>
        
    </Fragment>
  );
};

export default Post;
