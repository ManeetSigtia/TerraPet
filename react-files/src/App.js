import './App.css';
import { Component } from 'react';
import uniqid from 'uniqid';
import DailyData from './components/DailyData';
import Images from './components/Images';

class App extends Component {
  constructor() {
    super();
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
    this.updateImages = this.updateImages.bind(this);
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


  handleSubmit(event) {
    event.preventDefault();
    let contains = false;
    this.state.dailyData.forEach(x => {
      if(x.date === this.state.date) contains = true;
    });
    if(/*!contains  && */ this.state.date !== 'error') {
      let day = { steps: this.state.steps, id: this.state.id, date: this.state.date }
      this.setState({
        steps: 0,
        id: uniqid(),
        date: 'error',
        dailyData: [ ...this.state.dailyData, day]
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