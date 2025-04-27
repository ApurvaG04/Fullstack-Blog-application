import React, {Component} from "react";
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Read from './Read';
import Write from './Write';
import {BrowserRouter as Router, Routes, Route, Link, Redirect} from "react-router-dom";
import Eachblog from "./Eachblog";


// export default class App extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return <h1>Testing react component</h1>;
//     }
// }
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/read" element={<Read/>} />
                <Route path="/write" element={<Write />} />
                <Route path="/read/blog" element={<Eachblog />} />
            </Routes>                             
        </Router>
    )
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);


