import { Container } from '@mui/system';
import React from 'react';
import AppBar from './Components/AppBar';
import Locationlist from './View/LocationList';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import LocationDetail from './View/LocationDetail';

export default function App(){

    return (
        <Router>
            <AppBar />
                <Routes>
                    <Route path="/" element={<Locationlist />} />
                    <Route path="/location" element={<LocationDetail />} />
                </Routes>
        </ Router>
    )
}