// {
//     "id":"string",
//     "name":"string",
//     "lastname_1":"string",
//     "lastname_2":"string",
//     "email":"string",
//     "password":"string",
//     "nutritionist_id":"string",
//     "birth_date":"string",
//     "weight":"float",
//     "height":"float",
//     "photo":"string",
//     "credit_card":"string",
//     "payment_type":"string"
//   }

export interface CreateNutriI {
    id: string;
    name: string;
    lastname_1: string;
    lastname_2: string;
    email: string;
    password: string;
    nutritionist_id: string;
    birth_date: string;
    weight: number;
    height: number;
    photo: string;
    credit_card: string;
    payment_type: string;
}