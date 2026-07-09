import { useState } from "react";
export default function Count() {
  let [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count+1);
  }
  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={increaseCount}>Tap</button>
    </div>
  );
}

