import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const intervalIdRef = useRef(null);

  const [inputDate, setInputDate] = useState('');

  const handleInputChange = (event) => {
    setInputDate(event.target.value);
  };

  const handleSetDate = () => {
    const countDownDate = new Date(inputDate).getTime();
    if (isNaN(countDownDate)) {
      alert('Please enter a valid date.');
      return;
    }
    clearInterval(intervalIdRef.current);
    setTimerDays('00');
    setTimerHours('00');
    setTimerMinutes('00');
    setTimerSeconds('00');
  };

  const startTimer = () => {
    const countDownDate = new Date(inputDate).getTime();
    intervalIdRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intervalIdRef.current);
      } else {
        setTimerDays(days.toString().padStart(2, '0'));
        setTimerHours(hours.toString().padStart(2, '0'));
        setTimerMinutes(minutes.toString().padStart(2, '0'));
        setTimerSeconds(seconds.toString().padStart(2, '0'));
      }
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null; // set the intervalIdRef to null after clearing the interval
    setTimerDays('00');
    setTimerHours('00');
    setTimerMinutes('00');
    setTimerSeconds('00');
  };
  

  return (
    <section className='timer-container'>
      <section className='timer'>
        <div>
          <span className='mdi mdi-calendar-clock timer-icon'></span>

          <h2>Countdown Timer</h2>
          <p>Countdown to a really special date. One you could or would never imagine!!</p>
        </div>

        <div>
        <input
          type="datetime-local"
          value={inputDate}
          onChange={handleInputChange}
        />
        <button className='btn btn-success' onClick={handleSetDate}>
          Set Date
        </button>
      </div>


        <div className='buttons'>
          <button className='btn btn-info' onClick={startTimer}>
            Start
          </button>
          <button className='btn btn-danger' onClick={stopTimer}>
            Stop
          </button>
        </div>

        <div>
          <section>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>

         

          <section>
            <p>{timerHours}</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>

          <section>
            <p>{timerMinutes}</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>

          <section>
            <p>{timerSeconds}</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}

export default App;
