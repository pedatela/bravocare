import Sequelize, { Model } from 'sequelize'


class NurseHiredJob extends Model {
  static init(sequelize) {
    super.init(
      {

      },
      {
        timestamps: false,
        sequelize,
      }
    )
  }

  static associate(models) {

  }

}

export { NurseHiredJob };