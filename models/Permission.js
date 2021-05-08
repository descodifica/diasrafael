module.exports = async ({ DataTypes, Orm, }) => {
  const attrs = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    resource: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    allow: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
    },
  }

  const opts = {}

  const pos = () => {
  }

  return Orm.addModel({ attrs, opts, pos, })
}