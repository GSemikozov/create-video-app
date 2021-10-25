import React from "react";

import { Button, Tag } from "../../Atoms";
import { ButtonTypeEnum } from "../../../types";

import { More } from "../../icons";

import styles from "./saved-videos-card.module.scss";

import img from "./assets/preview.png";

export const SavedVideosCard = () => (
    <div className={styles.card}>
        <div className={styles.cardHeader}>
            <div className={styles.cardHeaderInner}>
                <img src={img} className={styles.cardImg} alt="img" />
                <Button
                    type={ButtonTypeEnum.link}
                    className={styles.cardHeaderButton}
                    handleClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("more clicked");
                    }}
                >
                    <More />
                </Button>
            </div>
        </div>
        <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>Saying Hi to users!</h3>
            <div className={styles.tagsMenu}>
                <Tag text="Email" size="sm" />
                <Tag text="Marketing" size="sm" />
                <Tag text="Greeting" size="sm" />
            </div>
        </div>
    </div>
);
