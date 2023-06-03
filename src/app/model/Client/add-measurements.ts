// {
//     "client_id":"string",
//     "date":"YYYY-MM-DD",
//     "weight":"double",
//     "waist":"double",
//     "neck":"double",
//     "hip":"double",
//     "muscle_percentage":"string",
//     "fat_percentage":"string"
//   }

export interface AddMeasurementsI {
    client_id: string;
    date: string;
    weight: string;
    waist: string;
    neck: string;
    hip: string;
    muscle_percentage: string;
    fat_percentage: string;
}