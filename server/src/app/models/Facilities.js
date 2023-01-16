import Sequelize, { Model } from 'sequelize'


class Facility extends Model {
  static init(sequelize) {
    super.init(
      {
        facility_id: { primaryKey: true, type: Sequelize.INTEGER },
        facility_name: Sequelize.STRING,
      },
      {
        timestamps: false,
        sequelize,
      }
    )
  }

  static associate(models) {
    this.hasMany(models.QuestionOneShift, { foreignKey: 'facility_id', as: 'facilities' })
    this.hasMany(models.Job)
  }

}

export default Facility;