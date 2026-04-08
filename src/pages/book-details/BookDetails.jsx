import { useContext} from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';


const BookDetails = () => {
    const {bookId} = useParams();
    
    const books = useLoaderData();
    
    const expectedBook = books.find(book=> book.bookId == bookId);

    const {handleMarkAsRead} = useContext(BookContext)


    return (
        <div className="my-12 container mx-auto max-w-5xl px-6">
            <div className="flex flex-col md:flex-row gap-10">

                {/* Left - Book Image */}
                <div className="bg-gray-100 rounded-xl p-10 flex items-center justify-center md:w-1/2">
                    <img
                        src={expectedBook.image}
                        alt={expectedBook.bookName}
                        className="p-10"
                    />
                </div>

                {/* Right - Book Details */}
                <div className="md:w-1/2 flex flex-col justify-center space-y-4">

                    <h2 className="text-3xl font-bold">{expectedBook.bookName}</h2>
                    <p className="text-gray-500">By : {expectedBook.author}</p>

                    <div className="divider my-1"></div>

                    <p className="text-lg font-semibold">{expectedBook.category}</p>

                    <div className="divider my-1"></div>

                    <p className="text-gray-600">
                        <span className="font-bold">Review : </span>
                        {expectedBook.review}
                    </p>

                    {/* Tags */}
                    <div className="flex items-center gap-3">
                        <span className="font-semibold">Tag:</span>
                        {expectedBook.tags.map(tag => (
                            <span key={tag} className="badge bg-green-100 text-green-500 font-medium">#{tag}</span>
                        ))}
                    </div>

                    <div className="divider my-1 opacity-50"></div>

                    {/* Book Meta */}
                    <div className="space-y-3">
                        <div className="flex justify-between pb-2">
                            <span className="text-gray-400">Number of Pages:</span>
                            <span className="font-bold">{expectedBook.totalPages}</span>
                        </div>
                        <div className="flex justify-between pb-2">
                            <span className="text-gray-400">Publisher:</span>
                            <span className="font-bold">{expectedBook.publisher}</span>
                        </div>
                        <div className="flex justify-between pb-2">
                            <span className="text-gray-400">Year of Publishing:</span>
                            <span className="font-bold">{expectedBook.yearOfPublishing}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Rating:</span>
                            <span className="font-bold">{expectedBook.rating}</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-4">
                        <button onClick={()=>handleMarkAsRead(expectedBook)} className="btn btn-outline px-8">Mark as Read</button>
                        <button className="btn bg-cyan-400 text-white px-8 border-none hover:bg-cyan-500">Add to Wishlist</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;