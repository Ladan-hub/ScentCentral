'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boutique = sequelize.define('Boutique', {
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    priceRange: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Boutique.associate = function(models) {
    // associations can be defined here
    Boutique.belongsTo(models.User, {foreignKey: 'userId'})
    Boutique.hasMany(models.Review, {foreignKey: 'boutiqueId', onDelete: "cascade", hooks:true})
    Boutique.hasMany(models.Perfume, {foreignKey: 'boutiqueId', onDelete: "cascade", hooks:true})
    Boutique.hasMany(models.Booking, {foreignKey: 'boutiqueId', onDelete: "cascade", hooks:true })
  };
  return Boutique;
};
