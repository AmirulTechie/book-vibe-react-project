import React, { use } from 'react';
import { FaRegStar } from 'react-icons/fa';

const booksPromise = fetch('/booksData.json').then(res=> res.json())

const AllBooks = () => {
    const books = use(booksPromise);
    
    return (
        
        <div className='my-12 container mx-auto max-w-6xl px-6'>
            <h2 className="font-bold text-3xl text-center">Books</h2>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {books.map(book => (
                    <div key={book.id} className="card bg-base-100 shadow-sm p-4">

                        <figure className="bg-gray-100 rounded-xl p-6">
                            <img
                                src={book.image}
                                alt="book"
                                className="h-44 object-contain"
                            />
                        </figure>

                        <div className="card-body px-2 pb-2 flex flex-col">

                            <div className="flex flex-wrap gap-2">
                                {book.tags.map(tag => (
                                    <span key={tag} className="badge bg-green-50 text-green-600 font-semibold border-0 px-3 py-1">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h2 className='text-xl font-bold mt-1'>{book.bookName}</h2>
                            <p className='text-sm text-gray-400'>By : {book.author}</p>

                            <div className="divider my-1"></div>

                            <div className='card-title justify-between '>
                                <div className="text-sm font-semibold">{book.category}</div>
                                <div className='flex items-center gap-1 text-sm font-semibold'>
                                    {book.rating} <FaRegStar />
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBooks;