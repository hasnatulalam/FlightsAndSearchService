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
    await queryInterface.bulkInsert('Airplanes',[
      {
        modelName:'Airbus A330',
        capacity:200,
        createdAt:new Date(),
        updatedAt:new Date()
  
      },
      {
        modelName:'Boeing 747',
        capacity:200,
        createdAt:new Date(),
        updatedAt:new Date()
  
      },
      {
        modelName:'Boeing 737',
        capacity:200,
        createdAt:new Date(),
        updatedAt:new Date()
  
      },
      {
        modelName:'Airbus A332',
        capacity:200,
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



