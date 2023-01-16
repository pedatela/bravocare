import moment from "moment"

function verifyOverlap(first_shift_facility_id, secound_shift_facility_id) {
  return first_shift_facility_id === secound_shift_facility_id ? 30 : 0
}

function verifySameDate(first_shift_date, secound_shift_date) {
  return first_shift_date === secound_shift_date
}


function formatedDate(date, time, same_date = true) {
  return !same_date ? moment(`${date} ${time} `, 'YYYY-MM-DD HH:mm A').add(1, 'days') : moment(`${date} ${time} `, 'YYYY-MM-DD HH:mm A')
}

function getOverlap(formated_end_time, formated_start_time) {
  console.log(formated_end_time, formated_start_time)
  let diff = formated_end_time.diff(formated_start_time, 'minutes');
  console.log(diff)
  diff = diff < 0 ? 0 : diff
  return diff
}

export { verifyOverlap, verifySameDate, formatedDate, getOverlap }