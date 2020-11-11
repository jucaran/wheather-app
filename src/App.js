import React, { useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import About from './components/About';
import City from './components/City';

const App = () => {
  const [cities, setCities] = useState([]);
  
  const apiKey= '8f4e5b29016d0d3407ab7990020b059a'

  const onSearch = (city) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(ciudad => {
      if(ciudad.data.main !== undefined) {
        const nuevaCiudad = {
          min: Math.round(ciudad.data.main.temp_min),
          max: Math.round(ciudad.data.main.temp_max),
          img: ciudad.data.weather[0].icon,
          id: ciudad.data.id,
          wind: ciudad.data.wind.speed,
          temp: ciudad.data.main.temp,
          name: ciudad.data.name,
          weather: ciudad.data.weather[0].main,
          clouds: ciudad.data.clouds.all,
          latitud: ciudad.data.coord.lat,
          longitud: ciudad.data.coord.lon 
        }
        if (cities.filter( c => c.id === nuevaCiudad.id ).length > 0) alert('Esta ciudad ya ha sido agregada');
        else setCities(oldCities => [...oldCities, nuevaCiudad]);
      } else  alert('Ciudad no encontrada');
    })
    .catch (e => {
      console.log(e);
      alert('Ha ocurrido un error')}
    )
  }
  const onClose = id =>
    setCities(oldCities => oldCities.filter(c => c.id !== id))

  return (
    <div className="App">
      <Route path="/clima-app" render={() => <Nav onSearch={onSearch} />} />
      <Route path="/clima-app/about" component={About} />
      <Route exact path="/clima-app" 
        render={() => <Cards onClose={onClose} cities={cities}/>} />
      <Route path="/clima-app/ciudad/:id"
        render={({match}) => <City city={cities.filter( c => c.id === parseInt(match.params.id) )}/>}
      />
    </div>
  );
}

export default App;
