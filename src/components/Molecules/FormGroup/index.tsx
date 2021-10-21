import React from "react";
import cx from "classnames";

import styles from "./form-group.module.scss";

// @ts-ignore
// eslint-disable-next-line react/prop-types
export const FormGroup = ({
    labelText,
    additionalLabelContent,
    helperText,
    children,
    className,
}: {
    labelText: string;
    additionalLabelContent?: any;
    helperText?: string;
    children: React.ReactNode;
    className?: string;
}) => (
    <div className={cx(styles.formGroup, className)}>
        <label className={styles.label}>
            <span className={styles.labelText}>
                {labelText}
                {additionalLabelContent && additionalLabelContent}
            </span>
            {children}
        </label>
        {helperText && <div className={styles.helperText}>{helperText}</div>}
    </div>
);
