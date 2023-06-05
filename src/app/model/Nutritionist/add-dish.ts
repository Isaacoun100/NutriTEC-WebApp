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
    size: number | null;
    product: string | null;
}

export interface DishI {
    dish_name: string | null;
    ingredients: (IngredientI | null)[];
}
