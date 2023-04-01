import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Program from '../Program/Program';

const Body = ({handleTime}) => {
    const [counts, setCounts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCounts(data))
    }, [])
    return (
        <div>
            {
                counts.map(count => <Program
                key={count.id}
                count={count}
                handleTime={handleTime}
                ></Program>)
            }
        </div>
    );
};

export default Body;