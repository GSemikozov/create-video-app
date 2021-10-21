import React from "react";

import styles from "./inner-nav.module.scss";

export const InnerNav = ({ children }: { children: React.ReactNode }) => (
    <nav className={styles.nav}>{children}</nav>
);
