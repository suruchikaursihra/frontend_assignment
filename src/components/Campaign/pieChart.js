import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import data from '../../data';

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            options: {
                colors: ['#546E7A', '#33FF39'],
                labels: [],
                chart: { height: '100%', type: 'donut' },
                title: { text: 'Product Trends by Month', align: 'center' },
                responsive: [{
                    breakpoint: 400,
                    options: {
                        chart: { width: 200, },
                        legend: { position: 'bottom' }
                    }
                }]
            },
        };
    }


    setChartValues = () => {
        const values = data[0].platform;
        let series = [];
        let labels = [];
        values.forEach(ele => {
            series.push(ele.audio);
            labels.push(ele.platform);
        });
        this.setState({ series, options: { ...this.state.options, labels } });
    }

    componentDidMount() {
        this.setChartValues();
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
            </div>
        );
    }
}

export default PieChart;