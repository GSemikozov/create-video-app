import React from "react";

import { Button } from "../../Atoms";
import { ButtonTypeEnum } from "../../../types";

import styles from "./create-video-card.module.scss";

import img from "./assets/preview.png";

const VideoScriptParser = () => (
    <div className={styles.videoScriptParser}>
        <textarea
            className={styles.codeArea}
            placeholder="Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages"
        />
        <Button
            type={ButtonTypeEnum.secondary}
            handleClick={() => {
                // eslint-disable-next-line no-console
                console.log("listen click");
            }}
            className={styles.codeAreaBtn}
        >
            Listen
        </Button>
        <div className={styles.codeAreaHelperText}>0 char</div>
    </div>
);

export const CreateVideoCard = () => (
    <div className={styles.card}>
        <div className={styles.cardHeader}>
            <div className={styles.cardHeaderInner}>
                <img src={img} className={styles.cardImg} alt="img" />
                <Button
                    type={ButtonTypeEnum.alternate}
                    className={styles.cardHeaderButton}
                    handleClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("preview clicked");
                    }}
                >
                    Preview
                </Button>
            </div>
        </div>
        <div className={styles.cardBody}>
            <VideoScriptParser />
        </div>
    </div>
);
