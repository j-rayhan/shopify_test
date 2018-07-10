import React,{ Component } from "react";
import Product from "./Product";
// import Shopify from 'shopify-api-node';

import ProductJs from './Products.json';

//------------for get the json data
const url = 'http://localhost:3000/list';
// const url = 'http://192.168.43.253:3000/list';
const url_orders = 'http://localhost:3000/orders/list';

//get data from shopify
// const SHOPIFY_API_KEY="8609700843cc551bb08bfa60f1fb12a2"
// const SHOPIFY_API_SECRET="2ebd724c3cd31ad75315a978df142748"

// const shopify = new Shopify({
//     shopName: 'sd-test-shop',
//     apiKey: SHOPIFY_API_KEY,
//     password: SHOPIFY_API_SECRET
//   });


export default class Products extends Component {
      state = {
        products : []
      }
    componentWillMount(){
       fetch(url).then(response => response.json()).then(resp =>         
        this.setState({ products: resp.products}));

    }

    render(){
        // const pj = axios.get(url).then(response => response.data);
        // axios.get(url).then(response => response.data);
        // const pj = fetch(url).then(response => response.json()).then(resp => resp);
  
        console.log("product data '''': " ,this.state.products);
        const products = this.state.products.map((p)=>(
            <div key={p.id}>
            <Product 
              name={p.title} 
              img={p.image.src} 
              price={p.variants.map((pr) => pr.price)} 
               
            />
            </div>
        ));
      return (
        <div>
        {products}
        </div>
      )
    }
  }
