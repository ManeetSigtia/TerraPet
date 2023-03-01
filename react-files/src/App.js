import './App.css';
import { Component } from 'react';
import uniqid from 'uniqid';
import DailyData from './components/DailyData';
import Images from './components/Images';
import jsonData from "./data.json";

class App extends Component {
  buttonPressed = "";
  constructor() {
    super();
    this.state = {
      steps: 0,
      activity: 0,
      id: uniqid(),
      date: this.getCurrentDate(),
      dailyData: [],
    }
    // Bind functions to this App class
    this.handleStepsChange = this.handleStepsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.getTotalSteps = this.getTotalSteps.bind(this);
    this.handleActivityChange = this.handleActivityChange.bind(this);
    this.updateImages = this.updateImages.bind(this);
    this.getCurrentDate = this.getCurrentDate.bind(this);
    this.setButtonPressed = this.setButtonPressed.bind(this);
  }

  
  handleStepsChange(event) {
    this.setState({
      steps: event.target.value,
      id: this.state.id,
    });
  }

  getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    return today;
  }

  handleActivityChange(event) {
    this.setState({
      activity: event.target.value,
    });
  }


  handleSubmit(event) {
console.log(this.buttonPressed);
    console.log(this.state);
    event.preventDefault();
    if(this.buttonPressed === 'manual') {
    let contains = false;
    this.state.dailyData.forEach(x => {
      if(x.date === this.state.date) contains = true;
    });
    if(/* !contains && this.state.date !== 'error'*/ true) {
      let day = { steps: this.state.steps, activity: this.state.activity, id: this.state.id, date: this.state.date }
      this.setState({
        id: uniqid(),
        date: this.getCurrentDate(),
        dailyData: [ ...this.state.dailyData, day]
      });
    }
  }
  else if(this.buttonPressed === 'json') {
    if(/* !contains && this.state.date !== 'error */ true) {
      let day = { steps: JSON.parse(JSON.stringify(jsonData)).steps_walked, activity: JSON.parse(JSON.stringify(jsonData)).activity_seconds, id: this.state.id, date: this.getCurrentDate() }
      this.setState({
        steps: 0,
        activity: 0,
        id: uniqid(),
        date: this.getCurrentDate(),
        dailyData: [ ...this.state.dailyData, day]
      });
    }
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
  // update the images depending on how many steps a person has
  updateImages(event) {
    let value = 0;

    if(this.getTotalSteps() >= 0 && this.getTotalSteps() < 10000) value = 0;
    else if(this.getTotalSteps() >= 10000 && this.getTotalSteps() < 20000) value = 1;
    else if(this.getTotalSteps() >= 20000 && this.getTotalSteps() < 30000) value = 2;
    else if (this.getTotalSteps() >= 30000 && this.getTotalSteps() < 40000) value = 3;
    else if (this.getTotalSteps() >= 40000) value = 4;

    return value;
  }

  setButtonPressed(event) {
    if(event.target.id === 'manual') {
      this.buttonPressed = 'manual';
    }
    else if (event.target.id === 'json') {
      this.buttonPressed = 'json';
    }
  }

  
  render() {
    const {dailyData} = this.state;

    return (
      <div className="App">

      <div className="Rewards">
        <h2>Pet Status</h2>
        <Images imageValue={this.updateImages()}/></div>
        <div className="Health-display">
        
          <h2>Your Health Data</h2>
          
          <form className="App-form" onSubmit={ this.handleSubmit }>
            <label className="App-label" htmlFor="count">Manually add your activity here: </label>
            <input className="App-input" type="number" id="count" name="count" onChange={ this.handleStepsChange } placeholder="Step Count"/>
            <input className="App-input" type="number" id="minutes" name="minutes" onChange={ this.handleActivityChange } placeholder="Activity in seconds"/>
            <button className="App-submit" id="manual" type="submit" onClick={this.setButtonPressed}>Add Daily Data Manually</button>
            <button className="App-submit" id="json" onClick={this.setButtonPressed}>Upload Data from 'Fitness Device'</button>
            
          </form>
          <div className="App-total-steps">Your Total Step Count: {this.getTotalSteps()}</div>
          <DailyData remove={this.removeTask} dailyData={dailyData}/>
        </div>
      </div>
    );
 }
}

export default App;