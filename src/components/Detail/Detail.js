import React from 'react';
import './Detail.css';
const Detail = ({data}) => {
    return (
        <div className='mt-5'>
           <h6> Reading time: {data} hours</h6> 
           <h6>Breake time:</h6>
        </div>
    );
};

export default Detail;