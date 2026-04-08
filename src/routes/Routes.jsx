import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import books from "../pages/books/books";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/errorPage/ErrorPage";


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
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])