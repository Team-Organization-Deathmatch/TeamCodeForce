module.exports = (sequelize, DataTypes) => sequelize.define('Park', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});
