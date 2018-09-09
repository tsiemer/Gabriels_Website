'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Blogs', 'blogType', {
      type: Sequelize.ENUM('Food', 'Current-Thoughts', 'About-Me', 'My-System'),
      allowNull: false
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Blogs');
  }
};