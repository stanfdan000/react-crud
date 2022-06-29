import React from 'react';
import { Link } from 'react-router-dom';

export default function Restaurant({ restaurant }) {
  return (
    <div className='restaurant'>
      <Link to={`/restaurant/${restaurant.id}`}>
        <h3>{restaurant.name}</h3>
      </Link>
      <h4>{restaurant.type}</h4>
      <h4>{restaurant.city}</h4>
      <h4>{restaurant.price}</h4>
    </div>
  );
}

