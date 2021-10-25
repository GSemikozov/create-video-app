import React, { memo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useFakeAuth";

import { ButtonTypeEnum } from "../../types";

import { Layout, Button, Input, FormGroup } from "../../components";

import styles from "./auth.module.scss";

/* temporarily duplication of Login page. TODO: create form template and reuse it */
export const Signup = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState("");
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

    const PasswordValidationHelperMessage = memo(({ password }: { password: string }) => {
        switch (true) {
            case password.length > 0 && password.length < 8:
                return <span className="text-danger">Could be stronger</span>;
            case password.length >= 8:
                return <span className="text-success">Strong</span>;
            case password.length === 0:
            default:
                return <span />;
        }
    });

    return (
        <Layout
            headerLeftSideContent={<h1>Create an account</h1>}
            headerHasBorder={false}
            className={styles.pageIllustration}
        >
            <div className={styles.formWrapper}>
                <form className={styles.loginForm}>
                    <FormGroup
                        inputId="name"
                        labelText={"Email address"}
                        className={styles.formGroup}
                    >
                        <Input
                            id="name"
                            name="name"
                            value={name}
                            handleChange={(event: any) => setName(event.target.value)}
                            placeholder="Full name"
                        />
                    </FormGroup>
                    <FormGroup
                        inputId="email"
                        labelText={"Email address"}
                        className={styles.formGroup}
                    >
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            handleChange={(event: any) => setEmail(event.target.value)}
                            placeholder="Enter your email"
                        />
                    </FormGroup>
                    <FormGroup
                        inputId="new-password"
                        labelText={"New Password"}
                        className={styles.formGroup}
                        // @ts-ignore
                        additionalLabelContent={
                            <PasswordValidationHelperMessage password={password} />
                        }
                    >
                        <Input
                            id="new-password"
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
                        Sign up
                    </Button>
                    <div className={styles.additionalPanel}>
                        <p>
                            Already user?{" "}
                            <Button
                                type={ButtonTypeEnum.link}
                                className="text-accent"
                                handleClick={() => navigate("/login")}
                            >
                                Login
                            </Button>
                        </p>
                    </div>
                </form>
            </div>
        </Layout>
    );
};
