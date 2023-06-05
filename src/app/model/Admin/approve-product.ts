// {
//   "product_name":"string"
// }
// {
//     "billing_type":"string",
//     "nutri_email":"string",
//     "nutri_fullname":"string",
//     "credit_card":"string",
//     "total":"double",
//     "discount":"string",
//     "payment":"double"
// }
// {
//     "barcode":"int",
//     "name":"string",
//     "size":"double",
//     "calcium":"double",
//     "sodium":"double",
//     "carbs":"double",
//     "fat":"double",
//     "calories":"double",
//     "iron":"double",
//     "protein":"double"
// }
// {
//     "product_name":"string",
//     "barcode":"int"
// }
export interface ProductI {
    product_name: string | null;
}

export interface NewProductI {
    product: string | null;
}

export interface PaymentI {
    billing_type: string | null;
    nutri_email: string | null;
    nutri_fullname: string | null;
    credit_card: string | null;
    total: number | null;
    discount: string | null;
    payment: number | null;
}

export interface UnnaprovedProductsI {
    barcode: number | null;
    name: string | null;
    size: number | null;
    calcium: number | null;
    sodium: number | null;
    carbs: number | null;
    fat: number | null;
    calories: number | null;
    iron: number | null;
    protein: number | null;
}

export interface DishItemI {
    product_name: string | null;
    barcode: number | null;
}
