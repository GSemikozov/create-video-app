import React, { useState } from "react";

import { Avatar, Button, FormGroup, Input } from "../../components";

import { ButtonTypeEnum } from "../../types";

import styles from "./profile.module.scss";

export const Profile = () => {
    const [firstname, setFirstname] = useState("Balamurali");
    const [lastname, setLastname] = useState("A");
    const [email, setEmail] = useState("13bala90@gmail.com");

    return (
        <div className={styles.pageWrapper}>
            <Avatar />
            <form className={styles.form}>
                <div className={styles.formGrid}>
                    <FormGroup inputId="firstname" labelText="First Name">
                        <Input
                            id="firstname"
                            name="firstname"
                            value={firstname}
                            handleChange={(e: any) => setFirstname(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup inputId="lastname" labelText="Last Name">
                        <Input
                            id="lastname"
                            name="lastname"
                            value={lastname}
                            handleChange={(e: any) => setLastname(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup inputId="email" labelText="Email">
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            handleChange={(e: any) => setEmail(e.target.value)}
                        />
                    </FormGroup>
                </div>
                <Button
                    type={ButtonTypeEnum.primary}
                    handleClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("save profile changes");
                    }}
                    className={styles.formBtn}
                >
                    Save Changes
                </Button>
            </form>
        </div>
    );
};
