const { date } = require('faker');
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('tags').insert([
    { tag_name: 'junk', created_at: date.past() },
    { tag_name: 'clothes', created_at: date.past() },
    { tag_name: 'poor quality', created_at: date.past() },
    { tag_name: 'good quality', created_at: date.past() },
    { tag_name: 'media', created_at: date.past() },
    { tag_name: 'space', created_at: date.past() },
  ]);
};
