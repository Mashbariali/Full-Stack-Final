import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ListOrders from './components/ListOrders';


function App() {

  return (
    <div>

      <Router>
            <Header />
        <Routes>
          <Route>

            <Route path='/'                   element={< Home />}></Route>
            <Route path='/list-orders'              element={< ListOrders />}></Route>
            

            </Route>
        </Routes>
        < Footer />
      </Router>

    </div>
  );
}

export default App;
