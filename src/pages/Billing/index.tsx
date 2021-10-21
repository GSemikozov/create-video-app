import React from "react";
import cx from "classnames";

import { Pdf } from "../../components/icons";

import styles from "./billing.module.scss";

export const Billing = () => (
    <div className={styles.pageWrapper}>
        <div className={styles.table}>
            <div className={styles.tableHeader}>
                <div className={styles.tableHeaderCol}>
                    <div className={styles.tableHeaderColText}>Reference ID</div>
                </div>
                <div className={styles.tableHeaderCol}>
                    <div className={cx(styles.tableHeaderColText, styles.active)}>DATE</div>
                </div>
                <div className={styles.tableHeaderCol}>
                    <div className={styles.tableHeaderColText}>AMOUNT</div>
                </div>
                <div className={styles.tableHeaderCol}>
                    <div className={styles.tableHeaderColText}>INVOICE</div>
                </div>
            </div>
            <div className={styles.tableBody}>
                <div className={styles.tableBodyRow}>
                    <div className={styles.tableBodyCol}>4571222f6rthswfg9981fr55</div>
                    <div className={styles.tableBodyCol}>7/12/2020</div>
                    <div className={styles.tableBodyCol}>$28</div>
                    <div className={styles.tableBodyCol}>
                        <Pdf />
                    </div>
                </div>
                <div className={styles.tableBodyRow}>
                    <div className={styles.tableBodyCol}>4571222f6rthswfg9981fr55</div>
                    <div className={styles.tableBodyCol}>7/12/2020</div>
                    <div className={styles.tableBodyCol}>$36</div>
                    <div className={styles.tableBodyCol}>
                        <Pdf />
                    </div>
                </div>
                <div className={styles.tableBodyRow}>
                    <div className={styles.tableBodyCol}>4571222f6rthswfg9981fr55</div>
                    <div className={styles.tableBodyCol}>7/12/2020</div>
                    <div className={styles.tableBodyCol}>$14</div>
                    <div className={styles.tableBodyCol}>
                        <Pdf />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
