import React from 'react'
import { Link } from 'react-router-dom';
import './card.css'
import dog from './dog.png'

function Card({ id, name, img, temp }) {
    
    console.log(img)
    return (
        <div className="card">
            <p className="title">{name}</p>
            <div className="imgContainer">
            <img src={img || dog} className="img" alt='dog'/>
            </div>
            <div className="tempContainer">
            <p className="titleTemp">Temperament</p>
            <p className="temp">{temp}</p>
            </div>

         
            <Link className="buttons" to={`/home/detail/${id}`}>
                <button className="button">know me</button>
            </Link>
        </div>
    )
}

export default Card;