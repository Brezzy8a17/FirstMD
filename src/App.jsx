import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing the components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Navbar Link Paths
import QuickLook from "./components/QuickLook";
import Schedule from "./components/Schedule";
import AboutUs from "./components/AboutUs";
import SignUp from './components/SignUp';

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/quick-look" element={<QuickLook />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Hero />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
