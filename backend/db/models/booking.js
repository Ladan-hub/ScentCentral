'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    boutiqueId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.Boutique, {foreignKey:"boutiqueId"});
    Booking.belongsTo(models.User, {foreignKey:"userId"})
  };
  return Booking;
};
