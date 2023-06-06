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
    client_id: string | null;
    date: string | null;
    weight: number | null;
    waist: number | null;
    neck: number | null;
    hip: number| null;
    muscle_percentage: string | null;
    fat_percentage: string | null;
}