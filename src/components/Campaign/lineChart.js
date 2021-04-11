import React from 'react';
import ReactApexChart from 'react-apexcharts';
import data from '../../data';

class LineChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [],
            options: {
                chart: {
                    height: '100%',
                    type: 'line',
                    zoom: { enabled: false }
                },
                dataLabels: { enabled: false },
                stroke: { curve: 'straight' },
                title: { text: 'Day Wise Reach', align: 'center' },
                grid: { row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 }, },
                yaxis: { title: { text: 'Reach(Unique Users)' } },
            }
        };
    }

    /**
     * set charts values
     */
    setChartValues = () => {
        const values = data[0].user;
        let dataValues = [];
        let labels = [];
        values.forEach(ele => {
            dataValues.push(ele.unique_users);
            let date = new Date(ele.dt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: '2-digit'
            }).split(' ').join(' ');
            labels.push(date);
        });
        let series = [{ name: "Reach", data: dataValues }];
        let xaxis = { categories: labels };

        this.setState({ series, options: { ...this.state.options, xaxis } });
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
export default LineChart;