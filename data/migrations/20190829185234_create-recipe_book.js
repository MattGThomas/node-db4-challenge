
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128)
        .notNullable()
        .unique();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 128)
        .notNullable()
  })
  .createTable('instructions', tbl => {
      tbl.increments();
      tbl.integer('instructions_number')
        .unsigned()
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
    tbl.string('instructions')
  })
  .createTable('rec_ingred', tbl => {
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
    tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
    tbl.float('quantity')
    tbl.primary(['recipe_id', 'ingredient_id'])
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('rec_ingred')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
