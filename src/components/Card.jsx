import React from 'react';
import { Link } from 'react-router-dom';
import s from './Card.module.css'

export default function Card({name, min, max, img, onClose, id}) {
  return (
      <div className={s.card}>
        <div className={s.header}>
          <Link className={s.link} to={`/clima-app/ciudad/${id}`} >
            <h2 className={s.ciudad_tit}>{name}</h2>
          </Link>
          <div className={s.close_btn} onClick={onClose}>x</div>
        </div>
        <div className={s.data_box}>
        <div className={s.temp}>
          <h4 className={s.temp_tit}>Min</h4><span>{min}</span>
        </div>
        <div className={s.temp}>
          <h4 className={s.temp_tit}>Max</h4><span>{max}</span>
        </div>
        <img className={s.icon} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icon"/> 
        </div>
      </div>
  )
};
