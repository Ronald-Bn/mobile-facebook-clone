import React from "react";
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import Home from "./content/Home/Home";
import Navbar from "./components/Navbar";
import Friends from "./content/Friends";
import Saved from "./content/Saved";
import Videos from "./content/Videos/Videos";
import Notifications from "./content/Notifications";
import Menu from "./content/Menu";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Friends" element={<Friends />} />
                    <Route path="/Saved" element={<Saved />} />
                    <Route path="/Videos" element={<Videos />} />
                    <Route path="/Notifications" element={<Notifications />} />
                    <Route path="/Menu" element={<Menu />} />
                </Routes>
            </div>
        </Router >
    );

}



export default App