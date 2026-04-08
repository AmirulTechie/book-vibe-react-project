import React, { use } from 'react';
import { FaRegStar } from 'react-icons/fa';

const booksPromise = fetch('/booksData.json').then(res=> res.json())

const AllBooks = () => {
    const books = use(booksPromise);
    
    return (
        
        <div className='my-12 container mx-auto'>
            <h2 className="font-bold text-3xl text-center">Books</h2>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
            {
                books.map(book=>{
                    return <div className="card bg-base-100 shadow-sm p-5">
                        <figure>
                            <img
                                src={book.image}
                                alt="book" />
                        </figure>
                        <div className="card-body">
                            <div className="space-x-2">
                                {book.tags.map(tag => <div className="badge bg-green-50 text-green-600 font-semibold">{tag}</div>)}
                                <h2 className='text-2xl card-title'>{book.bookName}</h2>
                            </div>
                            <p className='text-lg'>By: {book.author}</p>
                            
                        </div>
                        <div className="divider"></div>
                        <div className='flex justify-between text-lg font-semibold'>
                            <p>{book.category}</p>
                            <p className='flex justify-center items-center gap-2'>{book.rating}<FaRegStar></FaRegStar> </p>
                        </div>
                    </div>
                })
            }
        </div>
        </div>
    );
};

export default AllBooks;