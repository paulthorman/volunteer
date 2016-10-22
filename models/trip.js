'use strict';
module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define('Trip', {
    depcity: DataTypes.STRING,
    destcity: DataTypes.STRING,
    depart: DataTypes.DATE,
    return: DataTypes.DATE,
    numvol: DataTypes.INTEGER
  }, {
    // so updatedAt will be updated_at
    underscored: true,
    // disable the modification of tablenames
    freezeTableName: true,
    // define the table's name
    tableName: 'trips',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Trip.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  })
  return Trip;
};