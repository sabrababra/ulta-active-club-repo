import React from 'react';
import './Detail.css';
const Detail = ({data,breakTime}) => {
    return (
        <div className='mt-5'>
           <h6 className='addBreak-section'> Reading time: {data} hours</h6> 
           <h6 className='addBreak-section'>Break time: {breakTime?.break}</h6>
        </div>
    );
};

export default Detail;