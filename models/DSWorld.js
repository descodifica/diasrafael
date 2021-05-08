module.exports = async ({ DataTypes, Orm, }) => {
  const attrs = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    description: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
    seed: {
      type: DataTypes.INTEGER(),
      // type: DataTypes.BIGINT(),
      allowNull: false,
    },
    cluster: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
  }

  const opts = {}

  const pos = ({ Model, models, }) => {
    Model.belongsTo(models.User)
    Model.belongsTo(models.DSType)
  }

  return Orm.addModel({ attrs, opts, pos, })
}