module.exports = async ({ DataTypes, Orm, }) => {
  const attrs = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
  }

  const opts = {}

  const pos = () => {
  }

  return Orm.addModel({ attrs, opts, pos, })
}