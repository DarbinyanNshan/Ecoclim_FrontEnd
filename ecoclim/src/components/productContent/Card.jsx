import React from 'react';
import "./style.css";

export const Card = ({ content }) => {

  return ( <>
    <div className="card">
      <img src={content.image} alt={content.title} className="card-image" />
      <h3>{content.title}</h3>
      {/* <p>{content.description}</p> */}
    </div>
    </>
  );
};


