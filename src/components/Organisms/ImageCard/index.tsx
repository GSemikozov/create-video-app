import React from "react";
import cx from "classnames";

import { Upload } from "../../icons";

import styles from "./image-card.module.scss";

export const ImageCard = ({
    img,
    title,
    isActive = false,
    isUpload = false,
}: {
    img?: any;
    title: string;
    isActive?: boolean;
    isUpload?: boolean;
}) => (
    <div
        className={cx(styles.card, {
            [styles.active]: isActive,
        })}
    >
        <div className={styles.cardHeader}>
            {!isUpload ? (
                <div className={styles.cardHeaderInner}>
                    <img src={img} className={styles.cardImg} alt="img" />
                </div>
            ) : (
                <div className={styles.cardHeaderUpload}>
                    <Upload />
                    <input type="file" />
                </div>
            )}
        </div>
        <div className={styles.cardBody}>
            <h5 className={styles.cardTitle}>{title}</h5>
        </div>
    </div>
);
