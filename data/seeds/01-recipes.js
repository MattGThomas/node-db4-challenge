
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    { recipe_name: 'PBJ' },
    { recipe_name: 'eggs' }
  ])
};
