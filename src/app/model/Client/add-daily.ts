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
    client_id: string | null;
    date: string | null;
    consumption: (ConsumptionI|null)[];
}

export interface ConsumptionI {
    size: number | null;
    product: string | null;
    food_time: string | null;
}