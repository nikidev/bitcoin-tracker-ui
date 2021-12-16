import React, {Component} from "react";
import axios from "axios";

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
                this.setState({response_message: response.data.message})
            })
    }

    render() {
        return (
            <div>
                <p>Write the price that you expect and let us notify you when the price has exceeded</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="text" name="email" onChange={this.handleChange} />
                    </label>
                    <label>
                        Price Limit:
                        <input type="text" name="price_limit" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
                <p>{this.state.response_message}</p>
            </div>
        )
    }
}


export default UserPriceLimitFormComponent;