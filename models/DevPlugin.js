module.exports = async ({ DataTypes, Orm, }) => {
  const attrs = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
  }

  const opts = {}

  const pos = ({ Model, models, }) => {
    Model.belongsTo(models.DevPluginType)
  }

  return Orm.addModel({ attrs, opts, pos, })
}