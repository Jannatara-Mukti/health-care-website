import React from 'react';

const SingleDepartment = ({data, index}) => {
    return (
        <div>
            {
                data[index].map(item => (
                <div className="row my-5 py-5">

                    <div className="col-6">
                      <img src={item.img} alt="" className="rounded"/>
                    </div>

                    <div className="col-6 py-5">
                        <h2 className="text-secondary">{item.name}</h2>               
                        <p className="big-font">{item.des}</p>
                        <button className="btn btn-secondary">Read More</button>
                    </div>
                   
              </div>
                ))
            }
    </div>
    );
};

export default SingleDepartment;