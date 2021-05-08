module.exports = async ({ DataTypes, Orm, }) => {
  const attrs = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    cover: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    note: {
      type: DataTypes.INTEGER(),
      allowNull: true,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    masterpiece: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    synopsis: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
    opinion: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
  }

  const opts = {}

  const pos = ({ Model, models, }) => {
    Model.belongsToMany(models.AnimeGenre, { through: models.Anime_AnimeGenre, })
    Model.belongsToMany(models.AnimeStyle, { through: models.Anime_AnimeStyle, })
    Model.belongsToMany(models.AnimeTag, { through: models.Anime_AnimeTag, })
    Model.belongsTo(models.AnimeWorld)
    Model.belongsTo(models.AnimeUniverse)
    Model.hasMany(models.AnimeBackground)
    Model.hasMany(models.AnimeImage)
  }


  return Orm.addModel({ attrs, opts, pos, })
}