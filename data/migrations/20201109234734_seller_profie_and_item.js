exports.up = function (knex) {
  return knex.schema
    .createTable('stores', (tb) => {
      tb.string('id', 255).unique().notNullable().primary().increments();
      tb.integer('owner_id', 255)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.string('name', 255).notNullable();
      tb.text('description');
      tb.string('location', 255);
      tb.integer('phone_number', 15);
      tb.string('branding_image');
      tb.string('operating_hours', 255);
      tb.date('created_at');
    })
    .createTable('tag', (tb) => {
      tb.increments();
      tb.string('tag_name', 255);
    })
    .createTable('item', (tb) => {
      tb.increments();
      tb.string('item_name', 255);
      tb.text('description');
      tb.integer('quantity_available').notNullable().unsigned().defaultTo(0);
      tb.integer('price_in_cents').notNullable().unsigned();
      tb.boolean('published').notNullable().defaultTo(false);
      tb.string('seller_profile_id')
        .notNullable()
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('photo', (tb) => {
      tb.increments();
      tb.string('url', 255);
      tb.integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('item')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('tag_item', (tb) => {
      tb.integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('item')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.integer('tag_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tag')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('tag_item')
    .dropTableIfExists('photo')
    .dropTableIfExists('item')
    .dropTableIfExists('tag')
    .dropTableIfExists('stores');
};
