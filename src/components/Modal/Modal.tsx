import React, { FC } from "react";
import { FocusOn } from "react-focus-on";

import useStyles from "./styles";

export type ModalType = { isOpen: boolean; onClose: () => void };

const Modal: FC<ModalType> = ({ isOpen, onClose, children }) => {
  const classes = useStyles();
  return (
    <>
      {isOpen && (
        <div className={classes.backdrop}>
          <FocusOn onEscapeKey={onClose} className={classes.focuslock}>
            <section className={classes.root}>{children}</section>
          </FocusOn>
        </div>
      )}
    </>
  );
};
export default Modal;
