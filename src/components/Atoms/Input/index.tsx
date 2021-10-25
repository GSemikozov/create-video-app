import React from "react";

import styles from "./input.module.scss";

export const Input = ({
    type = "text",
    placeholder,
    name,
    value,
    handleChange,
    id,
    disabled = false,
}: {
    type?: string;
    placeholder?: string;
    name: string;
    value: string;
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
    id?: string;
    disabled?: boolean;
}) => (
    <input
        id={id}
        type={type}
        className={styles.input}
        value={value}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
    />
);
