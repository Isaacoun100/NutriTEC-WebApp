// {
//   "nutritionist_id":"string"
// }

// {
//     "name":"string",
//     "lastname1":"string",
//     "lastname2":"string",
//     "email":"string"

// }

//This model works for both /get_nutritionist_plans and /get_nutritionist_clients 

export interface GetNutriClientsI {
    nutritionist_id: string;
}

export interface NutriClientsI {
    name: string;
    lastname1: string;
    lastname2: string;
    email: string;
}

export interface PlansI {
    plan_name: string | null;
}
