import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import data from '../../data';

class ColumnChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            options: {
                chart: { height: '100%', type: 'line', },
                stroke: { width: [0, 4] },
                title: {
                    text: 'Audio Impressions Delivery Day Wise',
                    align: 'center'
                },
                dataLabels: { enabled: true, enabledOnSeries: [1] },
                labels: [],
                xaxis: { type: 'string' },
                yaxis: [
                    { title: { text: 'Audio Impressions', }, },
                    { opposite: true, title: { text: 'CTR', } }
                ]
            },
        };
    }

    /**
     * set chart values
     */
    setChartValues = () => {
        const values = data[0].audio;
        const impressions = [], ctr = [], labels = [];
        values.forEach(ele => {
            impressions.push(ele.impressions);
            ctr.push(ele.ctr);
            let date = new Date(ele.dt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: '2-digit'
            }).split(' ').join(' ');
            labels.push(date);
        });
        const series = [
            { name: 'Audio Impressions', type: 'column', data: impressions },
            { name: 'CTR (%)', type: 'line', data: ctr }
        ];

        this.setState({
            series: series, options: { ...this.state.options, labels: labels }
        });
    }

    componentDidMount() {
        this.setChartValues();
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>
        );
    }
}

export default ColumnChart;
