import React from 'react';

//components
import Navbar from './components/NavBar';
//import ItemListContainer from './components/ItemListContainer';

//pages
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import About from './pages/About';
import ProductsDetail from './pages/ProductsDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" >
            <Home/>
          </Route>
        
        
          <Route exact path="/products">
            <Products/>
          </Route>

          <Route  exact path="/products/:productId">
            <ProductsDetail/>
          </Route>
        
        
          <Route path="/about">
            <About/>
          </Route>
        
        
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
        
      
      </Router>  
    </div>
    
  );
}

export default App;
