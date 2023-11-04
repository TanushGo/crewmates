import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card">
          <Link to={'/crew/'+ props.id}><img src="src/assets/crewmate.ce385016.png" className="single-crewmate" height="150px" width="auto" /></Link>
          <h2 className="name">{props.name}</h2>
          <h2 className="color">{props.color}</h2>
          <h2 className="speed">{props.speed}</h2>
          <Link to={'/crew/'+ props.id +"/edit"}><button>Edit Crewmate</button></Link>
      </div>
  );
};

export default Card;