import React, { useState } from 'react';
import data from './Data';
import SingleDepartment from './SingleDepartment';
import './AllDepartment.css';

const AllDepartment = () => {
    const [active, setActive] = useState("first");

    return (
        <div id="departments">
            <div className="deparment-background-image text-center">
                    <h2 className="p-5 m-5 text-black"> Know About Our Deparments</h2>
            </div>
        <div className="m-5 p-5 text-center shadow shadow-lg">
            <nav>
                <button onClick={()=>setActive("first")} className="btn btn-primary me-1">Orthopaedic</button>
                <button onClick={()=>setActive("second")} className="btn btn-primary me-1">Cardiology</button>
                <button onClick={()=>setActive("third")} className="btn btn-primary me-1">Neurology</button>
                <button onClick={()=>setActive("fourth")} className="btn btn-primary me-1">Dental</button>
                <button onClick={()=>setActive("fifth")} className="btn btn-primary">Hemtology</button>
            </nav>
            <div>
                {active==="first" && <SingleDepartment data={data} index={0}></SingleDepartment>}
                {active==="second" && <SingleDepartment data={data} index={1}></SingleDepartment>}
                {active==="third" && <SingleDepartment data={data} index={2}></SingleDepartment>}
                {active==="fourth" && <SingleDepartment data={data} index={3}></SingleDepartment>}
                {active==="fifth" && <SingleDepartment data={data} index={4}></SingleDepartment>}
            </div>
        </div>
        </div>
    );
};

export default AllDepartment;