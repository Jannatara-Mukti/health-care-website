import React from 'react';

const careCard = [
    {
        icon: <i className="fas fa-user-md"></i>,
        name: "Experience Doctors",
        description: "Direct contact with oil spill material, including inhalation of volatile compounds, or physical contact with crude as well as consumption."
    },
    {
        icon: <i className="fas fa-heartbeat"></i>,
        name: "+45 Years Experience",
        description: "Direct contact with oil spill material, including inhalation of volatile compounds, or physical contact with crude as well as consumption."
    },
    {
        icon: <i className="fas fa-medkit"></i>,
        name: "Standards of treatments",
        description: "Direct contact with oil spill material, including inhalation of volatile compounds, or physical contact with crude as well as consumption."
    },
    {
        icon: <i className="fas fa-hospital"></i>,
        name: "The Best Departments",
        description: "Direct contact with oil spill material, including inhalation of volatile compounds, or physical contact with crude as well as consumption."
    }
]

const FreeCare = () => {

    const style = {
        fontSize: 100
      };

    return (
        <div className="bg-secondary p-5 my-5 text-light">
            <div className="row">
                <div className="col-sm-6 ">
                    <h4>Medical quality care</h4>
                    <h2>Complete health care solutions for everyone</h2>
                </div>
                <div className="col-sm-6 ">
                    <p>MedDoctors Are A Medical And Health Department Provider Institutions. Suitable For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And Any Related Medical Care Field.</p>
                    <button className="btn btn-light">Book An Appoinment</button>
                </div>
            </div>
            <div className="row my-5">
                {
                    careCard.map( cd => <div className="col bg-light text-dark m-1 pb-3 text-center"> 
                        <span style={style}>{cd.icon}</span>
                        <h5>{cd.name}</h5>
                        <p>{cd.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FreeCare;