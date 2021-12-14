import React, { FC, useState } from "react";
import useStyles from "./styles";
import Button from "@mui/material/Button";

type Props = {
  variant: "fizz" | "buzz" | "other";
};

const FizzBuzzItem: FC<Props> = ({ variant, children }) => {
  const classes = useStyles({ variant });

  return <div className={classes.root}>{children}</div>;
};

export default FizzBuzzItem;
