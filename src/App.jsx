import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/styles/style.scss";
import "./assets/styles/theme.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./component/Navbar/Navbar";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login/Login";
import SignUp from "./component/signUp/SignUp";
import { ToastContainer } from "react-toastify";

export const AuthContext = createContext();
function App() {
  const [count, setCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkAuth = () => {
    const cookies = new Cookies();
    const AuthToken = cookies.get("authToken");
    if (AuthToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    const wow = new window.WOW();

    wow.init();
  }, []); //only run once to initialize when component mounts
  useEffect(() => {
    checkAuth();
    setInterval(checkAuth, 60000);
    return () => {
      clearInterval();
    };
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <div className="container-xxl bg-white p-0">
          <div className="position-relative p-0">
            <Navbar />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Routes path="/about" element={<About />} />
              /* Private Routes */
              <Route element={<PrivateRoute />}>
                <Route path="/team" element={<Team />} />

                <Route path="/testimonial" element={<Testimonial />} />
              </Route>
              {/* Page not found */}
              <Route path="*" element={<h1>404 Page Not Found</h1>} />
            </Routes>
            <Login />
            <LoginMessage />
            <SignUp />
            <ToastContainer
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Footer />
          </div>
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
