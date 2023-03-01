import './App.css';
import { Component } from 'react';
import uniqid from 'uniqid';
import DailyData from './components/DailyData';

class App extends Component {
  constructor() {
    super();
    this.span = document.createElement('span');
    this.span.textContent = "You've already added data for today.";
    this.state = {
      steps: 0,
      id: uniqid(),
      date: 'error',
      dailyData: [],
    }
    // Bind functions to this App class
    this.handleStepsChange = this.handleStepsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.getTotalSteps = this.getTotalSteps.bind(this);

    /*this.handleHeartRateChange = this.handleHeartRateChange(this);*/
  }

  
  handleStepsChange(event) {
    // credit to https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript for the code snippet
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    this.setState({ 
      steps: event.target.value,
      id: this.state.id,
      date: today,
    });
  }

  /*handleHeartRateChange(event) {
    this.setState({ 
      heartRate: event.target.value,
    });
  }*/

  handleSubmit(event) {
    event.preventDefault();
    let contains = false;
    this.state.dailyData.forEach(x => {
      if(x.date === this.state.date) contains = true;
    });
    if(!contains && this.state.date !== 'error') {
      let day = { steps: this.state.steps, id: this.state.id, date: this.state.date }
      this.setState({
        steps: 0,
        id: uniqid(),
        date: 'error',
        dailyData: [ ...this.state.dailyData, day],
      });
    }
  }

  removeTask(event) {
    let arrayTemp = this.state.dailyData;
    let index;
    arrayTemp.forEach(x => {
      if(x.id === event.target.id) {
        index = arrayTemp.indexOf(x);
      }
    });
    arrayTemp.splice(index, 1);
    this.setState({
      dailyData: arrayTemp,
    });
  }

  getTotalSteps(event) {
    let total = 0;
    this.state.dailyData.forEach(x => {
      total = parseInt(total) + parseInt(x.steps);
    });
    return total;
  }
  
  render() {
    const {dailyData} = this.state;

    return (
      <div className="App">

      <div className="Rewards">
        <h2>Pet Status</h2>
        <img id="pet-egg" src=""/>
      </div>

        <div className="Health-display">
          <h2>Your Health Data</h2>
          <form className="App-form" onSubmit={ this.handleSubmit }>
            <label className="App-label" htmlFor="count">How many steps did you get today?</label>
            <input className="App-input" type="number" id="count" name="count" onChange={ this.handleStepsChange } required placeholder="Step Count"/>
            <button className="App-submit" type="submit">Add Data</button>
          </form>
          <div className="App-total-steps">Your Total Step Count: {this.getTotalSteps()}</div>
          <DailyData remove={this.removeTask} dailyData={dailyData}/>
        </div>
      </div>
    );
  }
}

export default App;

/*
axios
  .request({
    method: 'GET',
    url: 'https://api.tryterra.co/v2/activity',
    params: {
      user_id: '71686011-d882-48af-81e6-11e64ff47923',
      start_date: '2022-10-01',
      to_webhook: 'false',
      with_samples: 'true'
    },
    headers: {
      accept: 'application/json',
      'dev-id': 'health-web-app-dev-bFtjnKGwHO',
      'x-api-key': '87341223a82c4de431e6821285f68ad0b2bdaa60cc9c20a2c1d020c6e4472586',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
  
  */