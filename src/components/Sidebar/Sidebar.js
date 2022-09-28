import React from 'react';
import './Sidebar.css';
import UserInfo from '../UserInfo/UserInfo';
import Break from '../Break/Break';
import Detail from '../Detail/Detail';
import Button from '../Button/Button';
const Sidebar = ({data}) => {
    return (
        <div className='p-3 sitebar-container'>
            <UserInfo></UserInfo>
            <Break></Break>
            <Detail data={data}></Detail>
            <Button></Button>
            
         
        </div>
    );
};

export default Sidebar;