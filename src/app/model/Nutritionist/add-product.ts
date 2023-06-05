// {
//     "name":"string"
//     "size":"int",
//     "calories":"int",
//     "fat":"float",
//     "sodium":"float",
//     "carbs":"float",
//     "protein":"float",
//     "calcium":"int",
//     "iron":"float",
//     "vitamins":[
//         "Vitamin A",
//         "Vitamin C",
//         "Vitamin B2"
//   ]}
  
export interface AddProductI {
    name: string | null;
    size: number | null;
    calories: number | null;
    fat: number | null;
    sodium: number | null;
    carbs: number | null;
    protein: number | null;
    calcium: number | null;
    iron: number | null;
    vitamins: (string | null)[];
  }