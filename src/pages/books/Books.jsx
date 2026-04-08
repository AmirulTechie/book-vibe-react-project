import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const Books = () => {
    const {storedBooks} = useContext(BookContext)
    console.log(storedBooks);
    return (
        <div>
            <h2>Listed Books</h2>        
        </div>
    );
};

export default Books;