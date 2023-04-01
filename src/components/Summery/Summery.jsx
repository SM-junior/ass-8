import React from 'react';

const Summery = (props) => {
    const{time}=props.time
    return (
        <div>
            <h2 className='text-2xl rounded-lg border-indigo-700 border-2 text-[#6047EC] bg-indigo-100 py-2 text-center'>Spent time on read : {props.time} min</h2>
        </div>
    );
};

export default Summery;