module.exports = (sequelize, DataTypes) => sequelize.define('Route', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  //make it long/lat for each location & make location park
  park1: {
    type: DataTypes.STRING,
  },
  lat1: {
    type:DataTypes.DECIMAL
    //double check number type for sequelize
  },
  lon1: {
    type:DataTypes.DECIMAL
    //double check number type for sequelize
  },
  park2: {
    type: DataTypes.STRING,
  },
  lat2: {
    type:DataTypes.DECIMAL
  },
  lon2: {
    type:DataTypes.DECIMAL
  },
  park3: {
    type: DataTypes.STRING,
  },
  lat3: {
    type:DataTypes.DECIMAL
  },
  lon3: {
    type:DataTypes.DECIMAL
  },
  park4: {
    type: DataTypes.STRING,
  },
  lat4: {
    type:DataTypes.DECIMAL
  },
  lon4: {
    type:DataTypes.DECIMAL
  },
  park5: {
    type: DataTypes.STRING,
  },
  lat5: {
    type:DataTypes.DECIMAL
  },
  lon5: {
    type:DataTypes.DECIMAL
  },
  dateStart1: {
    type: DataTypes.DATEONLY,
  },
  dateEnd1: {
    type: DataTypes.DATEONLY,
  },
  dateStart2: {
    type: DataTypes.DATEONLY,
  },
  dateEnd2: {
    type: DataTypes.DATEONLY,
  },
  dateStart3: {
    type: DataTypes.DATEONLY,
  },
  dateEnd3: {
    type: DataTypes.DATEONLY,
  },
  dateStart4: {
    type: DataTypes.DATEONLY,
  },
  dateEnd4: {
    type: DataTypes.DATEONLY,
  },
  dateStart5: {
    type: DataTypes.DATEONLY,
  },
  dateEnd5: {
    type: DataTypes.DATEONLY,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});