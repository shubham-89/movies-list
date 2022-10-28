import './App.css';
import React from 'react';
import Header from './components/Header';
import Movies from './components/Movies';

function App() {

  const movieData=[
  {
    "id": 1,
    "title": "Avatar",
    "distributor": "20th Century Fox",
    "year": 2009,
    "amount": "$2,787,965,087",
    "img": {
      "src": "https://images.thequint.com/thequint%2F2022-04%2Fe2292423-9414-4568-aa5e-38622cf647b7%2Favatar_2_at_cinemacon_1650898324.jpg",
      "alt": "avatar"
    },
    "ranking": 1
  },
  {
    "id": 2,
    "title": "Titanic",
    "distributor": "20th Century Fox",
    "year": 1997,
    "amount": "$2,187,463,944",
    "img": {
      "src": "https://play-lh.googleusercontent.com/560-H8NVZRHk00g3RltRun4IGB-Ndl0I0iKy33D7EQ0cRRwH78-c46s90lZ1ho_F1so",
      "alt": "titanic"
    },
    "ranking": 2
  },
  {
    "id": 3,
    "title": "Star Wars: The Force Awakens",
    "distributor": "Walt Disney Studios Motion Pictures",
    "year": 2015,
    "amount": "$2,068,223,624",
    "img": {
      "src": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg",
      "alt": "star_wars_the_force_awakens"
    },
    "ranking": 3
  },
  {
    "id": 4,
    "title": "Avengers: Infinity War",
    "distributor": "Walt Disney Studios Motion Pictures",
    "year": 2018,
    "amount": "$2,048,359,754",
    "img": {
      "src": "https://imageio.forbes.com/blogs-images/markhughes/files/2018/04/DOLBY-Exclusive-AVENGERS-INFINITY-WAR-poster-1-1200x1753.jpg?format=jpg&width=960",
      "alt": "avengers_infinity_war"
    },
    "ranking": 4
  },
  {
    "id": 5,
    "title": "Jurassic World",
    "distributor": "Universal Pictures",
    "year": 2015,
    "amount": "$1,671,713,208",
    "img": {
      "src": "https://m.media-amazon.com/images/I/71VZERQjA0L._RI_.jpg",
      "alt": "jurassic_world"
    },
    "ranking": 5
  }
]
  return (
    <div className="App">
       <Header/> 
       <Movies movie={movieData}/>
    </div>
  );
}

export default App;
