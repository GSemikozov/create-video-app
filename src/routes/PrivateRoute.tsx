import React from "react";

import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useFakeAuth";

// @ts-ignore
// eslint-disable-next-line react/prop-types
export const PrivateOutlet = ({ children }) => {
    const { authed } = useAuth();

    return authed ? children : <Navigate to="/login" />;
};

// @ts-ignore
// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
    const { authed } = useAuth();
    return authed ? children : <Navigate to="/login" />;
};
