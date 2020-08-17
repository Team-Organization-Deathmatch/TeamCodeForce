module.exports = (sequelize, DataTypes) => sequelize.define('UserParkHistory', {
  id_user: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'id',
    },
  },
  id_park: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Park',
      key: 'id',
    },
  },
  name: {
    type: DataTypes.STRING,
  },
  url: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});
