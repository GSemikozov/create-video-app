import React from "react";
import cx from "classnames";

import { Pause, Play } from "../../icons";

import styles from "./play-button.module.scss";

export const PlayButton = ({
    isActive,
    handleClick,
    className,
}: {
    isActive: boolean;
    handleClick: () => void;
    className?: string;
}) => (
    <button
        type="button"
        onClick={handleClick}
        className={cx(
            styles.button,
            {
                [styles.active]: isActive,
            },
            className,
        )}
    >
        {!isActive ? <Play /> : <Pause />}
    </button>
);
