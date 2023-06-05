// {
//     "plan_name":"string
//     "nutritionist_id":"string”,
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
//}

export interface PlanI {
    size: number | null;
    product: string | null;
    meal_time: string | null;
}

export interface GetDailyI{
    plan_name: string | null;
    nutritionist_id: string | null;
    plan: (PlanI | null)[];
}