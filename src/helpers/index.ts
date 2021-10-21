import { AccountPlanEnum } from "../types";

export const getAccountPlanName = (dayIndex: number) => {
    switch (dayIndex) {
        case 0:
            return AccountPlanEnum.free;
        case 1:
            return AccountPlanEnum.pro;
        case 2:
            return AccountPlanEnum.team;
        case 3:
            return AccountPlanEnum.agency;
        default:
            return "";
    }
};
