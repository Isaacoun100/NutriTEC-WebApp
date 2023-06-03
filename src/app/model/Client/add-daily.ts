// {
//     "client_id":"string",
//     "date":"YYYY-MM-DD",
//     "consumption":[
//       {
//         "size":"double",
//         "product":"string",
//         "food_time":"string"
//       },
//       {
//         "size":"double",
//         "product":"string",
//         "food_time":"string"
//       }
//     ]
//   }

export interface AddDailyI {
    client_id: string;
    date: string;
    consumption: ConsumptionI[];
}

export interface ConsumptionI {
    size: string;
    product: string;
    food_time: string;
}