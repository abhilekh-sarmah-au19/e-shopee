import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homescreen from "./screens/HomeScreen";
import Navbar from './components/Navbar';
import ProductScreen from './screens/ProductScreen';
import Register from "./screens/Register";
import Login from "./screens/Login";
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <div>
    <Router>
    <Navbar/>
      <main className="py-3">
          <Routes>
            <Route path='/' element={<Homescreen/>} exact />
            <Route path='/product/:id' element={<ProductScreen/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/cartItems' element={<CartScreen/>}/>

          </Routes>
      </main>
    </Router>
    </div>
  );
}

export default App;
