import React from 'react';

function ProfileCard(props) { //Props let you customize components with different data
  return (
    <div style={{
      border: "2px solid #ccc",
      borderRadius: "10px",
      padding: "16px",
      width: "250px",
      textAlign: "center",
      margin: "10px"
    }}>
      <img
        src={props.image}  //src stands for source. It is the URL of the image.
        alt={props.name} // alt text for the image. It is used for accessibility and SEO.
        style={{ width: "100px", borderRadius: "50%" }} // style is an object that contains CSS properties.
      />
      <h2>{props.name}</h2>
      <p>{props.role}</p>
    </div>
  );
}

export default ProfileCard;
