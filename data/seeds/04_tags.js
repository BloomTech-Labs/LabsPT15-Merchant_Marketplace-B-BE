exports.seed = function (knex) {
  // Inserts seed entries
  return knex('tags').insert([
    { name: 'junk', created_at: 1613414161 },
    { name: 'clothes', created_at: 1613414161 },
    { name: 'poor quality', created_at: 1613414161 },
    { name: 'good quality', created_at: 1613414161 },
    { name: 'media', created_at: 1613414161 },
    { name: 'space', created_at: 1613414161 },
  ]);
};
