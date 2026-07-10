import { useState } from "react";

export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);
    function like(){
        setIsLiked(!isLiked);
    };
    return(
        <div>
            <h1>Like Button</h1>
            <p onClick={like}>
            {
            isLiked ? (<i className="fa-solid fa-heart"></i>) :
            (<i className="fa-regular fa-heart"></i>)   
            }
            </p>
        </div>
    )
}