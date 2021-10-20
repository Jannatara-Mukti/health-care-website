import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import imgbg from '../../../../images/servicebg.jpg'
import './ServiceDetails.css';

const ServiceDetails = () => {
    let { serviceId } = useParams();

    const sectionStyle = {
        backgroundImage: `url(${imgbg})`,
        backgrounRepeat: "no-repeat"
    
    }

    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleEmployee, setSingleEmployee] = useState({});
  
    useEffect( ()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data =>{
            setServiceDetails(data)
            const mydata = serviceDetails.filter(service => service.id == serviceId)
            setSingleEmployee(mydata)
        })
        
    }, [serviceDetails])

    return (
        <div>
            {/* <h2>{singleEmployee.length && singleEmployee[0].name}</h2> */}

            <div className="service-background-image text-center">
                    <h2 className="p-5 m-5 text-black">See Details of {singleEmployee.length && singleEmployee[0].name}</h2>
            </div>

           <div className="row m-5 p-5">
               <div className="col-6 col-sm-12">
                    <img src={singleEmployee.length && singleEmployee[0].img} alt="" className="rounded"/>
                </div>
                <div className="col-6 col-sm-12">
                    <h4>Service Name: {singleEmployee.length && singleEmployee[0].name}</h4>
                    <p className="big-font">{singleEmployee.length && singleEmployee[0].description}</p>
                    <p className="text-success">You can get this service at {singleEmployee.length && singleEmployee[0].price}</p>
                    <button className="btn btn-secondary">Come Now</button>
                </div>
           </div>
        </div>
    );
};

export default ServiceDetails;