import React from 'react';
import Main from '../src/components/Main'
import Header from './components/Header';
import './index.css';

class App extends React.Component {
  render(){
    return (
      <>
        <div className="container">
          <Header />
          <Main />
        </div>
      </>
    )
  }
}

export default App;