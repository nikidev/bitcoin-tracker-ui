import React, {Component} from "react";
import axios from "axios";

class LatestPriceComponent extends Component {

    state = {

    }

    componentDidMount() {
        axios.get(`http://localhost:8088/api/bitcoin-last-price`)
            .then(response => {
                this.setState({response_messagea: response.data[0]})
            })
    }

    render() {
        return (
            <div>
                <h3> Bitcoin: ${this.state.response_messagea}</h3>
            </div>
        )
    }
}


export default LatestPriceComponent;