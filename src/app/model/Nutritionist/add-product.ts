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
    name: string;
    size: number;
    calories: number;
    fat: number;
    sodium: number;
    carbs: number;
    protein: number;
    calcium: number;
    iron: number;
    vitamins: string[];
  }