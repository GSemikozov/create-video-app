import React from "react";

import styles from "./actor.module.scss";
import { ImageCard } from "../../components";

export const Actor = () => (
    <div className={styles.pageWrapper}>
        <div className={styles.cardsGrid}>
            <ImageCard img={process.env.PUBLIC_URL + "/assets/images/preview.png"} title="YoYo" />
            <ImageCard
                img={process.env.PUBLIC_URL + "/assets/images/preview.png"}
                title="YoYo"
                isActive={true}
            />
            <ImageCard img={process.env.PUBLIC_URL + "/assets/images/preview.png"} title="YoYo" />
        </div>
    </div>
);
