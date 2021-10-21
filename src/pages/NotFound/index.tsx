import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // @ts-ignore
    const { from } = location.state || { from: { pathname: "/create-video/actor" } };

    useEffect(() => {
        setTimeout(() => {
            navigate(from);
        }, 1000);
    }, [from, navigate]);

    return (
        <div>
            <h1>404</h1>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
};
