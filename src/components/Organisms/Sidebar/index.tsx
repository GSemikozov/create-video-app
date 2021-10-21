import React from "react";
import { Link } from "react-router-dom";

import useAuth from "../../../hooks/useFakeAuth";

import { Logo, NavLink, UserPlaceholderIcon } from "../../Atoms";
import { IconVideo, IconPlay } from "../../icons";

import styles from "./sidebar.module.scss";

export const Sidebar = () => {
    const { authed } = useAuth();

    return (
        <aside className={styles.sidebar}>
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
                                <IconPlay />
                            </NavLink>
                        </nav>
                        <Link to="/settings/profile">
                            <UserPlaceholderIcon />
                        </Link>
                    </>
                )}
            </div>
        </aside>
    );
};