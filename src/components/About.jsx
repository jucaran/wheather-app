import React from 'react';
import s from './About.module.css';

export default function About() {
  return (
    <article className={s.box}>
      <h2> Esta es una app desarrollada para interiorizarme en React! </h2> 
      <p> Podes agregar ciudades, eliminarlas y ver sus datos especificos </p>
    </article>
  )
}
