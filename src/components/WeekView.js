import React from 'react';
import '../index.css';
import timer from '../images/timer.png';
import run from '../images/run.png';
import burn from '../images/burn.png';
import distance from '../images/distance.png';

class WeekView extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        steps: 0,
        callories: 0,
        averageActivity: "0h 0min",
        averageDistance: 0
      }
    }

    componentDidUpdate() {
        let steps = 0;
        let callories = 0;
        let activityTotalSeconds = 0;
        let totalDistanceMeters = 0
        let trainingsByDay = Object.values(this.props.trainingsByDay)
        for (let dayIndex = 0; dayIndex < trainingsByDay.length; dayIndex++) {
            const trainingsInDay = trainingsByDay[dayIndex]
            for (let trainingIndex = 0; trainingIndex < trainingsInDay.length; trainingIndex++) {
                const training = trainingsInDay[trainingIndex];
                steps += training.steps;
                callories += training.getCallories();
                activityTotalSeconds += training.getActivityTotalSeconds();
                totalDistanceMeters += training.getDistance();
            }
        }
        callories = Math.round(callories)
        const activityAverageSeconds = activityTotalSeconds/trainingsByDay.length;
        const activityHours = Math.floor(activityAverageSeconds/60/60);
        const activityMinutes = Math.round(activityAverageSeconds/60 - activityHours*60);
        const averageActivity = activityHours + "h " + activityMinutes + "min";
        const averageDistance = Math.round(totalDistanceMeters/trainingsByDay.length)/1000;
        if (steps !== this.state.steps || callories !== this.state.callories || averageActivity !== this.state.averageActivity 
            || averageDistance !== this.state.averageDistance) {
          this.setState({
            steps: steps,
            callories: callories,
            averageActivity: averageActivity,
            averageDistance: averageDistance
          })
        }
    }
    render(){
      return (
        <>
          <div className="generalProperties homeActivity">
            <div className="activity">
              <div className="card">
                <img src={timer} alt="timer" />
              </div>
              <div className="card">
                <div>Activity</div>
                <div className="cardAverage">Average</div>
                <div className="cardActivity">
                  <b>{this.state.averageActivity}</b>
                </div>
              </div>
            </div>
          </div>

          <div className="generalProperties homeSteps">
            <div className="activity">
                <div className="card">
                  <img src={run} alt="run" />
                </div>
                <div className="card">
                  <div>Steps</div>
                  <div className="cardAverage">Total</div>
                </div>    
            </div>
                <div className="cardSteps">
                  <b>{this.state.steps}</b>
                </div>
            </div>

          <div className="generalProperties homeSteps">
            <div className="activity">
                  <div className="card">
                    <img src={burn} alt ="burn" />
                  </div>     
                  <div className="card">
                    <div>Calories</div>
                    <div className="cardAverage">Total Burned</div>
                  </div>    
              </div>
                  <div className="cardSteps">
                    <b>{this.state.callories}</b>
                  </div>
          </div>

          <div className="generalProperties homeSteps">
            <div className="activity">
                    <div className="card">
                    <img src={distance} alt ="distance" />
                    </div>     
                    <div className="card">
                      <div>Distance</div>
                      <div className="cardAverage">km</div>
                    </div>    
                </div>
                    <div className="cardSteps">
                      <b>{this.state.averageDistance}</b>
                    </div>
          </div>
        </>
      )
    }
  }
  
  export default WeekView;