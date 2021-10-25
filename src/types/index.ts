import React from "react";

export enum ButtonTypeEnum {
    primary = "primary",
    secondary = "secondary",
    alternate = "alternate",
    link = "link",
}

export enum ButtonSizeEnum {
    md = "middle",
    lg = "large",
}

export type ButtonType = {
    type: ButtonTypeEnum;
    isBlock?: boolean;
    isDisabled?: boolean;
    isSubmit?: boolean;
    size?: ButtonSizeEnum;
    handleClick: () => void;
    children: React.ReactNode;
    className?: string;
};

export enum AccountPlanEnum {
    free = "Free",
    pro = "Pro",
    team = "Team",
    agency = "Agency",
}

export type AccountPlanListItemType = {
    included: boolean;
    text: string;
};

export type AccountPlanCardType = {
    type: AccountPlanEnum;
    title: string;
    price: string;
    descList: AccountPlanListItemType[];
    isCurrent?: boolean;
};

export enum AlignmentEnum {
    left = "Left",
    center = "Center",
    right = "Right",
}
