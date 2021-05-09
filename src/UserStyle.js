import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import './App.css';
class UserStyle extends Component {
    state = {
        pageTitle: "Product",
        userCount: 5,
        users: [{pics:'https://picsum.photos/id/1008/150', id: 1, name: "abhishek", phoneNo: "12222" },
        {pics:'https://picsum.photos/id/1001/150', id: 2, name: "raj", phoneNo: "66677777" }
        ,{pics:'https://picsum.photos/id/1002/150',id: 3, name: "ravi", phoneNo: "" },
        {pics:'https://picsum.photos/id/1009/150',id: 4, name: "kamal", phoneNo: "" }]
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
                                    <td style={this.changeStyle(user.name)}>{user.name}</td>
                                    <td>{this.updatePhoneNo(user.phoneNo)}</td>
                                </tr>)

                            })

                        }
                    </tbody>
                </table>
            </div>
        );
    }
    changeStyle(userName){
        if(userName.startsWith("k")){
                return {backgroundColor: 'red'}
        }
        else{
            return {backgroundColor: 'green'}
        }
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

export default UserStyle;