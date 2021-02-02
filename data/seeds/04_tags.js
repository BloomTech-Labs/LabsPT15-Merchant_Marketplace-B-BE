const { date } = require('faker');
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('tags').insert([
    { name: 'junk', created_at: date.past() },
    { name: 'clothes', created_at: date.past() },
    { name: 'poor quality', created_at: date.past() },
    { name: 'good quality', created_at: date.past() },
    { name: 'media', created_at: date.past() },
    { name: 'space', created_at: date.past() },
  ]);
};
