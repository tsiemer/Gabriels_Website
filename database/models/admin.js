'use strict';
module.exports = (sequelize, DataTypes) => {
  var Admin = sequelize.define('Admin', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    email: { 
      type: DataTypes.STRING,
      unique: true
    },
    password:{ 
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Admin.associate = function(models) {
    // associations can be defined here
    Admin.hasMany(models.Blogs, {
      foreignKey: 'AdminId',
      onDelete: 'CASCADE'
    });
    Admin.hasMany(models.Sections, {
      foreignKey: 'AdminId',
      onDelete: 'CASCADE'
    })
  };
  return Admin;
};