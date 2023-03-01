// this file renders our data
import React, { Component } from "react";
import './DailyData.css';

class DailyData extends Component {
    render() {
        const { remove, dailyData } = this.props;
        return (
            <ul className="DailyData">
                {dailyData.map(x => {
                    return <li key={x.id}><div className="DailyData-steps">On {x.date}, you took {x.steps} steps.<button className="DailyData-done" id={x.id} onClick={remove}>Remove data</button></div></li>
                }) }
            </ul>
        )
    }
}

export default DailyData;