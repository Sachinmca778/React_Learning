import React from 'react';  //Loads React library to use JSX (mandatory)
import Hello from './Hello'; //Imports the Hello component from another file
import ProfileCard from './ProfileCard'; //Imports the ProfileCard component

function App() {  //A React component — it returns some JSX

  return (    //JSX — syntax to describe UI

    //React needs a single parent element, so we wrap with a div
    <div> 
      <h1>Hello, React!</h1>
      <p>My first React project</p>
      <button>Click Me</button>
      <Hello />  {/* Using the Hello component */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ProfileCard
            name="Aman Kumar"
            role="Frontend Developer"
            image="https://i.pravatar.cc/150?img=1"
          />
          <ProfileCard
            name="Riya Mehta"
            role="UI/UX Designer"
            image="https://i.pravatar.cc/150?img=2"
          />
      </div>
    </div>
  );
}

export default App; //Makes the component available to other files
