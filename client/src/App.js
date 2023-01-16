import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './App.css';

import Cards from './components/card';

import { apiBravo } from './service/api';

function App() {
  const [shiftsComparedResult, setShiftsComparedResult] = useState();
  const [selectedShifts, setSelectedShifts] = useState([]);
  const [countShifts, setCountShifts] = useState(0);
  const [shifts, setShifts] = useState([])

  useEffect(() => {
    async function loadShifts() {
      const { data } = await apiBravo.getshifts();
      setShifts(data)
    }
    loadShifts()
  }, [])


  const handleCardClick = (shift, active) => {
    if (active) {
      setCountShifts(countShifts + 1)
      setSelectedShifts([...selectedShifts, shift]);
    } else {
      setCountShifts(countShifts - 1)
      setSelectedShifts(selectedShifts.filter((element) => element.shift_id !== shift.shift_id));
    }
  }

  const handleSubmit = async () => {
    const shiftsOrder = selectedShifts[0].shift_date !== selectedShifts[1].shift_date ?
      selectedShifts.sort((a, b) => moment(a.shift_date, 'YYYY-MM-DD') - moment(b.shift_date, 'YYYY-MM-DD')) :
      selectedShifts.sort((a, b) => moment(a.start_time, 'hh:mm') - moment(b.start_time, 'hh:mm'))
    const { data } = await apiBravo.compareShifts(shiftsOrder);

    setShiftsComparedResult(data)

  }


  const handleQuery4 = async () => {
    const { data } = await apiBravo.getRemaningSpots()
    console.log(data)
  }


  const handleQuery5 = async () => {
    const { data } = await apiBravo.getTotalJobsNumberPerNurses()
    console.log(data)
  }

  const handleQuery6 = async () => {
    const { data } = await apiBravo.getCoWorkers()
    console.log(data)
  }

  return (
    <div className="App">
      {shiftsComparedResult && (
        <div className='card'>
          <h5>Maximum Overlap: {shiftsComparedResult.maximum_overlap}</h5>
          <h5>Overlap Minutes: {shiftsComparedResult.overlap_minutes}</h5>
          <h5>Exceed Overlap:  {shiftsComparedResult.exceed_overlap}</h5>
        </div>
      )}

      <button className='Submit-button' onClick={handleSubmit}>Submit</button>
      <header className="App-header">
        {shifts.map(function (shift, i) {
          return <Cards handleCardClick={handleCardClick} countShifts={countShifts} shift={shift} key={i} />;
        })}
      </header>
      <div className='button'>
        <button className='Submit-button' onClick={handleQuery4}>Execute Query 4</button>
        <button className='Submit-button' onClick={handleQuery5}>Execute Query 5</button>
        <button className='Submit-button' onClick={handleQuery6}>Execute Query 6</button>
      </div>
    </div>
  );
}

export default App;
