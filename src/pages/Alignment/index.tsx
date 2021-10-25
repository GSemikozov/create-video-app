import React from "react";

import { CustomRadio } from "../../components/Atoms/CustomRadio";
import { AlignmentEnum } from "../../types";

import styles from "./alignment.module.scss";

export const Alignment = () => (
    <div className={styles.pageWrapper}>
        <div className={styles.radioGroup}>
            <CustomRadio value={"1"} name={"radio"} label={AlignmentEnum.left} isActive={false} />
            <CustomRadio value={"1"} name={"radio"} label={AlignmentEnum.center} isActive={true} />
            <CustomRadio value={"1"} name={"radio"} label={AlignmentEnum.right} isActive={false} />
        </div>
    </div>
);
