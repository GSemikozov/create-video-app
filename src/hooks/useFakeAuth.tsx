import React, { useState, createContext, useContext } from "react";

export interface IAuth {
    authed: boolean;
    login: (cb: () => void) => void;
    logout: (cb: () => void) => void;
}

const AuthContext = createContext<Partial<IAuth>>({});

function useAuth() {
    const [authed, setAuthed] = useState(false);

    const login = (callback: () => void) => {
        setAuthed(true);
        callback();
    };

    const logout = (callback: () => void) => {
        setAuthed(false);
        callback();
    };

    return {
        authed,
        login,
        logout,
    };
}

export function AuthProvider({ children }: { children: any }) {
    const auth = useAuth();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default function AuthConsumer() {
    return useContext(AuthContext);
}
