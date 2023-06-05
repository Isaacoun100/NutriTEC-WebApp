// {
//   "client_email":"string"
//   "date":"string"
// }
// {
//     "serving":"string",
//     "dish_name":"string"
// }
export interface GetDailyI {
    client_email: string;
    date: string;
}

export interface AddDailyI {
    serving: string;
    dish_name: string;
}
