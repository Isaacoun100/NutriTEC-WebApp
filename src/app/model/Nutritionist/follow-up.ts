// {
//   "client_email":"string"
//   "date":"string"
// }
// {
//     "serving":"string",
//     "dish_name":"string"
// }
// {
//     "serving":"string",
//     "dish_name":"string",
//     "food_time":"breakfast"
// }
export interface GetDailyI {
    client_email: string | null;
    date: string | null;
}

export interface AddDailyI {
    serving: string;
    dish_name: string;
}

export interface DailyFoodI {
    serving: string | null;
    dish_name: string | null;
    food_time: string | null;
}