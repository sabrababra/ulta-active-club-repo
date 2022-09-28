import React from 'react';
import './UserInfo.css';
import { MdOutlineLocationOn } from 'react-icons/md';
const UserInfo = () => {
    return (
        <div className='mb-5'>
          <div className='d-flex align-items-center gap-3'>
                <div>
                <img className='protfolio-img rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvcw2EqspliOB3odOlleO_KfqNy4No1Q-8nSmqt4&s" alt="" />
                </div>
                <div>
                    <h5 className='my-0'>Sabrina Yesmin Prome</h5>
                    <p className='my-0'><MdOutlineLocationOn></MdOutlineLocationOn>Rajshahi, Bangladesh</p>
                </div>

            </div>  
            <div className='d-flex align-items-center gap-4 mt-3'>
                <div>
                    <p className='fs-4 my-0 fw-semibold text-center'>10</p>
                    <p>Completed books</p>
                </div>
                <div>
                    <p className='fs-4 my-0 fw-semibold text-center'>23</p>
                    <p>Age</p>
                </div>
                <div>
                    <p className='fs-4 my-0 fw-semibold text-center'>22</p>
                    <p>Highest Read</p>
                </div>

            </div>
        </div>
    );
};

export default UserInfo;