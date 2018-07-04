import React, { Component } from 'react';

import Counter from "./Counter";
import './App.css';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
   incrementCounter = () => {
    this.setState({
      counter: ++this.state.counter
    });
  };

  decrementCounter = () => {
    this.setState({
      counter: --this.state.counter
    });
  };
  render() {
    return (
      <div className="App">
        <p color="primary">Choose number of <b>people</b></p>
          <div className="board">
            <Grid container spacing={16}>
              <Grid item xs={9}>
                <p color="primary">Rooms</p>
              </Grid>
              <Grid item xs={1}>
                <p className="count" onClick={this.decrementCounter} >
                  <Icon  color="primary">
                  remove_circle
                  </Icon>
                </p>
              </Grid>
              <Grid item xs={1}>
                <Counter counter={this.state.counter} />  
              </Grid>
              <Grid item xs={1}>
                <p className="count" onClick={this.incrementCounter} >
                  <Icon  color="secondary">
                  add_circle
                  </Icon>
                </p>
              </Grid>
            </Grid>

                      <Grid className="adult" container spacing={16}>
            <Grid item xs={9}>
              <p color="primary">Adults</p>
            </Grid>
            <Grid className="alinn" item xs={1}>
              <p className="count" onClick={this.decrementCounter} >
                <Icon  color="primary">
                remove_circle
                </Icon>
              </p>
            </Grid>
            <Grid className="alinn" item xs={1}>
              <Counter counter={this.state.counter} />  
            </Grid>
            <Grid className="alinn" item xs={1}>
              <p className="count" onClick={this.incrementCounter} >
                <Icon  color="secondary">
                add_circle
                </Icon>
              </p>
            </Grid>
          </Grid>

          <Grid className="adult" container spacing={16}>
            <Grid item xs={9}>
              <p color="primary">Children</p>
            </Grid>
            <Grid className="alinn" item xs={1}>
              <p className="count" onClick={this.decrementCounter} >
                <Icon  color="primary">
                remove_circle
                </Icon>
              </p>
            </Grid>
            <Grid className="alinn" item xs={1}>
              <Counter counter={this.state.counter} />  
            </Grid>
            <Grid className="alinn" item xs={1}>
              <p className="count" onClick={this.incrementCounter} >
                <Icon  color="secondary">
                add_circle
                </Icon>
              </p>
            </Grid>
          </Grid>
          </div>
      </div>
    );
  }
}

export default App;
