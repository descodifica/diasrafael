module.exports = async ({ DataTypes, Orm, }) => {
  const attrs = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }

  const opts = {}

  const pos = ({ Model, models, }) => {
    Model.hasMany(models.DevPlugin)
  }

  return Orm.addModel({ attrs, opts, pos, })
}