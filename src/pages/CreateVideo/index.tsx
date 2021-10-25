import React from "react";
import { Outlet } from "react-router-dom";

import {
    Button,
    CreateVideoCard,
    CreateVideoModal,
    InnerNav,
    Layout,
    NavLink,
} from "../../components";

import { ButtonTypeEnum } from "../../types";

import styles from "./create-video.module.scss";

const HeaderButtonsMenu = () => (
    <div className={styles.headerButtonsMenu}>
        <Button
            type={ButtonTypeEnum.secondary}
            handleClick={() => {
                // eslint-disable-next-line no-console
                console.log("cancel create video click");
            }}
        >
            Cancel
        </Button>
        <Button
            type={ButtonTypeEnum.primary}
            handleClick={() => {
                // eslint-disable-next-line no-console
                console.log("save creating video click");
            }}
        >
            Save
        </Button>
    </div>
);

export const CreateVideo = () => (
    <Layout
        headerLeftSideContent={<CreateVideoModal />}
        headerRightSideContent={<HeaderButtonsMenu />}
    >
        <div className={styles.pageWrapper}>
            <div>
                <CreateVideoCard />
            </div>
            <div className={styles.rightCol}>
                <InnerNav>
                    <>
                        <NavLink path="actor">Actor</NavLink>
                        <NavLink path="voice">Voice</NavLink>
                        <NavLink path="alignment">Alignment</NavLink>
                        <NavLink path="background">Background</NavLink>
                    </>
                </InnerNav>

                <Outlet />
            </div>
        </div>
    </Layout>
);
