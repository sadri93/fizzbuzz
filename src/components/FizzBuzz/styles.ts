import { makeStyles } from "@mui/styles";
import { rem } from "polished";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: rem(24),
  },
  itemContainer: {
    marginTop: "auto",
    marginBottom: "auto",
  },
}));
