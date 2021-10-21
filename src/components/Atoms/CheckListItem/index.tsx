import React from "react";
import cx from "classnames";

import { Check, Times } from "../../icons";

import { AccountPlanListItemType } from "../../../types";

import styles from "./check-list-item.module.scss";

export const CheckListItem = ({
    item,
    className,
}: {
    item: AccountPlanListItemType;
    className?: string;
}) => (
    <li className={cx(styles.listItem, className)}>
        <span className={styles.icon}>{item.included ? <Check /> : <Times />}</span>
        {item.text}
    </li>
);
