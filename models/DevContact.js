module.exports = async ({ DataTypes, Orm, }) => {
  const attrs = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  }

  const opts = {}

  const pos = ({ Model, models, }) => {
    Model.belongsToMany(models.DevPortfolio, { through: models.DevPortfolio_DevContact, })
  }

  return Orm.addModel({ attrs, opts, pos, })
}