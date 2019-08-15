import React from 'react';
import Main from '../src/components/Main'
import Header from './components/Header';
import './index.css';
import {loadTrainingSessions} from './data/service';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        trainings: {}
    }
  }

  componentDidMount() {
    loadTrainingSessions().then(trainingsByDay => {
        this.setState({trainings: trainingsByDay});
    })
  }

  render(){
    return (
      <>
        <div className="container">
          <Header trainingsByDay={this.state.trainings} />
          <Main trainingsByDay={this.state.trainings} />
        </div>
      </>
    )
  }
}

export default App;