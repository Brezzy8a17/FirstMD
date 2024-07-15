import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

// Importing the components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Navbar Link Paths
import QuickLook from "./components/uncompleted/QuickLook";
import Schedule from "./components/uncompleted/Schedule";
import AboutUs from "./components/uncompleted/AboutUs";
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  return (
    <main>
      <Router>
        <div className='pt-20'>
  
        <Navbar />
        <Routes>
          <Route path="/" element={<> 
          <Hero/> <Footer/> </>} />
          <Route path="/QuickLook" element={<QuickLook /> } />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/AboutUs" element={<AboutUs /> } />
          <Route path="/SignUp" element={<> <SignUp /> <Footer/> </>} />
          <Route path = "/Login" element={<> <Login /> <Footer/> </>} />
        </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
