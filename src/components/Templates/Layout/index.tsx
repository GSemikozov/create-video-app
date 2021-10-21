import React from "react";
import cx from "classnames";

import { Sidebar, Header } from "../../Organisms";

import styles from "./layout.module.scss";

export const Layout = ({
    headerLeftSideContent,
    headerRightSideContent,
    headerHasBorder,
    children,
    className,
}: {
    headerLeftSideContent?: React.ReactNode;
    headerRightSideContent?: React.ReactNode;
    headerHasBorder?: boolean;
    children?: React.ReactNode;
    className?: string;
}) => (
    <div className={cx(styles.layout, className)}>
        <Sidebar />
        <Header
            leftSideComponent={headerLeftSideContent}
            rightSideComponent={headerRightSideContent}
            hasBorder={headerHasBorder}
        />
        <main className={styles.main}>{children}</main>
    </div>
);
