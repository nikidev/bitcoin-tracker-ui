import React, {Component} from "react";
import {Chart, registerables} from "chart.js";
import axios from "axios";
Chart.register(...registerables);

class TradesLineChartComponent extends Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {
        const ctx = this.chartRef.current.getContext("2d");

        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(224, 195, 155, 1)');
        gradient.addColorStop(1, 'rgba(213,213,18,0)');

        let currentTime = [];
        let lastPrice = [];

        axios.get("http://localhost:8088/api/bitcoin-trades")
        .then(response => {
            for (const tradeObj of response.data) {
                currentTime.push(tradeObj.current_time);
                lastPrice.push(tradeObj.last_price);
            }
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: currentTime,
                    datasets: [{
                        data: lastPrice,
                        backgroundColor: gradient,
                        borderColor: '#34cceb',
                        borderWidth: 3,
                        fill: true
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false,
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            }
                        },
                        y: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.15)'
                            }
                        }
                    }
                }
            })
        })
    }

    render() {
        return (
            <div>
                <canvas ref={this.chartRef} width="1900" height="500">

                </canvas>
            </div>
        )
    }

}

export default TradesLineChartComponent;