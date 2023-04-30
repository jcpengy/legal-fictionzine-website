import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <div>
            <NavigationBar/>
            <Home/>
        </div>
    );
}

export default App;
