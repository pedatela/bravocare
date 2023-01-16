import axios from 'axios';

const apiRequest = axios.create({
  baseURL: 'http://localhost:5000/api'
});

const apiBravo = {

  getshifts() {
    return apiRequest.get('/question-one-shifts');
  },

  compareShifts(data) {
    return apiRequest.post('/compare-shifts', data);
  },

  getRemaningSpots() {
    return apiRequest.get('/remaining-spots')
  },


  getTotalJobsNumberPerNurses() {
    return apiRequest.get('/total-jobs-number-per-nurses')
  },

  getCoWorkers() {
    return apiRequest.get('/co-works')
  }


}

export { apiBravo };
