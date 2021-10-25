import React from "react";

import { ListenVoiceEqualizer } from "../../components";

import styles from "./voice.module.scss";

export const Voice = () => (
    <div className={styles.pageWrapper}>
        <div className={styles.recordsGrid}>
            <ListenVoiceEqualizer />
            <ListenVoiceEqualizer />
            <ListenVoiceEqualizer />
        </div>
    </div>
);
