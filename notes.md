
### TABLE INFORMATION

Recipes:
    - id
    - recipe_name
    - ingredients
    - ingredient_id
    - ingredient_name
    # may have more than one ingredient
    # same ingredient can be used in multiple recipes
    when saving the ingredient for a recipe, be sure to get the amount of ingredient needed
    # step by step instructions for each recipe

Ingredients:
    - ingredient_id
    - ingredient_name

Instructions:
    - instruction_id
    - recipe_id

Rec_Ingredients:
    - id
    - recipe_id
    - ingredient_id
    