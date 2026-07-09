import { useState } from "react";
export default function HideText(){
    let [isVisible, setIsVisible] = useState(true);

    function hide(){
        setIsVisible(!isVisible);
    }
    return(
        <div>
            <h1>Hide & Seek</h1>
            {isVisible && <p>Hiding behind the server</p>}
            <button onClick={hide}>{isVisible ? "Hide" : "Show"}</button>
        </div>
    )
}