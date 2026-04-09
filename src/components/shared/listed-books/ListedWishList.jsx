import React, { useContext } from 'react';
import { BookContext } from '../../../context/BookContext';
import BookCard from '../../../ui/BookCard';

const ListedWishList = () => {
    const {storedBooks, wishList} = useContext(BookContext);
    console.log(storedBooks, wishList, "book context")
    return <div className='flex flex-wrap'>
        <BookCard books={wishList}></BookCard>
    </div>
};

export default ListedWishList;