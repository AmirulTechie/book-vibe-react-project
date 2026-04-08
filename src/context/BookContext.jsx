import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext();

const BookProvider = ({children}) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([])

    const handleMarkAsRead = (currentBook) => {
        const isExistInWishList = wishList.find(book => book.bookId === currentBook.bookId);
        if (isExistInWishList) {
            toast.error('The book already exists in your wish list');
            return; // ✅ stop here
        }

        const isBookExist = storedBooks.find(book => book.bookId === currentBook.bookId);
        if (isBookExist) {
            toast.error('The book already exists in read');
        } else {
            setStoredBooks([...storedBooks, currentBook]);
            toast.info(`${currentBook.bookName} is added to read`);
        }
    }

    const handleWishList = (currentBook) => {
        const isExistInReadList = storedBooks.find(book => book.bookId === currentBook.bookId);
        if (isExistInReadList) {
            toast.error("This book is already in read list");
            return; // ✅ stop here
        }

        const isBookExist = wishList.find(book => book.bookId === currentBook.bookId);
        if (isBookExist) {
            toast.error('The book already exists in your wish list');
        } else {
            setWishList([...wishList, currentBook]);
            toast.info(`${currentBook.bookName} is added to wish list`);
        }
    }

    const data ={
        storedBooks,
        setStoredBooks, 
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList,
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;