import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import Products from './component/products/Products';
import Orders from './component/orders/Orders';
import NotFoundPage from './component/NotFoundPage';

const Header = () =>(
  <div>
          <Link to='/'> Products</Link>
          <Link to='/orders'> Orders</Link>
   </div>
);
const AppRouters = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={Products} exact={true} />
        <Route path="/orders" component={Orders} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

class App extends Component {
  render() {
    return (
      <div>
        <header style={{display: "flax"}}>
          <h1 style={{textAlign: "center", padding: "10px 0px"}} >Welcome to React Shopify Client</h1>
          
        </header>
          <Products />
      </div>
    );
  }
}

export default App;
