import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Importing the components
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

// Navbar Link Paths

import AboutUs from "./components/uncompleted/AboutUs";
import QuickLook from "./components/uncompleted/QuickLook";
import Schedule from "./components/uncompleted/Schedule";
//completed navbar link paths (as I finish the rest they will get out from the uncompleted section)
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

//importing the Authentication and Protection Components
import { AppwriteClientProvider } from "./utils/AppwriteClient";
import { AuthProvider } from "./utils/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {
  return (
    <main>
      <Router>
        <AuthProvider>
          <AppwriteClientProvider>
            <div className="pt-20">
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero /> <Footer />{" "}
                    </>
                  }
                />

                <Route element={<PrivateRoutes />}>
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/QuickLook" element={<QuickLook />} />
                  <Route path="/Schedule" element={<Schedule />} />
                  <Route path="/AboutUs" element={<AboutUs />} />
                </Route>

                <Route
                  path="/SignUp"
                  element={
                    <>
                      {" "}
                      <SignUp /> <Footer />{" "}
                    </>
                  }
                />
                <Route
                  path="/Login"
                  element={
                    <>
                      {" "}
                      <Login /> <Footer />{" "}
                    </>
                  }
                />
              </Routes>
            </div>
          </AppwriteClientProvider>
        </AuthProvider>
      </Router>
    </main>
  );
};

export default App;
