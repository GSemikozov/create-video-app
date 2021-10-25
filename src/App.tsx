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
    Actor,
    Background,
    Alignment,
    Voice,
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
                <Route path="actor" element={<Actor />} />
                <Route path="voice" element={<Voice />} />
                <Route path="alignment" element={<Alignment />} />
                <Route path="background" element={<Background />} />
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
