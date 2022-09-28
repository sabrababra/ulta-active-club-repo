import React from 'react';
import './Break.css'
const Break = ({breakTime,setBreakTime}) => {
    const breakTimeList=[
        {id:1,break:'10m'},
        {id:2,break:'20m'},
        {id:3,break:'30m'},
        {id:4,break:'40m'},
        {id:5,break:'50m'}
        
    ]
    const addBreak=(item)=>{
        setBreakTime(item);
        localStorage.setItem('BreakTime',JSON.stringify(item));
    }
    return (
        <div className='my-5'>
           <h5>Add a break:</h5> 
           <div className='addBreak-section'>
           {
            breakTimeList.map(item=> <span onClick={()=>addBreak(item)} className={breakTime?.id===item.id?'activeBreak':'break'} key={item.id}>{item.break} </span>)
           }
           </div>
        </div>
    );
};

export default Break;

