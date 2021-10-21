import React from "react";
import { Outlet } from "react-router-dom";

import { CreateVideoModal, InnerNav, Layout, NavLink } from "../../components";

export const CreateVideo = () => (
    <Layout headerLeftSideContent={<CreateVideoModal />}>
        <InnerNav>
            <>
                <NavLink path="actor">Actor</NavLink>
                <NavLink path="voice">Voice</NavLink>
                <NavLink path="alignment">Alignment</NavLink>
                <NavLink path="background">Background</NavLink>
            </>
        </InnerNav>

        <Outlet />
    </Layout>
);
