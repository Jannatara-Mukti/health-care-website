import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);


    return (
        <div id="services">
            <h2 className="text-center my-5 text-secondary">Our Services</h2>
            <div className="service-container m-5">
            {
                    services.map( service => <Service 
                        key={service.id}
                        service={service}
                    ></Service>)
                }
           </div>
        </div>
    );
};

export default Services;