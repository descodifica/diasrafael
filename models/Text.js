module.exports = async ({ DataTypes, Orm, }) => {
  const attrs = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
  }

  const opts = {}

  const pos = ({ Model, models, }) => {
    Model.belongsTo(models.TextType)
  }

  return Orm.addModel({ attrs, opts, pos, })
}