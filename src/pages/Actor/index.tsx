import React from "react";

import styles from "./actor.module.scss";
import { ImageCard } from "../../components";

import img from "./assets/preview.png";

export const Actor = () => (
    <div className={styles.pageWrapper}>
        <div className={styles.cardsGrid}>
            <ImageCard img={img} title="YoYo" />
            <ImageCard img={img} title="YoYo" isActive={true} />
            <ImageCard img={img} title="YoYo" />
        </div>
    </div>
);
