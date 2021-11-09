import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    left: "50%",
    top: "10%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  button: {
    background: "linear-gradient(45deg, #3287c1  30%, #4da9e8 90%)",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #003254",
    color: "white",
    height: 48,
    padding: "0 30px",
    left: "50%",
    top: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  link: {
    color: "secondary",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  textf: { color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" },
  submit: {
    margin: theme.spacing(6, 0, 2),
    position: "relative",
  },
}));

export { useStyles };
