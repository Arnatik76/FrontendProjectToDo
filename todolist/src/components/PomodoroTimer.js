import React, { Component } from 'react';
import styles from '../styles/PomodoroTimer.module.css';

class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    
    const storageKey = `pomodoroState_${this.props.taskId}`;
    const savedState = JSON.parse(localStorage.getItem(storageKey)) || {};
    
    this.state = {
      time: savedState.time || 5,
      isRunning: false,
      mode: savedState.mode || 'work',
    };
    this.timer = null;
    this.storageKey = storageKey;
  }

  componentDidMount() {
    if (this.props.isBreak && this.state.mode !== 'break') {
      this.setState({ mode: 'break', time: 10 });
    } else if (!this.props.isBreak && this.state.mode === 'break') {
      this.setState({ mode: 'work', time: 5 });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isBreak !== this.props.isBreak) {
      const newMode = this.props.isBreak ? 'break' : 'work';
      const newTime = newMode === 'work' ? 5 : 10;
      this.setState({ mode: newMode, time: newTime });
    }

    localStorage.setItem(this.storageKey, JSON.stringify({
      time: this.state.time,
      mode: this.state.mode
    }));
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  runTimer = () => {
    if (this.state.isRunning) {
      this.timer = setTimeout(() => {
        if (this.state.time > 0) {
          this.setState({ time: this.state.time - 1 }, this.runTimer);
        } else {
          this.switchMode();
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
    this.stopTimer();

    const newMode = this.state.mode === 'work' ? 'break' : 'work';
    const newTime = newMode === 'work' ? 5 : 10;
    
    this.setState({
      mode: newMode,
      time: newTime,
      isRunning: true,
    }, () => {
      this.runTimer();
      this.props.onModeChange(newMode === 'break');
    });
  };

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  render() {
    const { mode } = this.state;
    const modeClass = mode === 'break' ? styles.breakMode : styles.workMode;

    return (
      <div className={`${styles.pomodoro} ${this.props.isDark ? styles.dark : ''} ${modeClass}`}>
        <div className={styles.timer}>
          <h2 className={styles.modeIndicator}>
            {mode === 'work' ? 'Работа' : 'Отдых'}
          </h2>
          <h1>{this.formatTime(this.state.time)}</h1>
        </div>
        <div className={styles.buttons}>
          <button onClick={this.startTimer} disabled={this.state.isRunning}>Старт</button>
          <button onClick={this.stopTimer} disabled={!this.state.isRunning}>Стоп</button>
          <button onClick={this.resetTimer}>Сброс</button>
        </div>
      </div>
    );
  }
}

export default PomodoroTimer;