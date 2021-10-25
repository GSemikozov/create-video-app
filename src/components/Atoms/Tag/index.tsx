import React from "react";
import cx from "classnames";

import styles from "./tag.module.scss";

export const Tag = ({ text, size = "md" }: { text: string; size?: "md" | "sm" }) => (
    <div
        className={cx(styles.tag, {
            [styles.small]: size === "sm",
        })}
    >
        {text}
    </div>
);
