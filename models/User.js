module.exports = async ({ DataTypes, Orm, }) => {
  const attrs = {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    mail: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
    token: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    tokenType: {
      type: DataTypes.ENUM([ 'default', 'google', ]),
      allowNull: false,
      defaultValue: 'default',
    },
    expireToken: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  }

  const opts = {}

  const pos = ({ Model, models, }) => {
    Model.hasMany(models.DSWorld)
  }

  return Orm.addModel({ attrs, opts, pos, })
}