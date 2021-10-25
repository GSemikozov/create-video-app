import React from "react";
import { Link } from "react-router-dom";

import useAuth from "../../../hooks/useFakeAuth";

import { Logo, NavLink, UserPlaceholderIcon } from "../../Atoms";
import { IconVideo, Browse } from "../../icons";

import styles from "./sidebar.module.scss";

export const Sidebar = () => {
    const { authed } = useAuth();

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <Logo />
            </div>
            <div className={styles.sidebarContent}>
                {authed && (
                    <>
                        <nav className={styles.sidebarNav}>
                            <NavLink path="/create-video" isSidebarNav={true}>
                                <IconVideo />
                            </NavLink>
                            <NavLink path="/videos" isSidebarNav={true}>
                                <Browse />
                            </NavLink>
                        </nav>
                        <Link to="/settings/profile">
                            <UserPlaceholderIcon />
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};
