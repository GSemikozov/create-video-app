import React, { useEffect } from "react";

import useAuth from "../../hooks/useFakeAuth";

import { Layout } from "../../components";

export const Videos = () => {
    const { authed } = useAuth();

    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log("dashbboard authed: ", authed);
    }, [authed]);

    return (
        <Layout headerLeftSideContent={"Saying Hi to my customers"}>
            <h1>Videos</h1>
        </Layout>
    );
};
