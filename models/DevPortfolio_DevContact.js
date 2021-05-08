module.exports = async ({ DataTypes, Orm, }) => {
  const attrs = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM('hired', 'partnership'),
      primaryKey: true,
    },
  }

  const opts = {}

  const pos = () => {
  }

  return Orm.addModel({ attrs, opts, pos, })
}