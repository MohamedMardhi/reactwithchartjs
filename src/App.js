import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';


class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }
  componentWillMount() {
    this.getChartData();
  };

  getChartData() {
    // put you API call request here
    this.setState({
      chartData: {
        labels: ['Jacksonville city', 'Miami city', 'St. Petersburg city', 'Hollywood city', 'Orlando city', 'Miramar city'],
        datasets: [
          {
            label: 'Population',
            data: [
              821784,
              399457,
              335709,
              244769,
              238300,
              224669
            ],
            backgroundColor: [
              '#74b9ff', '#0984e3', '#fab1a0', '#ffeaa7', '#636e72', '#fdcb6e'
            ]
          }
        ]
      }
    });
  }
  render() {
    return (

      <div className="App">

        <Chart chartData={this.state.chartData} location="California" legendPosition="bottom" />
      </div>
    )
  }
}
export default App;
