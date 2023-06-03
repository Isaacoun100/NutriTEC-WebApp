// {
//     "plan_name":"string
//     "plan":[
//        {
//         "size":"double",
//         "product": "string"
//         "meal_time":"string"
//         },
//         {
//         "size":"double",
//         "product":"string"
//         "meal_time":"string"
//         }
//     ]
//   }

export interface PlanI {
    size: number;
    product: string;
    meal_time: string;
}

export interface GetDailyI{
    plan_name: string;
    plan: PlanI[];
}