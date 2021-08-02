import React from 'react';

//CONTEXT
import { ContextProvider } from './context/Context';
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
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <ContextProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" >
            {/* <Home/> */}<Products/>
          </Route>
        
          
          <Route exact path="/categories/:categoryId">
            <Products/>
          </Route>

          <Route  exact path="/products/:productId">
            <ProductsDetail/>
          </Route>
        
        
          <Route path="/cart">
            <Cart/>
          </Route>
          

          <Route path="/about">
            <About/>
          </Route>

        </Switch>
        
      <Footer/>
      </Router> 
      </ContextProvider> 
    </div>
    
  );
}

export default App;
