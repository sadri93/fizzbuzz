import React, { FC, useState } from "react";
import Modal from "../Modal/Modal";
import useStyles from "./styles";
import Button from "@mui/material/Button";
import FizzBuzzItem from "./FizzBuzzItem/FizzBuzzItem";
import { FIZZ, BUZZ, OTHER } from "./enum";
import { fizzBuzz } from "./utils/utils";

const FizzBuzz: FC = () => {
  const classes = useStyles();
  const fizzBuzzArray = fizzBuzz(100);

  return (
    <div className={classes.root}>
      {fizzBuzzArray.map((item, i) => {
        const variant = item === FIZZ ? FIZZ : item === BUZZ ? BUZZ : OTHER;
        return (
          <FizzBuzzItem key={`item-${i}`} variant={variant}>
            {item}
          </FizzBuzzItem>
        );
      })}
    </div>
  );
};

export default FizzBuzz;
