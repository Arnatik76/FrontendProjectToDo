import React, { Component } from 'react';
import styles from '../styles/PomodoroTimer.module.css';

class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 5,
      isRunning: false,
      mode: 'work',
    };
    this.timer = null;
  }

  runTimer = () => {
    if (this.state.isRunning) {
      this.timer = setTimeout(() => {
        if (this.state.time > 0) {
          this.setState({ time: this.state.time - 1 }, this.runTimer);
        } else {
          this.switchMode(); // Автоматически переходит в другой режим
        }
      }, 1000);
    }
  };

  startTimer = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true }, this.runTimer);
    }
  };

  stopTimer = () => {
    clearTimeout(this.timer);
    this.setState({ isRunning: false });
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({ time: this.state.mode === 'work' ? 5 : 10 });
  };

  switchMode = () => {
    this.stopTimer(); // Останавливаем таймер перед сменой режима

    this.setState((prevState) => ({
      mode: prevState.mode === 'work' ? 'break' : 'work',
      time: prevState.mode === 'work' ? 10 : 5,
      isRunning: true, // Автоматически продолжаем таймер
    }), this.runTimer);

    this.props.onModeChange(this.state.mode === 'work');
  };

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  render() {
    return (
      <div className={`${styles.pomodoro} ${this.props.isDark ? styles.dark : ''}`}>
        <h2>{this.state.mode === 'work' ? 'Работа' : 'Отдых'}</h2>
        <h1>{this.formatTime(this.state.time)}</h1>
        <div className={styles.buttons}>
          <button onClick={this.startTimer} disabled={this.state.isRunning}>Старт</button>
          <button onClick={this.stopTimer}>Стоп</button>
          <button onClick={this.resetTimer}>Сброс</button>
        </div>
      </div>
    );
  }
}

export default PomodoroTimer;
