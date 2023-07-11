import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styles/Card.module.css';

const Card = (props) => {
    const { id, flags, name, continents} = props;

    return (
        <div className={style.container}>
            <div className={style.card}>
                <NavLink to={`/DetailPage/${id}`} className={style.link}>
                    <img src={flags} alt={name} className={style.pais} />
                    <p>name: {name}</p>
                    <p>continent: {continents}</p>
                    
                </NavLink>
            </div>
        </div>
    );
};

export default Card;
