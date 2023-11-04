import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card">
          <Link to={'/'+ props.id}><img src="src/assets/crewmate.ce385016.png" class="single-crewmate" height="150px" width="auto" /></Link>
          <h2 className="name">{props.name}</h2>
          <h2 className="color">{props.color}</h2>
          <h2 className="speed">{props.speed}</h2>
      </div>
  );
};

export default Card;