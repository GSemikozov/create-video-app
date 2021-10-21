import React from "react";
import cx from "classnames";

import { Link, useLocation } from "react-router-dom";

import styles from "./nav-link.module.scss";

export const NavLink = ({
    path,
    isSidebarNav = false,
    children,
}: {
    path: string;
    isSidebarNav?: boolean;
    children: React.ReactNode;
}) => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const preparedPath = path.charAt(0) === "/" ? path.substr(1) : path;
    const isActive = splitLocation.includes(preparedPath);

    return (
        <Link
            to={path}
            className={cx(styles.navLink, {
                [styles.sidebarNavLink]: isSidebarNav,
                [styles.active]: isActive,
            })}
        >
            {children}
        </Link>
    );
};
