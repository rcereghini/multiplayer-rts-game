import React, { Component } from 'react';
import GridItems from './components/GridItems/GridItems'
import StatusScreen from './components/StatusScreen/StatusScreen'
import './App.css';


//Different map sizes: 100 grid items, 200 grid items, 500 grid items --- 3 different maps at launch
//Different unit types: infanty, tank, ranged
//Unit health points: add unit health points


class App extends Component {

  componentDidMount(){
    console.log('Component Mounted')
  }

  render() {
    return (
      <div className="App">    
        <div id="gameBoard" className="gameBoard">
          <h1 className="gameTitle">Land Grab</h1>
          <div id="gameScreen" className="gameScreen">
            <div id="gameGrid" className="gameGrid">
              <GridItems numOfItems={400}></GridItems>
            </div>
          </div>
        </div>
        <StatusScreen></StatusScreen>
      </div>
    );
  }
}

export default App;
