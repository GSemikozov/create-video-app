import React from "react";
import ReactDOM from "react-dom";
import cx from "classnames";

import styles from "./modal.module.scss";

// @ts-ignore
export const Modal = ({
    isModalVisible,
    hide,
    isFullScreen = false,
    children,
}: {
    isModalVisible: boolean;
    hide: () => void;
    isFullScreen?: boolean;
    children: React.ReactNode;
}) =>
    isModalVisible
        ? ReactDOM.createPortal(
              <React.Fragment>
                  {!isFullScreen && <div className={styles.modalOverlay} />}
                  <div
                      className={cx(styles.modalWrapper, {
                          [styles.fullScreen]: isFullScreen,
                      })}
                      aria-modal={true}
                      aria-hidden={isModalVisible}
                      tabIndex={-1}
                      role="dialog"
                  >
                      <div className={styles.modal}>
                          <button
                              type="button"
                              className={styles.modalCloseBtn}
                              data-dismiss="modal"
                              aria-label="Close"
                              onClick={hide}
                          >
                              <span aria-hidden="true">&times;</span>
                          </button>
                          <div className={styles.modalContainer}>{children}</div>
                      </div>
                  </div>
              </React.Fragment>,
              document.body,
          )
        : null;
