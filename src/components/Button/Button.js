import React from 'react';
import './Button.css';
import { toast } from 'react-toastify';
const Button = () => {
    const notify = () => toast("You successfully complete the task!!");
    return (
        <div className='mt-5'>
             <button onClick={notify} className="btn btn-primary w-100" type="button">Activity Completed</button>
        </div>
    );
};

export default Button;