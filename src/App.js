import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cryptopage from './components/Cryptopage';
import React, { useEffect, useState } from 'react';
// import goldpng from './btc.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// import { useEffect } from 'react';
import Diff from './components/Diff';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import Coinpage from './components/Coinpage';
import Contact from './components/Contact';
// import { Nav } from 'react-bootstrap';

function App(props) {
  const [theme, settheme] = useState('dark');
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(15, 15, 15)";
  }, []);

  
  const changetheme = () => {
    if (theme === 'dark') {
      settheme('light');
      document.body.style.backgroundColor = 'white';
    } 
    else {
      settheme('dark');
      document.body.style.backgroundColor = 'rgb(15, 15, 15)';
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <React.Fragment>
                <Navbar theme={theme} changetheme={changetheme} />
                <div>
                  <Routes>
                    <Route
                      path='/'
                      element={<Home theme={theme} changetheme={changetheme} />}
                    />
                    <Route
                      path="/Diff"
                      element={<Diff theme={theme} changetheme={changetheme} />}
                    />
                    <Route
                      path="/contact"
                      element={<Contact theme={theme} changetheme={changetheme} />}
                    />
                  </Routes>
                  <Routes>
                    <Route
                      path="/crypto"
                      element={<Cryptopage theme={theme} changetheme={changetheme} />}
                    />
                    <Route
                      path="/coinpage/:coinid"
                      element={<Coinpage theme={theme} changetheme={changetheme} />}
                    />
                    
                  </Routes>
                </div>

                <Footer theme={theme} changetheme={changetheme} />
              </React.Fragment>
            }
          />
          <Route path="/login" element={<Login theme={theme} changetheme={changetheme} />} />
          <Route path="/Signup" element={<Signup theme={theme} changetheme={changetheme} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
