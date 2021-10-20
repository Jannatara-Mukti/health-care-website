import React, { useEffect, useState } from 'react';
import SingleSpecialist from '../SingleSpecialist/SingleSpecialist';


const Specialist = () => {
    const [specialists, setSpecialists] = useState([]);

    useEffect( ()=>{
        fetch('specialist.json')
        .then(res => res.json())
        .then(data => setSpecialists(data))
    }, []);
    return (
        <div>
            <h2 className="text-center my-5 text-secondary">Our Specialist </h2>
            <div className="row">
                {
                    specialists.map(specialist => <SingleSpecialist
                        key={specialist.id}
                        specialist={specialist}
                    ></SingleSpecialist>)
                }
            </div>
        </div>
    );
};

export default Specialist;