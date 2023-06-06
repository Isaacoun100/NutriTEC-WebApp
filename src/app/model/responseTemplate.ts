import { DishItemI, PaymentI, UnnaprovedProductsI } from "./Admin/approve-product";
import { CommentI } from "./Client/load-comments";
import { ProgressReportI } from "./Client/report";
import { DailyFoodI } from "./Nutritionist/follow-up";
import { NutriClientsI, PlansI } from "./Nutritionist/get-nutri";
import { newClientI } from "./Nutritionist/search-client";

export interface ResponseTemplateI {
    status: string;
    result: JSON;
  }

// Response List

export interface ResponseTemplateListClientI {
    status: string;
    result: newClientI[];
}

export interface ResponseTemplateListPatientI {
    status: string;
    result: NutriClientsI[];
}

export interface ResponseTemplateListPlanI {
    status: string;
    result: PlansI[];
}

export interface ResponseTemplateListReportI {
    status: string;
    result: PaymentI[];
}

export interface ResponseTemplateListUnnaprovedI {
    status: string;
    result: UnnaprovedProductsI[];
}

export interface ResponseTemplateListProductI {
    status: string;
    result: DishItemI[];
}

export interface ResponseTemplateListDailyI {
    status: string;
    result: DailyFoodI[];
}

export interface ResponseTemplateListProgressI {
    status: string;
    result: ProgressReportI[];
}

