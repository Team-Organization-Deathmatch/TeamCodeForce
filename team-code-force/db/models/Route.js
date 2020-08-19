module.exports = (sequelize, DataTypes) => sequelize.define('Route', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  location1: {
    type: DataTypes.STRING,
  },
  location2: {
    type: DataTypes.STRING,
  },
  location3: {
    type: DataTypes.STRING,
  },
  location4: {
    type: DataTypes.STRING,
  },
  location5: {
    type: DataTypes.STRING,
  },
  Date1: {
    type: DataTypes.DATEONLY,
  },
  Date2: {
    type: DataTypes.DATEONLY,
  },
  Date3: {
    type: DataTypes.DATEONLY,
  },
  Date4: {
    type: DataTypes.DATEONLY,
  },
  Date5: {
    type: DataTypes.DATEONLY,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});