'use strict';
const posts = require("../json/posts.json");
const comments = require("../json/comments.json");

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('Posts', posts);
    await queryInterface.bulkInsert('Comments', comments);
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('Comments');
    await queryInterface.bulkDelete('Posts');
  }
};
