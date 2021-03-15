import React, { useState } from 'react';
import './style.scss';

function Banner() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div style={{backgroundImage: "url('https://images.unsplash.com/photo-1615549332616-3922167e33f8?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
      ,backgroundRepeat:'no-repeat'
      ,width: '100vw'
      ,height: '100vw'
      ,backgroundSize: '100% 50%'
    }}>
      <p className='blue-color'>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me now
      </button>
    </div>
  );
}

export default Banner;