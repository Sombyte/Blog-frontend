import React from "react";
import './post.css'

import { Link } from "react-router-dom";
export default function Post({img}) {
    return (
        <div className="post">
            <img className='postimg' src={img} alt="" />
            <div className="postinfo">
                <div className="postcats">
                    <span className="postcat">
                    <Link className="link" to="/post">Music</Link>
                    </span>
                    <span className="postcat"><Link className="link" to="/post">Life</Link>
                    </span>
                </div>
                <span className="posttital">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <hr/>
            <span className="postdate">1 hour ago</span>
            </div>
            <p className="postdis">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatibus veniam qui eveniet repudiandae doloribus deserunt, totam, 
            excepturi dolorum veritatis dignissimos quisquam repellat saepe dolores! 
            Quidem ullam incidunt at eum quasi.</p>
        </div>

    )
}