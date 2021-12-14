import React, { FC, useState } from "react";
import Modal from "../Modal/Modal";
import useStyles from "./styles";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import Slider from "@mui/material/Slider";
import FizzBuzz from "../FizzBuzz/FizzBuzz";
import { START } from "./messages/index";

const Start: FC = ({ children }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <div className={classes.root}>
          <Button variant="contained" onClick={handleClose}>
            {START}
          </Button>
        </div>
      </Modal>
      {!isOpen && children}
    </>
  );
};

export default Start;
