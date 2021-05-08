module.exports = async ({ DataTypes, Orm, }) => {
  const attrs = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }

  const opts = {}

  const pos = ({ Model, models, }) => {
    Model.hasOne(models.DSWorld)
    Model.hasOne(models.DSMod)
  }

  return Orm.addModel({ attrs, opts, pos, })
}