"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Notes", [
      {
        id: 1,
        title: "Groceries",
        textbody: "1. Tomatoes, 2. Avocados, 3. Asparagus, 4. Parsley",
        user_id: "12",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Video-Games",
        textbody: "1. Darksouls 2. Skyrim 3. Fallout 4",
        user_id: "13",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
