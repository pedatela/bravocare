import Sequelize, { Model } from 'sequelize'


class Nurse extends Model {
  static init(sequelize) {
    super.init(
      {
        nurse_name: Sequelize.STRING,
        nurse_type: Sequelize.STRING,
      },
      {
        timestamps: false,
        sequelize,
      }
    )
  }

  static associate(models) {
    this.belongsToMany(models.Job, { through: models.NurseHiredJob })
  }

}

export { Nurse };