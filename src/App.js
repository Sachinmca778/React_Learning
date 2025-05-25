import React from 'react';  //Loads React library to use JSX (mandatory)

function App() {  //A React component — it returns some JSX

  return (    //JSX — syntax to describe UI

    //React needs a single parent element, so we wrap with a div
    <div>   
      <h1>Hello, React!</h1>
      <p>My first React project</p>
      <button>Click Me</button>
    </div>
  );
}

export default App; //Makes the component available to other files
