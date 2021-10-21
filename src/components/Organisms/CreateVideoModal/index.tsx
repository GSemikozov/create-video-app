import React, { useState } from "react";
import cx from "classnames";

import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

import useModal from "../../../hooks/useModal";
import { Modal } from "../../Molecules";
import { Button, Tag } from "../../Atoms";

import { ButtonTypeEnum } from "../../../types";

import styles from "./create-video-modal.module.scss";

export const CreateVideoModal = () => {
    const { isModalVisible, toggleModal } = useModal();
    const [editableValue, setEditableValue] = useState<string>("Saying Hi to my customers");

    const handleChangeText = (value: any) => {
        setEditableValue(value);
    };

    return (
        <div className="App">
            <button className={cx("h1", styles.openModalButton)} onClick={toggleModal}>
                {editableValue}
                <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.openModalButtonIcon}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.43413 7.62725L9.82036 3.25599C10.0599 3.0015 10.0599 2.61228 9.82036 2.37276C9.58084 2.13323 9.17665 2.13323 8.93713 2.37276L5 6.30988L1.06287 2.37276C0.808383 2.13323 0.419162 2.13323 0.179641 2.37276C-0.0598802 2.61228 -0.0598802 3.0015 0.179641 3.25599L4.5509 7.62725C4.80539 7.86677 5.19461 7.86677 5.43413 7.62725Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
            <Modal isModalVisible={isModalVisible} hide={toggleModal} isFullScreen={true}>
                <div>
                    <EditText
                        value={editableValue}
                        className={styles.input}
                        onChange={handleChangeText}
                    />
                    <EditTextarea
                        className={styles.textarea}
                        value="Fusce quis magna vel ex pellentesque consequat sed et turpis. Vivamus bibendum rutrum euismod. Sed non sagittis est, semper"
                        rows={2}
                    />
                    <div className={styles.tagsMenu}>
                        <Tag text="Email" />
                        <Tag text="Marketing" />
                        <Tag text="Greeting" />
                        <Tag text="Email" />
                        <Tag text="Marketing" />
                        <Tag text="Greeting" />
                    </div>
                    <Button type={ButtonTypeEnum.primary} handleClick={toggleModal}>
                        <span aria-hidden="true">Save</span>
                    </Button>
                </div>
            </Modal>
        </div>
    );
};
