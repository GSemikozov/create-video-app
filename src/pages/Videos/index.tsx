import React from "react";

import { Button, Layout, SavedVideosCard } from "../../components";
import { ButtonTypeEnum } from "../../types";

import styles from "./videos.module.scss";

export const Videos = () => (
    <Layout
        headerLeftSideContent={<h1>Saved Videos</h1>}
        headerRightSideContent={
            <Button
                type={ButtonTypeEnum.primary}
                handleClick={() => {
                    // eslint-disable-next-line no-console
                    console.log("save");
                }}
            >
                Save
            </Button>
        }
    >
        <div className={styles.pageWrapper}>
            <SavedVideosCard />
        </div>
    </Layout>
);
