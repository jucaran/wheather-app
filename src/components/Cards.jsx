import React from 'react';
import Card from './Card'
import s from './Cards.module.css'

export default function Cards({cities, onClose}) {
  if (cities.length > 0) {
    return (
      <div className={s.cards_box}>
	{
	  cities.map(city => 
	    <Card 
	      max={parseInt(city.max)+ '°'} 
	      min={parseInt(city.min) + '°'} 
	      name={city.name} 
	      img={city.img} 
	      onClose={() => onClose(city.id)} 
	      id={city.id}
        key={city.name}
	    />)
	}
      </div>
    )
  } else {
    return (
      <div className={s.titulo}><h2>Sin ciudades</h2></div>
    )
  }
};
