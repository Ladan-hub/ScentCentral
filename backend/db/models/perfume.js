'use strict';
module.exports = (sequelize, DataTypes) => {
  const Perfume = sequelize.define('Perfume', {
    name: DataTypes.STRING,
    numberAvailable: DataTypes.INTEGER,
    perfumeImgUrl: DataTypes.STRING,
    boutiqueId: DataTypes.INTEGER
  }, {});
  Perfume.associate = function(models) {
    // associations can be defined here
    Perfume.belongsTo(models.Boutique, {foreignKey: 'boutiqueId'})
  };
  return Perfume;
};
