import React from "react";
import cx from "classnames";

import styles from "./custom-radio.module.scss";

export const CustomRadio = ({
    value,
    name,
    label,
    isActive,
}: {
    value: string;
    name: string;
    label: string;
    isActive: boolean;
}) => (
    <div
        className={cx(styles.customRadio, {
            [styles.active]: isActive,
        })}
    >
        <label className={styles.customRadioLabel}>
            {label}
            <input
                type="radio"
                value={value}
                name={name}
                checked={isActive}
                className={styles.customRadioInput}
            />
        </label>
    </div>
);
