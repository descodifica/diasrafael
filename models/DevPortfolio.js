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
    imageUrl: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
    site: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    git: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    npm: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    doc: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    discord: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
  }

  const opts = {}

  const pos = ({ Model, models, }) => {
    Model.belongsToMany(models.DevTechnique, { through: models.DevPortfolio_DevTechnique, })
    Model.belongsToMany(models.DevContact, { through: models.DevPortfolio_DevContact, })
  }

  return Orm.addModel({ attrs, opts, pos, })
}