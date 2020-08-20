module.exports = (sequelize, DataTypes) => sequelize.define('Route', {
  id: {
    type: DataTypes.INTEGER,
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
  //start and end date
  DateStart1: {
    type: DataTypes.DATEONLY,
  },
  DateEnd1: {
    type: DataTypes.DATEONLY,
  },
  DateStart2: {
    type: DataTypes.DATEONLY,
  },
  DateEnd2: {
    type: DataTypes.DATEONLY,
  },
  DateStart3: {
    type: DataTypes.DATEONLY,
  },
  DateEnd3: {
    type: DataTypes.DATEONLY,
  },
  DateStart4: {
    type: DataTypes.DATEONLY,
  },
  DateEnd4: {
    type: DataTypes.DATEONLY,
  },
  DateStart5: {
    type: DataTypes.DATEONLY,
  },
  DateEnd5: {
    type: DataTypes.DATEONLY,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});