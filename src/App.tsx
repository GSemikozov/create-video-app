import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { PrivateOutlet, PrivateRoute } from "./routes/PrivateRoute";

import {
    Settings,
    NotFound,
    Login,
    Signup,
    Plan,
    Billing,
    Profile,
    Videos,
    CreateVideo,
} from "./pages";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="create-video" replace={true} />} />
            <Route
                path="create-video"
                element={
                    <PrivateOutlet>
                        <CreateVideo />
                    </PrivateOutlet>
                }
            >
                <Route path="actor" element={<h1>Actor</h1>} />
                <Route path="voice" element={<h1>Voice</h1>} />
                <Route path="alignment" element={<h1>Alignment</h1>} />
                <Route path="background" element={<h1>Background</h1>} />
            </Route>
            <Route
                path="videos"
                element={
                    <PrivateRoute>
                        <Videos />
                    </PrivateRoute>
                }
            />
            <Route
                path="settings"
                element={
                    <PrivateOutlet>
                        <Settings />
                    </PrivateOutlet>
                }
            >
                <Route path="profile" element={<Profile />} />
                <Route path="plan" element={<Plan />} />
                <Route path="billing" element={<Billing />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
