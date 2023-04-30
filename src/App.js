import React  from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavigationBar from "./components/NavigationBar";
import {Submissions} from "./data/submissions";

function App() {
    const issue = {
        number: Submissions[0].issueNumber,
        date: Submissions[0].issueDate
    }
    return (
        <div className="App">
            <NavigationBar issue={issue}/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="about" element={ <About/> } />
            </Routes>
        </div>
    )
}

export default App;
