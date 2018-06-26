import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import NotfoundPage from "./pages/NotfoundPage/NotfoundPage";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotfoundPage />
    }
]

export default routes;