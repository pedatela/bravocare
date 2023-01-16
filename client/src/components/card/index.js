import React, { useState } from 'react';
import moment from 'moment'

// import api from '../services/api'

import { CardWrapper, Infos } from './styles';



function Cards({ handleCardClick, countShifts, shift }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (countShifts < 2 || active) {
      setActive((active) => {
        handleCardClick(shift, !active)
        return !active
      });
    }


  };

  const formatHour = (hour) => {
    return moment(hour, 'hh:mm:ss').format('hh:mm A')
  }

  return (
    <CardWrapper active={active} onClick={handleClick}>
      <h5>{shift.facilities.facility_name}</h5>
      <Infos>{shift.shift_date}</Infos>
      <Infos>{formatHour(shift.start_time)} - {formatHour(shift.end_time)}</Infos>
    </CardWrapper>
  );
}

export default Cards;