import React from 'react';
import './Sidebar.css';
import UserInfo from '../UserInfo/UserInfo';
import Break from '../Break/Break';
const Sidebar = () => {
    return (
        <div className='p-3'>
            <UserInfo></UserInfo>
            <Break></Break>
            
            
         
        </div>
    );
};

export default Sidebar;