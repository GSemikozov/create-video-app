import React from "react";
import cx from "classnames";

import styles from "./form-group.module.scss";

// @ts-ignore
// eslint-disable-next-line react/prop-types
export const FormGroup = ({
    labelText,
    inputId,
    additionalLabelContent,
    helperText,
    children,
    className,
}: {
    labelText: string;
    inputId: string;
    additionalLabelContent?: any;
    helperText?: string;
    children: React.ReactNode;
    className?: string;
}) => (
    <div className={cx(styles.formGroup, className)}>
        <div className={styles.formGroupTop}>
            <label htmlFor={inputId} className={styles.label}>
                <span className={styles.labelText}>{labelText}</span>
            </label>
            {additionalLabelContent && additionalLabelContent}
        </div>
        {children}
        {helperText && <div className={styles.helperText}>{helperText}</div>}
    </div>
);
