import React, { useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Layout, Button, InnerNav, NavLink } from "../../components";
import useAuth from "../../hooks/useFakeAuth";
import { ButtonTypeEnum } from "../../types";

const LogoutButton = () => {
    const { logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = useCallback(() => {
        logout && logout(() => navigate("/login", { state: { from: { pathname: "/settings" } } }));
    }, [logout, navigate]);

    return (
        <Button className="text-danger" type={ButtonTypeEnum.link} handleClick={handleLogout}>
            Logout
        </Button>
    );
};

export const Settings = () => (
    <Layout headerLeftSideContent={<h1>Settings</h1>} headerRightSideContent={<LogoutButton />}>
        <InnerNav>
            <>
                <NavLink path="profile">My Profile</NavLink>
                <NavLink path="plan">My Plan</NavLink>
                <NavLink path="billing">Billing</NavLink>
            </>
        </InnerNav>

        <Outlet />
    </Layout>
);
