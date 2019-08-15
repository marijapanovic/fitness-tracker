import React from 'react';
import './index.css';
import clock from './images/clock.png';
import run from './images/run.png';
import burn from './images/burn.png';

class Home extends React.Component {
    render(){
      return (
        <>
          <div className="generalProperties homeActivity">
            <div className="activity">
              <div style={{"float": "left"}}>
                <img src={clock} alt="clock" style={{width:'20px'}} />
              </div>
              <div style={{"float": "left"}}>
                <div>Activity</div>
                <div>Average</div>
              </div>
            </div>
          </div>
          <div className="generalProperties homeSteps">
          <img src={run} alt="run" style={{width:'20px'}} />
            <h4>Steps!</h4>
            <b>3000</b>
            <p>Total</p>
          </div>
          <div className="generalProperties homeSteps">
          <img src={burn} alt ="burn" />
            <h4>Calories!</h4> 
            <b>300</b>
            <p>Total Burned</p>
          </div>
        </>
      )
    }
  }
  
  export default Home;