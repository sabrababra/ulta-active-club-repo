
import React from 'react';
import './Book.css'
const Book = ({book,addTime}) => {
    //console.log(book);
    const {name,img,time,writer}=book;
    return (
        
            <div className="col ">
                <div className="card  h-100 p-3">
                <img src={img} className="card-img-top size-img"  alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h6 className="card-title">Writer: {writer}</h6>
                    <p>Time: {time} hours</p>
                    <button type="button" onClick={()=>addTime(time)} class="btn btn-outline-primary w-100">Add to list</button>
                </div>
                </div>
            </div>
    );
};

export default Book;


