import React, { useContext } from 'react';
import { BookContext } from '../../../context/BookContext';
import BookCard from '../../../ui/BookCard';

const ListedReadList = () => {
    const {storedBooks, wishList} = useContext(BookContext);
    console.log(storedBooks, wishList, "book context")
    return <div className='flex flex-wrap'>
                    <BookCard books={storedBooks}></BookCard>
        </div>
};

export default ListedReadList;