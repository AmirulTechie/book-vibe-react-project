import React, { createContext, useState } from 'react';


export const BookContext = createContext();

const BookProvider = ({children}) => {
    const [storedBooks, setStoredBooks] = useState([]);


    const handleMarkAsRead = (currentBook) => {
        const isBookExist = storedBooks.find(book => book.bookId === currentBook.bookId);
        if (isBookExist) {
            alert('The book is already exist')
        } else {
            setStoredBooks([...storedBooks, currentBook])
        }
    }


    const data ={
        storedBooks,
        setStoredBooks, 
        handleMarkAsRead,
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;