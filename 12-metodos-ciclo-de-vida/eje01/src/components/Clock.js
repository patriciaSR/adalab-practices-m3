import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '0:0:0'

    };
  }

  componentDidMount(){
    this.intervalId = setInterval(() => { this.upDateClock() }, 1000);
    console.log('me estoy ejecutando');

  }
  
  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log('me estoy limpiando');

  }

  upDateClock() {
    const newDate = new Date();
    const hour = newDate.getHours();
    const minutes = newDate.getMinutes();
    const seconds = newDate.getSeconds();
    const actualTime = hour + ':' + minutes + ':' + seconds;
    this.setState({
      time: actualTime
    })
  }

  render() {
    return (
      <p>{this.state.time}</p>
    )
  }
}



export default Clock;