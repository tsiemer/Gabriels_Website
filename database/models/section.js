'use strict';
module.exports = (sequelize, DataTypes) => {
  var Section = sequelize.define('Section', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    AdminId: {
      type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Admin',
          key: 'id'
        }
    },
    title: { 
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING
    }
  }, {});
  Section.associate = function(models) {
    // associations can be defined here
    Section.hasMany(models.Blogs, {
      foreignKey: 'SectionId',
      onDelete: 'CASCADE'
    });
    Section.belongsTo(models.Admin, {
      foreignKey: 'AdminId',
      onDelete: 'CASCADE'
    })
  };
  return Section;
};