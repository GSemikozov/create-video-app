import React, { useCallback, useEffect, useRef, useState } from "react";
import cx from "classnames";

import { AngleDown } from "../../icons";

import styles from "./accordion.module.scss";

export const Accordion = ({
    title,
    active = false,
    children,
}: {
    title: string;
    active?: boolean;
    children: React.ReactNode;
}) => {
    const [isActive, setIsActive] = useState<boolean>(active);
    const [height, setHeight] = useState<string>("0px");

    const content = useRef<HTMLElement>();
    const sensitive = useRef<HTMLElement>();

    const toggleHeight = (isActive: boolean) => {
        setHeight(!isActive ? "0px" : `${content?.current?.scrollHeight}px`);
    };

    const toggleAccordion = useCallback(() => {
        setIsActive(!isActive);
    }, [isActive]);

    useEffect(() => {
        toggleHeight(isActive);
    }, [isActive]);

    return (
        <div
            className={cx(styles.accordion, {
                [styles.accordionActive]: isActive,
            })}
            // @ts-ignore
            ref={sensitive}
        >
            <button className={styles.accordionButton} onClick={toggleAccordion}>
                <p className={styles.accordionTitle}>{title}</p>
                <div
                    className={cx(styles.accordionIcon, {
                        [styles.accordionIconRotate]: isActive,
                    })}
                >
                    <AngleDown />
                </div>
            </button>
            <div
                // @ts-ignore
                ref={content}
                style={{ maxHeight: `${height}` }}
                className={styles.accordionContent}
            >
                <div className={styles.accordionText}>{children}</div>
            </div>
        </div>
    );
};
