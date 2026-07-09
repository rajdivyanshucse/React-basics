import { useState } from "react";

export default function CharCount(){
    let [charCount, setCharCount] = useState(0);
    function incCount(e){
        setCharCount(e.target.value.length)
        console.log(charCount);
    }
    return(
        <div>
            <h1>Counting Character</h1>
            <h3>count ={charCount}</h3>
            <input placeholder="Write Something" onChange={incCount}></input>
        </div>
    )
}