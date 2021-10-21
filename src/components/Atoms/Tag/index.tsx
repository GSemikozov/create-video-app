import React from "react";

import styles from "./tag.module.scss";

export const Tag = ({ text }: { text: string }) => <div className={styles.tag}>{text}</div>;
