import React, { Component } from 'react';
import img1 from './images/prodimg.jpeg'
class Product extends Component {

    constructor(){
        // alert("constructor called")
        console.log("constructor called")
        //constructor is the place were we can intilize the state
        super()
        this.state={product:[{id:1,name:'iphone',price:50000,quentity:0}]}
    }
    render() {
        // alert("render method called")
        console.log("render method called")
        return (
            <div>
                {/* {this.state.product.map((prod)=>
                   <h1>{prod.name}</h1>
                )} */}
                {/* {this.state.product.map((prod, index) => (
            <p>Name, {prod.name} price {prod.price}</p> */}
        ))
                <img src={img1} />   </div>
        );
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
}

export default Product;