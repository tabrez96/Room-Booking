import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import style from './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room_counter: 1,
      adult_counter: 1,
      child_counter: 0
    };
  }
  incrementCounter = (type) => {
    switch (type) {
      case 'room':
        this.setState({
          room_counter: this.state.room_counter + 1
        }, () => this.setState({ adult_counter: this.state.adult_counter + 4 }));
        break;
      case 'adult':
        this.setState({
          adult_counter: this.state.adult_counter + 1
        }, () => {
          if (this.state.adult_counter % 4 === 1) {
            this.setState({ room_counter: this.state.room_counter + 1 })
          }
        });
        break;
      case 'child':
        this.setState({
          child_counter: this.state.child_counter + 1
        });
        break;
      default: break;
    }
  };

  decrementCounter = (type) => {
    switch (type) {
      case 'room':
        if (this.state.room_counter > 1) {
          this.setState({
            room_counter: this.state.room_counter - 1
          }, () => {
            this.setState({ adult_counter: (this.state.room_counter * 4) })
          });
        } else {
          alert('Cannot be zero');
        }
        break;
      case 'adult':
        if (this.state.adult_counter > 1) {
          this.setState({
            adult_counter: this.state.adult_counter - 1
          }, () => {
            if (this.state.adult_counter % 4 === 0) {
              this.setState({ room_counter: this.state.room_counter - 1 })
            }
          });
        } else {
          alert('Cannot be zero');
        }
        break;
      case 'child':
        if (this.state.child_counter > 0) {
          this.setState({
            child_counter: this.state.child_counter - 1
          });
        } else {
          alert('Cannot be in negative');
        }
        break;
      default: break;
    }
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
              <p className="count" onClick={() => this.decrementCounter('room')} >
                <Icon color="primary">
                  remove_circle
                  </Icon>
              </p>
            </Grid>
            <Grid item xs={1}>
              <span className="count">
                {this.state.room_counter}
              </span>
            </Grid>
            <Grid item xs={1}>
              <p className="count" onClick={() => this.incrementCounter('room')} >
                <Icon color="secondary">
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
              <p className="count" onClick={() => this.decrementCounter('adult')} >
                <Icon color="primary">
                  remove_circle
                </Icon>
              </p>
            </Grid>
            <Grid className="alinn" item xs={1}>
              <span className="count">
                {this.state.adult_counter}
              </span>
            </Grid>
            <Grid className="alinn" item xs={1}>
              <p className="count" onClick={() => this.incrementCounter('adult')} >
                <Icon color="secondary">
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
              <p className="count" onClick={() => this.decrementCounter('child')} >
                <Icon color="primary">
                  remove_circle
                </Icon>
              </p>
            </Grid>
            <Grid className="alinn" item xs={1}>
              <span className="count">
                {this.state.child_counter}
              </span>
            </Grid>
            <Grid className="alinn" item xs={1}>
              <p className="count" onClick={() => this.incrementCounter('child')} >
                <Icon color="secondary">
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
