import React from "react";
import './Register.css';
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.props.user = {
            email: "",
            username: "",
            password: "",
            name: {
                firstname: "",
                lastname: "Potter"
            },
            address: {
                "city": "kilcoole",
                "street": "7835 new road",
                "number": 3,
                "zipcode": "12926-3874",
                "geolocation": {
                    "lat": "-37.3159",
                    "long": "81.1496"
                }
            },
            phone: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }
    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await fetch('https://fakestoreapi.com/users', {
                method: "POST",
                body: JSON.stringify(this.state.user)
            })

            let resJson = await res.Json();
            if (res.status === 200) {
                this.setState({ [e.target.name]: e.target.value })

            }

        }
        catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <div className="container">
                <h2>Registration Form</h2>
                <form onSubmit={this.handleSubmit}>

                    <table>
                        <div className="cols">
                            <tr>
                                <td> <label>Email</label></td>
                                <td><input type="text" name="email" onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td> <label>Username</label></td>
                                <td><input type="text" name="username" onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td> <label>Password</label></td>
                                <td><input type="text" name="password" onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td> <label>Name</label></td>
                                <td><input type="text" name="name.firstname" onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label>Address</label></td>
                                <td><textarea name="address.street" onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label>Mobile</label></td>
                                <td><input type="text" name="phone" onChange={this.handleChange} /></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>  <button className="btn" >Register</button></td>
                            </tr>

                        </div>
                    </table>
                </form>

            </div>
        )

    }
}

export default Register;