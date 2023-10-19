'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports',[
    {
      name:'Kempegowda International Airport Bengaluru',
      cityId:7,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'Hindustan Aeronautics Limited Airport',
      cityId:7,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'HAL Airport',
      cityId:7,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'Airport Bangalore',
      cityId:7,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'Mysuru Airport',
      cityId:7,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'Mangaluru International Airport',
      cityId:7,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'Chhatrapati Shivaji Maharaj International Airport',
      cityId:4,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'Mumbai Airport',
      cityId:4,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'Juhu Airport',
      cityId:4,
      createdAt:new Date(),
      updatedAt:new Date()

    },
  ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    
  }
};
