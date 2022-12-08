import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box, SxProps } from "@mui/system";
import theme from "../src/theme";
import ButtonArrow from "../src/components/ui/ButtonArrow";
theme;

const styles: {
  bigLogo: SxProps;
  logoGridItem: SxProps;
  estimateButton: SxProps;
  buttonContainer: SxProps;
  heroLearnButton: SxProps;
  mainContainer: SxProps;
  heroTextContainer: SxProps;
  specialText: SxProps;
  learnButton: SxProps;
  icon: SxProps;
  revolutionBackground: SxProps;
  revolutionCard: SxProps;
} = {
  revolutionBackground: {
    backgroundImage: `url(/assets/repeatingBackground.svg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  heroTextContainer: {
    minWidth: "21.5rem",
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: { marginLeft: "0rem" },
  },
  mainContainer: { marginTop: "5rem" },
  buttonContainer: { marginTop: "1rem" },
  bigLogo: {
    height: "20rem",
    width: "40rem",
  },
  logoGridItem: {
    marginTop: "2rem",
    marginLeft: "10%",
  },
  estimateButton: {
    fontFamily: "Pacifico",
    fontSize: "0.75rem",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 5,
    "&:hover": { backgroundColor: theme.palette.secondary.light },
  },
  specialText: { fontFamily: "Pacifico", color: theme.palette.secondary.main },
  heroLearnButton: {
    borderColor: theme.palette.primary.dark,
    color: theme.palette.primary.main,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    borderColor: theme.palette.primary.dark,
    color: theme.palette.primary.main,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.8rem",
    height: 35,
    width: 145,
    padding: 3,
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
};

function LandingPage() {
  return (
    <Grid container direction="column" sx={styles.mainContainer}>
      {/*----------Hero Block-------------*/}
      <Grid item>
        <Grid
          container
          alignItems="center"
          justifyContent="flex-end"
          direction="row"
        >
          <Grid sm item sx={styles.heroTextContainer}>
            <Typography variant="h2" align="center">
              <div>
                Bringing West Coast Technology
                <br />
                to the Midwest
              </div>
            </Typography>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={styles.buttonContainer}
            >
              <Grid item>
                <Button variant="contained" sx={styles.estimateButton}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" sx={styles.heroLearnButton}>
                  <span style={{ marginRight: 7 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.primary.main}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item sx={styles.logoGridItem}>
            <Box
              component="img"
              alt="twitter logo"
              src="/assets/big-logo.png"
              sx={styles.bigLogo}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*---------Services Block----------*/}
      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1">
              Save Energy. Save Time. Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <Box sx={styles.specialText}>celebration.</Box>
            </Typography>
            <Button variant="outlined" sx={styles.learnButton}>
              <span style={{ marginRight: 7 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item>
            <Box
              component="img"
              alt="custom software icon"
              src="/assets/customSoftwareIcon.svg"
              sx={styles.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*---------Revolution Block----------*/}
      <Grid item>
        <Grid
          container
          style={{ height: "100em" }}
          alignItems="center"
          justifyContent="center"
        >
          <Card sx={styles.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge techn ology is
                    a recipe for revolution.
                  </Typography>
                  <Button variant="outlined" sx={styles.heroLearnButton}>
                    <span style={{ marginRight: 7 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.primary.main}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Box component="div" sx={styles.revolutionBackground} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
