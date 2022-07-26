// just fot test
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ListOrders from './components/ListOrders';
import Join from './components/Join';
import Login from './components/Login'
import Register from './components/Register';
import Chat from './components/Chat'
import Chatt from './components/Chatt'
import AddOrder from './components/AddOrder';

function App() {

  return (
    <div>

      <Router>
            <Header />
        <Routes>
          <Route>

            <Route path='/'                   element={< Home />}></Route>
            <Route path='/list-orders'              element={< ListOrders />}></Route>
            <Route path='/Login'                   element={< Login />}></Route>
            <Route path='/Register'              element={< Register />}></Route>
            <Route path='/Join'                   element={< Join />}></Route>
            <Route path='/Chat'                   element={< Chat />}></Route>
            {/* <Route path='/orders'              element={< Orders />}></Route> */}
            <Route path='/Chatt'                   element={< Chatt />}></Route>
            <Route path='/addOrder'                   element={< AddOrder />}></Route>

            </Route>
        </Routes>
        < Footer />
      </Router>

    </div>
  );
}

export default App;
