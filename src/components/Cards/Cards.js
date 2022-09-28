import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Cards.css';
const Cards = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);
    return (
        <div className='mt-5'>
             <h4>Reading book regularly</h4>
            <div className='row row-cols-1 row-cols-lg-3 g-4 p-3'>
            {
                books.map(book=><Book
                key={book.id}
                book={book}
                ></Book>)
            }
            </div>
            
        </div>
    );
};

export default Cards;