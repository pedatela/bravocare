import database from '../../database';
// Models
import QuestionOneShifts from '../models/QuestionOneShift'
import Facilities from '../models/Facilities';

// Helpers
import { formatedDate, verifySameDate, verifyOverlap, getOverlap } from '../helper/Helpers'

class QuestionOneShiftsController {
  async index(_, res) {
    const result = await QuestionOneShifts.findAll({
      include: [
        {
          model: Facilities,
          as: 'facilities'

        }
      ]
    })
    return res.status(200).json(result)
  }

  async compareShifts(req, res) {
    const [first_shift, secound_shift] = req.body;

    const maximum_overlap = verifyOverlap(first_shift.facility_id, secound_shift.facility_id)
    const same_date = verifySameDate(first_shift.shift_date, secound_shift.shift_date)
    const formated_end_time = formatedDate(first_shift.shift_date, first_shift.end_time, same_date)
    const formated_start_time = formatedDate(secound_shift.shift_date, secound_shift.start_time)
    const overlap_minutes = getOverlap(formated_end_time, formated_start_time)

    const exceed_overlap = overlap_minutes > maximum_overlap ? 'True' : 'False';
    return res.status(200).json({ maximum_overlap, overlap_minutes, exceed_overlap })

  }

  async remainingSpots(req, res) {
    const results = await database.connection.query(`
    SELECT results.facility_id, results. nurse_type_needed, SUM(CASE WHEN results.remaining_spots > 0 THEN results.remaining_spots ELSE 0 END) AS remaining_spots from (
      SELECT 
        jobs.facility_id, 
        jobs.nurse_type_needed, 
        jobs.total_number_nurses_needed - COUNT(nurse_hired_jobs.nurse_id) AS remaining_spots
      FROM 
        jobs 
        LEFT JOIN nurse_hired_jobs ON jobs.job_id = nurse_hired_jobs.job_id
      GROUP BY 
        jobs.facility_id, 
        jobs.nurse_type_needed, 
        jobs.total_number_nurses_needed
      )as results 
        GROUP BY results. nurse_type_needed, results.facility_id
        ORDER BY 
        results.facility_id ASC,
        results.nurse_type_needed ASC;
  `)
    res.status(200).json(results[0])
  }

  async totalJobsNumberPerNurses(req, res) {
    const results = await database.connection.query(`
        SELECT 
        nurses.nurse_id, 
        nurses.nurse_name, 
        nurses.nurse_type,
        COUNT(
          DISTINCT
          CASE
            WHEN nurse_hired_jobs.nurse_id IS NULL AND jobs.total_number_nurses_needed > (SELECT COUNT(*) FROM nurse_hired_jobs WHERE job_id = jobs.job_id) THEN jobs.job_id
          END
        ) as total_jobs
      FROM 
        nurses 
        JOIN jobs ON nurses.nurse_type = jobs.nurse_type_needed
        LEFT JOIN nurse_hired_jobs ON jobs.job_id = nurse_hired_jobs.job_id AND nurses.nurse_id = nurse_hired_jobs.nurse_id
      GROUP BY
        nurses.nurse_id,
        nurses.nurse_name,
        nurses.nurse_type
      ORDER BY
        nurses.nurse_id ASC;
    `)

    res.status(200).json(results[0])
  }

  async coWorkers(req, res) {
    const results = await database.connection.query(`
      SELECT * FROM nurse_hired_jobs nhj 
      INNER JOIN nurses n on nhj.nurse_id = n.nurse_id
      INNER JOIN jobs j on nhj.job_id = j.job_id 
      INNER JOIN facilities f on f.facility_id = j.facility_id  
      WHERE f.facility_name = ( SELECT facilities.facility_name from nurses 
                      INNER JOIN nurse_hired_jobs on nurse_hired_jobs.nurse_id = nurses.nurse_id 
                      INNER JOIN jobs on nurse_hired_jobs.job_id = jobs.job_id 
                      INNER JOIN facilities  on facilities.facility_id = jobs.facility_id  
                      WHERE  nurses.nurse_name = 'Anne') and n.nurse_name != 'Anne';
    `)
    res.status(200).json(results[0])
  }

}

export { QuestionOneShiftsController }

