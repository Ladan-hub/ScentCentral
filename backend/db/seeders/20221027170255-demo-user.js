'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@new.io',
        username: 'Demo-new',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user13@user.io',
        username: 'FakeUser13',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user14@user.io',
        username: 'FakeUser14',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user15@user.io',
        username: 'FakeUser15',
        hashedPassword: bcrypt.hashSync('password4')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: [] }
    }, {});
  }
};

