import * as React from 'react';
import './styles/App.css';
import Main from './components/Main'
import TrainReg from "./components/TrainReg";
import { Routes, Route } from "react-router-dom";
import NewsFeed from "./components/Main/NewsFeed/NewsFeed.jsx";
import MerchPage from "./components/Merch/MerchPage";


const App = () => {

    return (
        <div className="container">
            <main>
                <Routes>
                    <Route path="/register" element={<TrainReg/>} />
                    <Route path="/" element={<Main/>} />
                    <Route path="/news" element={<NewsFeed/>} />
                    <Route path="/merch" element={<MerchPage/>} />
                </Routes>

            </main>
        </div>
    );
};

export default App;
