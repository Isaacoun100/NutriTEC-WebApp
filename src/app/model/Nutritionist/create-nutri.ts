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
//     "address":"string",
//     "height":"float",
//     "photo":"string",
//     "credit_card":"string",
//     "payment_type":"string"
//   }

export interface CreateNutriI {
    id: string | null;
    name: string | null;
    lastname_1: string | null;
    lastname_2: string | null;
    email: string | null;
    password: string | null;
    birth_date: string | null;
    address: string | null;
    weight: number | null;
    height: number | null;
    photo: string | null;
    credit_card: string | null;
    payment_type: string | null;
}