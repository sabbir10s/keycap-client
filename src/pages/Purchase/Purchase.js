import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams()
    return (
        <div>
            <p>This is Purchase Page{id} </p>
        </div>
    );
};

export default Purchase;