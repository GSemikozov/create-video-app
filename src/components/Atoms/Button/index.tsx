import React from "react";
import cx from "classnames";

import { ButtonSizeEnum, ButtonType, ButtonTypeEnum } from "../../../types";

import styles from "./button.module.scss";

export const Button = ({
    type,
    size = ButtonSizeEnum.md,
    isBlock = false,
    isDisabled = false,
    isSubmit = false,
    handleClick,
    children,
    className,
}: ButtonType) => (
    <button
        type={isSubmit ? "submit" : "button"}
        className={cx(
            styles.button,
            {
                [styles.primary]: type === ButtonTypeEnum.primary,
                [styles.secondary]: type === ButtonTypeEnum.secondary,
                [styles.alternate]: type === ButtonTypeEnum.alternate,
                [styles.link]: type === ButtonTypeEnum.link,
                [styles.large]: size === ButtonSizeEnum.lg,
                [styles.block]: isBlock,
                [styles.disabled]: isDisabled,
            },
            className,
        )}
        onClick={handleClick}
    >
        {children}
    </button>
);
