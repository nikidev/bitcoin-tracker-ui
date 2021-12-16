import React, {Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

class UserPriceLimitFormComponent extends Component {
    state = {
        email: '',
        price_limit: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user_data = {
            email: this.state.email,
            price_limit: this.state.price_limit
        };

        axios.put(`http://localhost:8088/api/user`, user_data)
            .then(response => {
                this.setState({success_response_message: response.data.message})
            })
            .catch(error =>{
                this.setState({error_response_message: error.response.data.message,
                                    email_validation: error.response.data.errors.email,
                                    price_limit_validation: error.response.data.errors.price_limit
                });
            })
    }

    render() {
        return (
            <div className="user-price-limit-form">
                <p>Write the price that you expect and let us notify you when it has exceeded.</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-floating">
                        <label className="col-form-label">Email</label>
                        <input type="email" className="form-control-lg" name="email" onChange={this.handleChange} />
                        <p className="text-danger">{this.state.email_validation}</p>
                    </div>
                    <div className="form-floating">
                        <label className="col-form-label">Price limit</label>
                        <input type="text" className="form-control-lg" name="price_limit" onChange={this.handleChange} />
                        <p className="text-danger">{this.state.price_limit_validation}</p>
                    </div>
                    <button type="submit" className="btn btn-info">Subscribe!</button>
                </form>
                <p className="text-success">{this.state.success_response_message}</p>
                <p className="text-danger">{this.state.error_response_message}</p>
            </div>
        )
    }
}


export default UserPriceLimitFormComponent;