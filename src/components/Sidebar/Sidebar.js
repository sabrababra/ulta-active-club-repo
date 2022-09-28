import React from 'react';
import './Sidebar.css';
import UserInfo from '../UserInfo/UserInfo';
import Break from '../Break/Break';
import Detail from '../Detail/Detail';
const Sidebar = ({data}) => {
    return (
        <div className='p-3 sitebar-container'>
            <UserInfo></UserInfo>
            <Break></Break>
            <Detail data={data}></Detail>
            
         
        </div>
    );
};

export default Sidebar;