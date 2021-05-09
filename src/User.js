import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import './App.css';
class User extends Component {
    state = {
        pageTitle: "Product",
        userCount: 5,
        users: [{pics:'https://picsum.photos/id/1000/150', id: 1, name: "abhishek", phoneNo: "12222" },
        {pics:'https://picsum.photos/id/1001/150', id: 2, name: "raj", phoneNo: "66677777" }
        ,{pics:'https://picsum.photos/id/1002/150',id: 3, name: "ravi", phoneNo: "" }]
    }
    render() {
        return (
            <div className="prod-table" >
                <table className='table'>
                    <thead>
                        <tr>
                            <th>pics</th>
                            <th>id</th>
                            <th>name</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user) => {
                                return (<tr>
                                    <td><img src={user.pics}/></td>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{this.updatePhoneNo(user.phoneNo)}</td>
                                </tr>)

                            })

                        }
                    </tbody>
                </table>
            </div>
        );
    }
    updatePhoneNo(phoneNo) {
        console.log('phoneno',phoneNo)
        //  return <div className="bg-warning">phoneNo=='' ? "phone no not available":phoneNo</div>
        if (phoneNo) {
            return phoneNo
        }
        else {
            return <div>"phone no not available"</div>
        }
    }


}

export default User;