import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import UserInfo from '../UserInfo/UserInfo';
import Break from '../Break/Break';
import Detail from '../Detail/Detail';
import Button from '../Button/Button';
const Sidebar = ({data}) => {
    const [breakTime,setBreakTime]=useState(null);
    useEffect(()=>{
        const localData=localStorage.getItem('BreakTime');
        if(localData){
            setBreakTime(JSON.parse(localData));
        }
    },[])
    return (
        <div className='p-3 sitebar-container'>
            <UserInfo></UserInfo>
            <Break breakTime={breakTime} setBreakTime={setBreakTime}></Break>
            <Detail data={data} breakTime={breakTime}></Detail>
            <Button></Button>
            
         
        </div>
    );
};

export default Sidebar;