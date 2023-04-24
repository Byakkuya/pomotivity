import React, { useState, useEffect } from 'react';
import './PomodoroClock.css';

function PomodoroClock() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [session, setSession] = useState('work');
  const [manualTime, setManualTime] = useState(25);

  useEffect(() => {
    let countdownInterval = null;

    if (isActive && timeLeft > 0) {
      countdownInterval = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      setSession(prevSession => prevSession === 'work' ? 'break' : 'work');
      setTimeLeft(prevSession => prevSession === 'work' ? 5 * 60 : 25 * 60);
    }

    return () => clearInterval(countdownInterval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(prevIsActive => !prevIsActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSession('work');
    setTimeLeft(manualTime * 60);
  };

  const handleManualTimeChange = (event) => {
    const newTime = parseInt(event.target.value, 10);
    setManualTime(newTime);
    setTimeLeft(newTime * 60);
  };

  const formatTimeLeft = (timeLeft) => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pomodoro-clock-container">
      <div className={`pomodoro-clock ${isActive ? 'active' : ''}`}>
        <h2 className="session-title">{session === 'work' ? 'Work' : 'Break'}</h2>
        <h1 className="time-left">{formatTimeLeft(timeLeft)}</h1>
        <input className="manual-time-input" type="number" min="1" max="60" value={manualTime} onChange={handleManualTimeChange} />
        <div className="button-container">
          <button className={`timer-button ${isActive ? 'pause' : 'start'}`} onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
          <button className="reset-button" onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default PomodoroClock;
