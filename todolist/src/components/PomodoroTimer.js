import React, { Component } from 'react';
import './PomodoroTimer.css';

class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 5, // Начальное время в секундах
      isRunning: false,
      mode: 'work' // Режим: work или break
    };
  }

  componentDidMount() {
    this.setupTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isRunning !== this.state.isRunning || prevState.time !== this.state.time) {
      this.setupTimer();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setupTimer = () => {
    clearInterval(this.timer);
    if (this.state.isRunning && this.state.time > 0) {
      this.timer = setInterval(() => {
        this.setState(prevState => ({
          time: prevState.time - 1
        }));
      }, 1000);
    } else if (this.state.time === 0) {
      this.switchMode();
      clearInterval(this.timer);
    }
  };

  startTimer = () => {
    this.setState({ isRunning: true });
  };

  stopTimer = () => {
    this.setState({ isRunning: false });
  };

  resetTimer = () => {
    this.setState({
      isRunning: false,
      time: this.state.mode === 'work' ? 5 : 10
    });
  };

  switchMode = () => {
    this.setState(prevState => ({
      isRunning: false,
      mode: prevState.mode === 'work' ? 'break' : 'work',
      time: prevState.mode === 'work' ? 10 : 5
    }));
  };

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  render() {
    const { mode, time, isRunning } = this.state;
    return (
      <div className="pomodoro">
        <h2>{mode === 'work' ? 'Работа' : 'Отдых'}</h2>
        <h1>{this.formatTime(time)}</h1>
        <div className="buttons">
          <button onClick={this.startTimer} disabled={isRunning}>
            Старт
          </button>
          <button onClick={this.stopTimer} disabled={!isRunning}>
            Стоп
          </button>
          <button onClick={this.resetTimer}>Сброс</button>
        </div>
      </div>
    );
  }
}

export default PomodoroTimer;