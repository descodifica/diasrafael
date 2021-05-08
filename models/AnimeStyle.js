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
  }

  const opts = {}

  const pos = ({ Model, models, }) => {
    Model.belongsToMany(models.Anime, { through: models.Anime_AnimeStyle, })
  }

  return Orm.addModel({ attrs, opts, pos, })
}