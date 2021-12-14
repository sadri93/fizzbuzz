import { makeStyles } from "@mui/styles";
import { borderRadius, rem } from "polished";
import { BUZZ, FIZZ } from "../enum";

export default makeStyles((theme) => ({
  root: ({ variant }: { variant: string }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 50,
    minHeight: 50,
    margin: rem(5),
    background: variant === FIZZ ? "red" : variant === BUZZ ? "blue" : "white",
    color: variant === FIZZ ? "white" : variant === BUZZ ? "white" : "black",
    border: "1px solid #D4D4D8",
    borderRadius: rem(8),
    padding: rem(1),
  }),
}));
