import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import books from "../pages/books/books";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import BookDetails from "../pages/book-details/BookDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: '/books',
                Component: books
            },
            {
                path: '/bookDetails/:bookId',
                Component: BookDetails,
                loader: () =>fetch('/booksData.json'),
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])