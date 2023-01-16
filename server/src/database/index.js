import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// Models
import { Job } from '../app/models/Job';
import { Nurse } from '../app/models/Nurse';
import Facility from '../app/models/Facilities';
import { NurseHiredJob } from '../app/models/NurseHiredJob';
import QuestionOneShift from '../app/models/QuestionOneShift';


const models = [
  Job,
  Nurse,
  Facility,
  NurseHiredJob,
  QuestionOneShift
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(model => model.associate && model.associate(this.connection.models));
  }

}

export default new Database();