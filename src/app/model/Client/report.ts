// {
//     "client_id":"string",
//     "start_date":"string",
//     "end_date":"string"
// }

// This model will be used for both /generate _report and /send _report

export interface GenerateReportI {
    client_id: string;
    start_date: string;
    end_date: string;
}