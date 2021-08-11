const { every } = require("lodash");

{
/*

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 

// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

recipe:  { flour: 500, sugar: 200, eggs: 1 }
availableIngredients:  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }

recipe:  { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }
availableIngredients:  { sugar: 500, flour: 2000, milk: 2000 }


*/
}

// let recipe = { flour: 500, sugar: 200, eggs: 1 }
// let availableIngredients = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }

// let recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
// let availableIngredients = {sugar: 500, flour: 2000, milk: 2000};

// let recipe
// let availableIngredients = {sugar: 500, flour: 2000, milk: 2000};

let recipe = {"cream":200,"flour":300,"sugar":150,"milk":100,"oil":100}
let availableIngredients = {"sugar":1700,"flour":20000,"milk":20000,"oil":30000,"cream":5000} // - Expected: 11, instead got: 0

// let recipe = {"cream":1,"flour":3,"sugar":1,"milk":1,"oil":1,"eggs":1}
// let availableIngredients = {"sugar":1,"eggs":1,"flour":3,"cream":1,"oil":1,"milk":1} // - Expected: 1, instead got: 0


function cakes(recipe, availableIngredients) {
        
    let temp = []
    let recipeSize = Object.keys(recipe).length
    let recipeItems = Object.keys(recipe)
    let availableIngredientsSize = Object.keys(availableIngredients).length
    let availableIngredientsItems = Object.keys(availableIngredients)
    
    if (recipeItems.every(item => {return availableIngredientsItems.includes(item)})) {
        for (let i = 0; i < recipeSize; i++) {
            for (let j = 0; j < availableIngredientsSize; j++) {
                if (!recipeItems) {
                    return 0
                } else if (Object.keys(recipe)[i] === Object.keys(availableIngredients)[j]) {
                    temp.push(Math.floor(Object.values(availableIngredients)[j]/Object.values(recipe)[i]))
                    temp.sort((a,b) => a-b)
                }
            }
        }
        return temp[0]
    } else {        
        return 0
    }
}

cakes(recipe, availableIngredients)