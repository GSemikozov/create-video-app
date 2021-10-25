import React, { memo } from "react";
import cx from "classnames";

import { Button, CheckListItem } from "../../Atoms";

import { AccountPlanCardType, ButtonSizeEnum, ButtonTypeEnum } from "../../../types";

import styles from "./account-plan-card.module.scss";

export const AccountPlanCard = memo(
    ({ title, price, descList, isCurrent = false }: AccountPlanCardType) => {
        const handleUpdatePlan = () => {
            //
        };

        return (
            <div
                className={cx(styles.card, {
                    [styles.current]: isCurrent,
                })}
            >
                <h3 className={styles.title}>{title}</h3>
                <ul className={styles.list}>
                    {descList.map((item, idx) => (
                        <CheckListItem key={idx} item={item} className={styles.listItem} />
                    ))}
                </ul>
                <div className={styles.price}>
                    <span className={styles.currency}>$</span>
                    {price}
                </div>
                {!isCurrent ? (
                    <Button
                        type={ButtonTypeEnum.alternate}
                        size={ButtonSizeEnum.lg}
                        isBlock={true}
                        handleClick={handleUpdatePlan}
                        className={styles.button}
                    >
                        Update
                    </Button>
                ) : (
                    <div className={styles.label}>Current Plan</div>
                )}
            </div>
        );
    },
);
