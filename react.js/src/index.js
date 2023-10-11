import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home";
import View from "./model/view";
import Edit from "./model/edit";
import AddUser from "./model/add";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/view/:id" element={<View />} />
                <Route exact path="/edit/:id" element={<Edit />} />
                <Route exact path="/adduser" element={<AddUser />} />
            </Routes>
        </BrowserRouter>
);