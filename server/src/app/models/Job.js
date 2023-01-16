import Sequelize, { Model } from 'sequelize'


class Job extends Model {
  static init(sequelize) {
    super.init(
      {
        nurse_type_needed: Sequelize.STRING,
        total_number_nurses_needed: Sequelize.INTEGER,
      },
      {
        timestamps: false,
        sequelize,
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.Facility, { foreignKey: 'facility_id', as: 'facilities' })
    this.belongsToMany(models.Nurse, { through: models.NurseHiredJob })
  }

}

export { Job };