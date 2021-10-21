import React from "react";

import { AccountPlanCard } from "../../components";

import { plansData } from "../../data";

import styles from "./plan.module.scss";

export const Plan = () => (
    <div className={styles.pageWrapper}>
        {plansData.map((plan) => (
            <AccountPlanCard
                key={plan.type}
                type={plan.type}
                title={plan.title}
                price={plan.price}
                descList={plan.descList}
                isCurrent={plan.current}
            />
        ))}
    </div>
);
