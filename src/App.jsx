import React, { useState } from "react";
import "./App.css";


function App () {
  const [count, setCount] = useState(1)
    
  function increaseCount() {
      setCount(prevCount => prevCount + 1)
  }

    return (
      <main>
        <div>Current Score:{count}</div>

        <div>
          <button onClick={increaseCount}
        </div>

      </main>
    );
}

export default App;
