import React from 'react';
import ReactDOM from 'react-dom';
import MediaCard from './components/MediaCard';
import './main.scss';
import perri from './images/ornitorrinco.jpg';


const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat est ducimus nam pariatur dolore laudantium numquam repellat quo, quod nobis minus, mollitia explicabo culpa atque expedita aut eius necessitatibus quia.';
const likes = 37;
const hearts = likes > 30 ? 'red' : '';
ReactDOM.render(
  <MediaCard
    name = 'Perri el ornitorrinco'
    date = '05 de Septiembre de 2019'
    image = {perri}
    text = {text}
    likes = {likes}
    heart = {hearts}
  />
  , document.getElementById('root')
);

