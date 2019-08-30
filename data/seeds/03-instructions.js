
exports.seed = function(knex, Promise) {
  return knex('instructions').insert([
    { instructions_number: 1, recipe_id: 1, instructions: 'get bread knife peanut butter and jelly' },
    { instructions_number: 2, recipe_id: 1, instructions: 'spread peanut butter on one slice of bread' },
    { instructions_number: 3, recipe_id: 1, instructions: 'spread jelly on other piece of bread' },
    { instructions_number: 4, recipe_id: 1, instructions: 'smash bread together, eat, and enjoy' },
    { instructions_number: 1, recipe_id: 2, instructions: 'crack eggs into hot skillet' },
    { instructions_number: 2, recipe_id: 2, instructions: 'add habanero cheese' },
    { instructions_number: 3, recipe_id: 2, instructions: 'scramble eggs' },
    { instructions_number: 4, recipe_id: 2, instructions: 'add salt and pepper' },
    { instructions_number: 5, recipe_id: 2, instructions: 'serve and enjoy' }
  ])
};
