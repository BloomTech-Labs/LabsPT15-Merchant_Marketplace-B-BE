exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('first_name');
      table.string('last_name');
      table.string('email').unique();
      table.string('location');
      table.string('avatar_url');
      table.string('bio');
      table.timestamps(true, true);
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('profiles');
};
