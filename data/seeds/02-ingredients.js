
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: 'bread' },
    { ingredient_name: 'peanut butter' },
    { ingredient_name: 's. jelly' },
    { ingredient_name: 'eggs' },
    { ingredient_name: 'habanero cheddar cheese' },
    { ingredient_name: 'salt' },
    { ingredient_name: 'pepper' }
  ])
  
};
