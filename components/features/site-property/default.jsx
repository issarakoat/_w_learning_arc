import { OMDB_API_KEY } from 'fusion:environment'
import React, { useState } from "react";

function SiteProperty() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>OMDB_API_KEY: { OMDB_API_KEY }</p>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

export default SiteProperty;