import React from 'react';

const SingleSpecialist = ({specialist}) => {
    const { name, img, specialAt } = specialist;
    return (
        <div className="col-lg-3 col-sm-6 col-12 shadow-lg gap-2 text-center">
            <img src={img} alt="" />
            <h3 className="text-dark">{name}</h3>
            <h5 className="text-muted">{specialAt}</h5>
        </div>
    );
};

export default SingleSpecialist;