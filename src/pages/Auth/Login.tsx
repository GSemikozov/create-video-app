import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useFakeAuth";

import { ButtonTypeEnum } from "../../types";

import { Layout, Button, Input, FormGroup } from "../../components";

import styles from "./auth.module.scss";

export const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // @ts-ignore
    const { from } = location.state || { from: { pathname: "/create-video/actor" } };

    const handleLogin = () => {
        login &&
            login(() => {
                navigate(from);
            });
    };

    return (
        <Layout
            headerLeftSideContent={<h1>Sign in</h1>}
            headerHasBorder={false}
            className={styles.pageIllustration}
        >
            <div className={styles.formWrapper}>
                <form className={styles.loginForm}>
                    <FormGroup labelText={"Email address"} className={styles.formGroup}>
                        <Input
                            type="email"
                            name="email"
                            value={email}
                            handleChange={(event: any) => setEmail(event.target.value)}
                            placeholder="Enter your email"
                        />
                    </FormGroup>
                    <FormGroup
                        labelText={"Password"}
                        className={styles.formGroup}
                        additionalLabelContent={
                            <Button
                                type={ButtonTypeEnum.link}
                                className="text-accent"
                                handleClick={() => {
                                    // eslint-disable-next-line no-console
                                    console.log("---");
                                }}
                            >
                                Forgot?
                            </Button>
                        }
                    >
                        <Input
                            type="password"
                            name="password"
                            value={password}
                            handleChange={(event: any) => setPassword(event.target.value)}
                            placeholder="Enter your password"
                        />
                    </FormGroup>
                    <Button
                        className={styles.submitBtn}
                        type={ButtonTypeEnum.primary}
                        handleClick={handleLogin}
                    >
                        Log in
                    </Button>
                    <div className={styles.additionalPanel}>
                        <p>
                            New here?{" "}
                            <Button
                                type={ButtonTypeEnum.link}
                                className="text-accent"
                                handleClick={() => navigate("/signup")}
                            >
                                Signup
                            </Button>
                        </p>
                    </div>
                </form>
            </div>
        </Layout>
    );
};
