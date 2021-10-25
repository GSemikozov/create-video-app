import React, { useState } from "react";
import cx from "classnames";

import { PlayButton } from "../../Molecules";

import { SVGEqualizerActive } from "./assets/illustrations/SVGEqualizerActive";
import { SVGEqualizerDefault } from "./assets/illustrations/SVGEqualizerDefault";

import styles from "./listen-voice-equalizer.module.scss";

export const ListenVoiceEqualizer = () => {
    const [play, setPlay] = useState<boolean>(false);

    const handlePlay = () => {
        setPlay(!play);
    };

    return (
        <div className={cx(styles.equalizer, { [styles.active]: play })}>
            <PlayButton isActive={play} handleClick={handlePlay} />
            <div>
                <div className={styles.title}>Title</div>
                <div className={styles.equalizerGraph}>
                    {play ? <SVGEqualizerActive /> : <SVGEqualizerDefault />}
                </div>
            </div>
        </div>
    );
};
