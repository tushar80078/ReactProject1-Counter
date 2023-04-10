import { useState } from 'react'
import './App.css'

function App() {
 
  const [timerDays,setTimerDays]=useState('00');
  const [timerHours,setTimerHours]=useState('00');
  const [timerMinutes,setTimerMinutes]=useState('00');
  const [timerSeconds,setTimerSeconds]=useState('00');
 // const [inputDate,setInputDate]=useState();


  let interval;

  // const handleChange=(event)=>{
  //   setInputDate(event.target.value);
  // }

  const startTimer=()=>{
    const countDownDate=new Date('May 30, 2024 00:00:00').getTime();
    //const countDownDate=inputDate;
    interval = setInterval(() => {
      const now=new Date().getTime();
      const distance=countDownDate-now;
      const days=Math.floor(distance/(1000 * 60 * 60 * 24));
      const hours=Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes=Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60  ) );
      const seconds=Math.floor(distance % (1000 * 60 )/(1000 ));

      if(distance<0)
      {
        //stop our timer
        clearInterval(interval.current);

      }
      else
      {
        //update timer

        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  const stopTimer=()=>{
    clearInterval(interval.current);
    console.log("here");
  }
 


  return (
    <section className='timer-container'>
      <section className='timer'>
        <div>
          <span className='mdi mdi-calendar-clock timer-icon'></span>

          <h2>Countdown Timer</h2>
          <p>Countdown to a really special date. One you could or would never imagin!!</p>

        </div>


            {
              /*
                  <div className='date'>
                  <section >
                      <h2>Select Date</h2>
                      <input type="date"  />
                    </section>
                  </div>
              */
              
            }
       
        <div className='buttons'>
            <button className='btn btn-info' onClick={startTimer}>Start</button>
            <button className='btn btn-danger' onClick={stopTimer}>Stop</button>
            </div>

        <div>

         
          
        <section>
            <p>{timerDays}</p>
            <p><small>Days</small></p>
          </section>
          <span>:</span>

          <section>
            <p>{timerHours}</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>

          <section>
            <p>{timerMinutes}</p>
            <p><small>Minutes</small></p>
          </section>
          <span>:</span>

          <section>
            <p>{timerSeconds}</p>
            <p><small>Seconds</small></p>
          </section>
        </div>

        

      </section>


    </section>
  )
}

export default App
