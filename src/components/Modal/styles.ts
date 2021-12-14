import { makeStyles } from "@mui/styles";
import { rem } from "polished";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: rem(480),
    backgroundColor: "white",
    boxShadow: "0px 8px 12px -4px rgba(24, 24, 27, 0.08)",
    padding: rem(40),
    borderRadius: rem(20),
    outline: "none",
  },
  focuslock: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  backdrop: {
    display: "flex",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: rem(10),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    zIndex: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    opacity: "1",
    transition: "opacity 0.5s ease",
  },
}));
