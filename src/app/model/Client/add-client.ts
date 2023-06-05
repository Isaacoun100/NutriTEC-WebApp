// {
//     "name":"string",
//     "lastname1":"string",
//     "lastname2":"string",
//     "birth_date":"string",
//     "weight":"double",
//     "height":"double",
//     "email":"string",
//     "password":"string",
//     "country":"string",
//     "calorie_goal":"int"
//   }

export interface AddClientI {
    name: string | null;
    lastname1: string | null;
    lastname2: string | null;
    birth_date: string | null;
    weight: number | null;
    height: number | null;
    email: string | null;
    password: string | null;
    country: string | null;
    calorie_goal: number | null;
}