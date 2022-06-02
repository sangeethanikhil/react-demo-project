import React, { Component } from "react";
import "./Viewuser.css"
let user = [];
class Viewuser extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }
    componentDidMount() {
        try {
            let res = fetch("https://fakestoreapi.onrender.com/users", {
                method: "GET",
                headers: {
                    "content_type": "application/json",
                },
            });
            if (res.status === 200) {
                let resJson = res.Json();
                console.log(resJson);
                this.setState({user: resJson});
            }
        }
        catch (err) {
            console.log(err);

        }
    }
        render(){
            return (
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Address</td>
                                <td>Email</td>
                                <td>Username</td>
                                <td>Password</td>
                                <td>Phone</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((info, key) => {
                                    return (
                                        <tr>
                                            <td>{info.name}</td>
                                            <td>{info.address}</td>
                                            <td>{info.email}</td>
                                            <td>{info.username}</td>
                                            <td>{info.password}</td>
                                            <td>{info.phone}</td>
                                        </tr>
                                    )
                                }
                                )}
                        </tbody>
                    </table>
                </div>
            )
        }
    }

export default Viewuser;