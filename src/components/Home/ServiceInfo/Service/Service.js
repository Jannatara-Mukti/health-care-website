import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {

    const { id, name, description, img} = service;
    return (
        <div className="service">
            <img src={img} alt="" />
           <div className="p-5 text-center">
            <h3>{name}</h3>
                <p>{description}</p>
                <Link to={`/servicedetails/${id}`}>
                    <button className="btn btn-light">See Detail</button>
                </Link>
           </div>
        </div>
    );
};

export default Service;