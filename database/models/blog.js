'use strict';
module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID
    },
    AdminId: {
      type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Admin',
          key: 'id'
        }
    },
    SectionId: {
      type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Section',
          key: 'id'
        }
    },
    title: {
      type: DataTypes.STRING
    },
    subtitle: { 
      type: DataTypes.STRING
    },
    imageUrl: {
      type: DataTypes.STRING
    },
    content: { 
      type: DataTypes.TEXT
    }
  }, {});
  Blog.associate = function(models) {
    // associations can be defined here
    Blog.blongsTo(models.Section,{
      foreignKey: 'SectionId',
      onDelete: 'CASCADE'
    });

    Blog.belongsTo(models.Admin, {
      foreignKey: 'AdminId',
      onDelete: 'CASCADE'
    })
  };
  return Blog;
};