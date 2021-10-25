import React from "react";

import { Accordion, ImageCard } from "../../components";

import styles from "./background.module.scss";

import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
import image3 from "./assets/images/image3.png";
import image4 from "./assets/images/image4.png";
import image5 from "./assets/images/image5.png";
import image6 from "./assets/images/image6.png";

export const Background = () => (
    <div className={styles.pageWrapper}>
        <Accordion title="Images">
            <div className={styles.cardsGrid}>
                <ImageCard title="Upload" isUpload={true} />
                <ImageCard img={image1} title="Office" isActive={true} />
                <ImageCard img={image2} title="Space" />
                <ImageCard img={image3} title="Noise" />
                <ImageCard img={image4} title="Meeting Room" />
                <ImageCard img={image5} title="Books" />
                <ImageCard img={image6} title="Desk" />
            </div>
        </Accordion>
        <Accordion title="Solid colours">Solid colours</Accordion>
        <Accordion title="Videos">Videos</Accordion>
    </div>
);
