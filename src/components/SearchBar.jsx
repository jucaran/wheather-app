import React, {useState} from 'react';
import s from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  return (
    <form className={s.box} onSubmit={
      (e) => {
        e.preventDefault();
        onSearch(city);
        setCity('');
      }
    }>
      <input 
        className={s.input_txt} 
        placeholder="Buscar una ciudad" 
        type="search" 
        onChange={e => setCity(e.target.value)}
        value={city}
      /> 
      <input className={s.input_btn} type="submit" value="Agregar"/>
    </form>
  )
};
