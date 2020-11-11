import React from 'react';
import { Link } from 'react-router-dom';
import s from './City.module.css';

export default function City({ city }) {
  if (city.length > 0) { 
    const { name, temp, min, max, wind, clouds, latitud, longitud, img } = city[0];
    return (
      <div className={s.box}>
        <Link className={s.link} to="/clima-app">Volver</Link>
        <div>
          <h2 className={s.title}>{name}</h2>
            <article className={s.data_box}>
              <ul className={s.data_list}>
                <li className={s.data_item}>
                  <h4>Temp actual:</h4><span>{temp}°C</span>
                </li>
                  <li className={s.data_item}>
                    <h4>Temp mínima:</h4><span>{min}°C</span>
                </li>
                  <li className={s.data_item}>
                    <h4>Temp máxima:</h4><span>{max}°C</span>
                </li>
                <li className={s.data_item}>
                  <h4>Viento:</h4><span>{wind}km/h</span>
                </li>
                <li className={s.data_item}>
                  <h4>Nubes:</h4><span>{clouds}%</span>
                </li>
                <li className={s.data_item}>
                  <h4>Latitud:</h4><span>{latitud}</span>
                </li>
                <li className={s.data_item}>
                  <h4>Longitud:</h4><span>{longitud}</span>
                </li>
              </ul>
            </article>
        </div>
        <div>
          <img 
            className={s.img}
            src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
            alt="icon"
          />
        </div> 
      </div>
    ) 
  } else {
    return (
      <h2 style={{'paddingTop': '20vh'}}> Ciudad no agregada </h2>
    )
  }
}
