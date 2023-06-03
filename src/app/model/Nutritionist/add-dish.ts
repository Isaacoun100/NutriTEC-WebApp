// {
//     dish_name: omelet
//     ingredients:[
//          {
//              size:100
//              product: "Apple"
//          },
//          {
//              size:50
//              product: "Sugar"
//          }
//       ]
//  }

export interface IngredientI {
    size: number;
    product: string;
}

export interface DishI {
    dish_name: string;
    ingredients: IngredientI[];
}