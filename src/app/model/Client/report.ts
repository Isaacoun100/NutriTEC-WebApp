// {
//     "client_id":"string",
//     "start_date":"string",
//     "end_date":"string"
// }

// {
//     "date":"string",
//     "weight":"double",
//     "waist":"double",
//     "neck":"double",
//     "hip":"double",
//     "muscle_percentage":"string",
//     "fat_percentage":"string"
// }

// This model will be used for both /generate _report and /send _report

export interface GenerateReportI {
    client_id: string | null;
    start_date: string | null;
    end_date: string | null;
}

export interface ProgressReportI {
    date: string | null;
    weight: number | null;
    waist: number | null;
    neck: number | null;
    hip: number | null;
    muscle_percentage: string | null;
    fat_percentage: string | null;
}