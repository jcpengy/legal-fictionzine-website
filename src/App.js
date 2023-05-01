import React  from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavigationBar from "./components/NavigationBar";
import {Submissions} from "./data/submissions";

function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="about" element={ <About/> } />
            </Routes>
        </div>
    )
}

export default App;
