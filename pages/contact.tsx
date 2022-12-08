import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme from "../src/theme";
import axios from "axios";

import ButtonArrow from "../src/components/ui/ButtonArrow";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";
import airplane from "../../assets/send.svg";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function ContactPage() {
  const styles = {
    background: {
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "60em",
      paddingBottom: "10em",
      [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${mobileBackground})`,
      },
    },
    estimateButton: {
      borderRadius: 50,
      height: 80,
      width: 205,
      backgroundColor: theme.palette.secondary.main,
      fontSize: "1.5rem",
      marginRight: "5em",
      marginLeft: "2em",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
      [theme.breakpoints.down("md")]: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
    learnButton: {
      //   ...theme.typography.learnButton,
      fontSize: "0.7rem",
      height: 35,
      padding: 5,
      [theme.breakpoints.down("md")]: {
        marginBottom: "2em",
      },
    },
    message: {
      //   border: `2px solid ${theme.palette.primary.main}`,
      marginTop: "3em",
      borderRadius: 5,
    },
    sendButton: {
      //   ...theme.typography.estimate,
      borderRadius: 50,
      height: 45,
      width: 245,
      fontSize: "1rem",
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
      [theme.breakpoints.down("sm")]: {
        height: 40,
        width: 225,
      },
    },
  };

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({ open: false, color: "" });
  const [alertMessage, setAlertMesssage] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let valid: boolean = true;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = async () => {
    setLoading(true);
    await sleep(2000);

    axios
      .get(
        "https://react-refresher-ce090-default-rtdb.firebseio.com/test.json",
        {
          params: {
            email: email,
            name: name,
            phone: phone,
            message: message,
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({ open: true, color: "#4BB543" });
        setAlertMesssage("Message sent successfully!");
      })
      .catch((err) => {
        setLoading(false);
        setAlert({ open: true, color: "#FF3232" });
        setAlertMesssage("Something went wrong! Please try again.");
        console.error(err);
      });
  };

  const buttonContents = (
    <Fragment>
      Send Message
      <Box
        component="img"
        src={airplane}
        alt="paper airplane"
        style={{ marginLeft: "1em" }}
      />
    </Fragment>
  );

  return (
    <Grid container direction="row">
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            container
            justifyContent="center"
            direction="column"
            style={{
              marginBottom: matchesMD ? "5em" : 0,
              marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
            }}
            lg={4}
            xl={3}
          >
            <Grid item>
              <Typography variant="h2" style={{ lineHeight: 1 }}>
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                style={{ color: theme.palette.primary.main }}
              >
                We're waiting
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <Box
                  component="img"
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.primary.main,
                    fontSize: "1rem",
                  }}
                >
                  <Box
                    component="a"
                    href="tel:5555555555"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    (555) 555-5555
                  </Box>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <Box
                  component="img"
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.primary.main,
                    fontSize: "1rem",
                  }}
                >
                  <Box
                    component="a"
                    href="mailto:zachary@gmail.com"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    zachary@gmail.com
                  </Box>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{ width: "20em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  helperText={phoneHelper}
                  error={phoneHelper.length !== 0}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ width: "20em" }}>
              <TextField
                // InputProps={{ disableUnderline: true }}
                value={message}
                sx={styles.message}
                multiline
                fullWidth
                rows={10}
                id="message"
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2em" }}
            >
              <Button
                disabled={
                  name.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                sx={styles.sendButton}
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        fullScreen={matchesSM}
        onClose={() => setOpen(false)}
        // PaperProps={{
        //   style: {
        //     paddingTop: matchesXS ? "1em" : "5em",
        //     paddingBottom: matchesXS ? "1em" : "5em",
        //     paddingLeft: matchesXS
        //       ? 0
        //       : matchesSM
        //       ? 0
        //       : matchesMD
        //       ? "15em"
        //       : "25em",
        //     paddingRight: matchesXS
        //       ? 0
        //       : matchesSM
        //       ? 0
        //       : matchesMD
        //       ? "15em"
        //       : "25em",
        //   },
        // }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id="email"
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Phone"
                helperText={phoneHelper}
                error={phoneHelper.length !== 0}
                id="phone"
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid item style={{ width: matchesSM ? "100%" : "60em" }}>
            <TextField
              InputProps={{ disableUnderline: true }}
              value={message}
              //   sx={styles.message}
              multiline
              fullWidth
              rows={10}
              id="message"
              onChange={(event) => setMessage(event.target.value)}
            />
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                // sx={styles.sendButton}
                onClick={onConfirm}
              >
                {loading ? (
                  <CircularProgress
                    sx={{ color: theme.palette.secondary.light }}
                    size={30}
                  />
                ) : (
                  buttonContents
                )}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        ContentProps={{
          style: {
            backgroundColor: alert.color,
          },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message={alertMessage}
        autoHideDuration={4000}
        onClose={() => setAlert({ ...alert, open: false })}
      />
      {/* <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Subscribe</Button>
        </DialogActions>
      </Dialog> */}

      <Grid item container sx={styles.background} direction="column" lg={9} />
    </Grid>
  );
}

export default ContactPage;
