import { Grid, Hidden, Link, SxProps } from "@mui/material";
import theme from "../../old.theme";
import { Box } from "@mui/system";
// import { useNavigate } from "react-router-dom";

const styles: {
  footer: SxProps;
  adornment: SxProps;
  mainContainer: SxProps;
  link: SxProps;
  gridItem: SxProps;
  icon: SxProps;
  socialContainer: SxProps;
} = {
  socialContainer: {
    position: "absolute",
    marginTop: "7em",
    marginLeft: "59em",
    [theme.breakpoints.down("lg")]: {
      marginTop: "7em",
      marginLeft: "1em",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "5em",
      marginLeft: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
      marginLeft: "0.5em",
    },
  },
  icon: {
    height: "3m",
    width: "3em",
    "&:hover": { cursor: "pointer !important" },
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    height: "12em",
    zIndex: 1302,
    position: "relative",
    [theme.breakpoints.down("md")]: { height: "10em" },
    [theme.breakpoints.down("sm")]: { height: "7em" },
  },
  adornment: {
    verticalAlign: "bottom",
    height: "12em",
    [theme.breakpoints.down("md")]: { height: "10em" },
    [theme.breakpoints.down("sm")]: { height: "7em" },
    // mr: "3000px",
    // ml: "0px",
    // padding: "0px",
  },
  mainContainer: {
    position: "absolute",
    ml: "6em",
  },
  gridItem: { m: "3em" },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    "&:hover": { cursor: "pointer !important" },
  },
};

function Footer(props: any) {
  // const navigate = useNavigate();
  return (
    <Box sx={styles.footer}>
      <Hidden lgDown>
        <Grid container sx={styles.mainContainer} justifyContent="center">
          <Grid item sx={styles.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                component={Link}
                href="/"
                onClick={() => {
                  // navigate("/");
                  props.setCurrentTab(0);
                }}
                sx={styles.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={styles.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                component={Link}
                href="/services"
                onClick={() => {
                  // navigate("/services");
                  props.setCurrentTab(1);
                  props.setSelectedIndex(0);
                }}
                sx={styles.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                href="/customsoftware"
                onClick={() => {
                  // navigate("/customsoftware");
                  props.setCurrentTab(1);
                  props.setSelectedIndex(1);
                }}
                sx={styles.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                href="/mobileapps"
                onClick={() => {
                  // navigate("/mobileapps");
                  props.setCurrentTab(1);
                  props.setSelectedIndex(2);
                }}
                sx={styles.link}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                href="/websites"
                onClick={() => {
                  // navigate("/websites");
                  props.setCurrentTab(1);
                  props.setSelectedIndex(3);
                }}
                sx={styles.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={styles.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                component={Link}
                href="/revolution"
                onClick={() => {
                  // navigate("/revolution");
                  props.setCurrentTab(2);
                }}
                sx={styles.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                onClick={() => {
                  // navigate("/revolution");
                  props.setCurrentTab(2);
                }}
                sx={styles.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                onClick={() => {
                  // navigate("/revolution");
                  props.setCurrentTab(2);
                }}
                sx={styles.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                onClick={() => {
                  // navigate("/revolution");
                  props.setCurrentTab(2);
                }}
                sx={styles.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={styles.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                component={Link}
                href="/about"
                onClick={() => {
                  // navigate("/about");
                  props.setCurrentTab(3);
                }}
                sx={styles.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                href="/about"
                onClick={() => {
                  // navigate("/about");
                  props.setCurrentTab(3);
                }}
                sx={styles.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                href="/about"
                onClick={() => {
                  // navigate("/about");
                  props.setCurrentTab(3);
                }}
                sx={styles.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={styles.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                component={Link}
                href="/contact"
                onClick={() => {
                  // navigate("/contact");
                  props.setCurrentTab(4);
                }}
                sx={styles.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid container>
        <Grid item>
          <Box
            component="img"
            alt="black decorative"
            src="/assets/footerAdornment.svg"
            sx={styles.adornment}
          />
        </Grid>
        <Grid item>
          <Grid container spacing={2} sx={styles.socialContainer}>
            <Grid item>
              <Link href="https://www.facebook.com" target="_blank">
                <Box
                  component="img"
                  alt="facebook logo"
                  src="/assets/facebook.svg"
                  sx={styles.icon}
                />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.instagram.com" target="_blank">
                <Box
                  component="img"
                  alt="instagram logo"
                  src="/assets/instagram.svg"
                  sx={styles.icon}
                />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.twitter.com" target="_blank">
                <Box
                  component="img"
                  alt="twitter logo"
                  src="/assets/twitter.svg"
                  sx={styles.icon}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
