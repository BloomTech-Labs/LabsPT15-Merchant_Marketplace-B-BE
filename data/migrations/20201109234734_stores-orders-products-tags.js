exports.up = function (knex) {
  return knex.schema
    .createTable('stores', (tb) => {
      tb.increments();
      tb.string('owner_id', 255)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.string('name', 255).notNullable();
      tb.text('description');
      tb.string('location', 3000);
      tb.string('phone_number');
      tb.string('branding_image');
      tb.string('operating_hours', 255);
      tb.date('created_at');
    })
    .createTable('orders', (tb) => {
      tb.increments();
      tb.integer('store_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('stores')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.string('buyer_id')
        .notNullable()
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.string('ship_to');
      tb.string('delivery_method').notNullable();
      tb.string('delivery_service');
      tb.integer('shipping_cost').defaultTo(0);
      tb.string('tracking_number');
      tb.string('status');
      tb.date('created_at');
    })
    .createTable('tags', (tb) => {
      tb.increments();
      tb.string('name', 255);
      tb.date('created_at');
    })
    .createTable('products', (tb) => {
      tb.increments();
      tb.integer('store_id')
        .notNullable()
        .references('id')
        .inTable('stores')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.string('name', 255);
      tb.text('description');
      tb.integer('price').notNullable().unsigned();
      tb.integer('stock_quantity').notNullable().unsigned().defaultTo(0);
      tb.specificType('images', 'text ARRAY');
      tb.date('created_at');
      tb.boolean('published').notNullable().defaultTo(false);
      tb.boolean('delivery').defaultTo(false);
      tb.boolean('pickup').defaultTo(false);
    })
    .createTable('orders_products', (tb) => {
      tb.integer('order_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('orders')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.integer('product_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.integer('quantity').unsigned().notNullable();
    })
    .createTable('products_tags', (tb) => {
      tb.integer('product_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.integer('tag_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tags')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('products_tags')
    .dropTableIfExists('orders_products')
    .dropTableIfExists('products')
    .dropTableIfExists('tags')
    .dropTableIfExists('orders')
    .dropTableIfExists('stores');
};
