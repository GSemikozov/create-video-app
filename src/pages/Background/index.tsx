import React from "react";

import { Accordion, ImageCard } from "../../components";

import styles from "./background.module.scss";

export const Background = () => (
    <div className={styles.pageWrapper}>
        <Accordion title="Images">
            <div className={styles.cardsGrid}>
                <ImageCard title="Upload" isUpload={true} />
                <ImageCard
                    img={process.env.PUBLIC_URL + "/assets/images/image1.png"}
                    title="Office"
                    isActive={true}
                />
                <ImageCard
                    img={process.env.PUBLIC_URL + "/assets/images/image2.png"}
                    title="Space"
                />
                <ImageCard
                    img={process.env.PUBLIC_URL + "/assets/images/image3.png"}
                    title="Noise"
                />
                <ImageCard
                    img={process.env.PUBLIC_URL + "/assets/images/image4.png"}
                    title="Meeting Room"
                />
                <ImageCard
                    img={process.env.PUBLIC_URL + "/assets/images/image5.png"}
                    title="Books"
                />
                <ImageCard
                    img={process.env.PUBLIC_URL + "/assets/images/image6.png"}
                    title="Desk"
                />
            </div>
        </Accordion>
        <Accordion title="Solid colours">Solid colours</Accordion>
        <Accordion title="Videos">Videos</Accordion>
    </div>
);
