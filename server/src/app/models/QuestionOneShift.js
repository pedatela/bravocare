import Sequelize, { Model } from 'sequelize'


class QuestionOneShift extends Model {
  static init(sequelize) {
    super.init(
      {
        shift_id: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        shift_date: Sequelize.DATEONLY,
        start_time: Sequelize.TIME,
        end_time: Sequelize.TIME,
      },
      {
        timestamps: false,
        sequelize,
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.Facility, { foreignKey: 'facility_id', as: 'facilities' })
  }

}

export default QuestionOneShift;