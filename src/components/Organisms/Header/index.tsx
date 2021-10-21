import React from "react";
import cx from "classnames";

import styles from "./header.module.scss";

export const Header = ({
    leftSideComponent,
    rightSideComponent,
    hasBorder = true,
}: {
    leftSideComponent?: React.ReactNode;
    rightSideComponent?: React.ReactNode;
    hasBorder?: boolean;
}) => (
    <header
        className={cx(styles.header, {
            [styles.hasBorder]: hasBorder,
        })}
    >
        <div>{leftSideComponent && leftSideComponent}</div>
        <div>{rightSideComponent && rightSideComponent}</div>
    </header>
);
