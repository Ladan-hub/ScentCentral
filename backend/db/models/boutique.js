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
    Boutique.hasMany(models.Review, {foreignKey: 'boutiqueId'})
  };
  return Boutique;
};
