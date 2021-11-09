// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import { Gauges } from './components/GuageComponent/Guage';
import './App.css';
// const guageStyle = {
//   color: 'blue',
//   background: 'conic-gradient(blue 0% 20%, #303238 20% 100%)'
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guageValue: 0,
    };
  }
  // TODO: create new component to house guage?
  render() {
    return (
      <div className='main'>
        <label id='guage-input' for='guage-value'>
          <strong> Guage Value: </strong>
        </label>
        <input
          id='guage-value'
          type='text'
          pattern='[0-9]*'
          onChange={(e) => this.handleChange(e)}
        />
        <Gauges guageValue={this.state.guageValue} />
      </div>
    );
  }

  handleChange(evt) {
    const newValue =
      !evt.target.validity.valid || evt.target.value === ''
        ? 0
        : evt.target.value;
    // const newValue = e.target.value;

    this.setState({
      guageValue: newValue,
    });
  }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
