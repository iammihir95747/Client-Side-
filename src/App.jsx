import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home  from './components/Home';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Students from './Pages/Students';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Services from './components/Services';
import ForgotPassword from './components/ForgotPassword';



const App = () => {
    return (
        <Router>
            <div>
                <Home />
                    
                <Routes>
                <Route path="/" element={<Homepage />} />
                    <Route path="/Homepage" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path='/Students'  element={<Students />}/>
                    <Route path='/ForgotPassword'  element={<ForgotPassword />}/>
                </Routes>
                
            </div>
        </Router>
    );
};

export default App;