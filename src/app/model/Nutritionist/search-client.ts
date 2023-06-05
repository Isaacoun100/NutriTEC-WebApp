// {
//   "client_name":"string"
// }
// {
//     "client_email":"string",
//     "nutritionist_id":"string"
// }
// {
//     "client_name":"string",
//     "email":"string"
// }

export interface SearchClientI {
    client_name: string | null;
}

export interface AssociateClientI {
    client_email: string | null;
    nutritionist_id: string | null;
}

export interface newClientI {
    client_name: string | null;
    email: string | null;
}