import React,{ Component } from "react";
import Order from "./Order";

//------------for get the json data
const url_orders = 'http://localhost:3000/orders/list';
export default class Orders extends Component {
      state = {
        orders : []
      }
    componentWillMount(){
      //  fetch(url_orders).then(response => response.json()).then(resp =>         
      //   this.setState({ orders: resp.orders}));
       fetch(url_orders).then(response=> {
        // console.log("RESPONSE------- ", response);
        return response.json();
        
      }).then(parsed=> {
        console.log("PARSED--- ", parsed);
        this.setState({ orders: parsed.orders})
      })

    }

    render(){
  
        console.log("orders data '''': " ,this.state.orders);
        const orders = this.state.orders.map((p)=>(
            <div key={p.id}>
            <Order 
            name={p.title} 
             
            />
            </div>
        ));
      return (
        <div>
        {orders}
        </div>
      )
    }
  }
