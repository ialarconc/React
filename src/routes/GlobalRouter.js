import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import NotFound from '../views/NotFound';
import Overview from "../views/Overview";
import {VerCarrito} from "../views/VerCarrito";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/libros/" element={<Layout><Overview /></Layout>} />
                <Route
                    path="/vercarrito/"
                    element={<VerCarrito />}
                />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        {children}
    </>
);

export default GlobalRouter;
