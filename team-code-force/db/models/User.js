module.exports = (sequelize, DataTypes) => sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  googleId: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
  },
  id_route: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Route',
      key: 'id',
    },
  },
  id_routeInvite: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Route',
      key: 'id',
    },
  },
}, {
  freezeTableName: true,
  timestamps: false,
});
