import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Orders from './components/Orders';
import Join from './components/Join';
import Login from './components/Login'
import Register from './components/Register';


function App() {

  return (
    <div>

      <Router>
            <Header />
        <Routes>
          <Route>

            <Route path='/'                   element={< Home />}></Route>
            <Route path='/orders'              element={< Orders />}></Route>
            <Route path='/Login'                   element={< Login />}></Route>
            <Route path='/Register'              element={< Register />}></Route>
            <Route path='/Join'                   element={< Join />}></Route>
            {/* <Route path='/orders'              element={< Orders />}></Route> */}

            </Route>
        </Routes>
        < Footer />
      </Router>

    </div>
  );
}

export default App;
