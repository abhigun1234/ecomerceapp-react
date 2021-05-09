import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import './App.css';
class ProductDetails extends Component {
    state = {
        pageTitle: "Product",
        userCount: 5,
        products: [{ id: 1, name: "addidas", price:"12222" },
        { id: 2, name: "rebook", price: "66677777" }
            , { id: 3, name: "nike", price: "" }]
    }
    render() {
        return (
            <div className="prod-table" >
                {/* <table  className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>name</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user)=>{
                                return( <tr>
                                <td></td>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.phoneNo=='' ? "phone no not available":user.phoneNo}</td>
                            </tr>)
 
                            })
                            
                        }
                       
                        
                    </tbody>
                </table> */}
                <table  className='table'>
                <thead>
                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>name</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                       this.state.products.map((prod)=>{
                          return( <div><tr>
                                <td>{prod.id}</td>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                </tr>
                        </div>)

                       })

                    }


                    </tbody>


                </table>

            </div>
        );
    }

    
}

export default ProductDetails;