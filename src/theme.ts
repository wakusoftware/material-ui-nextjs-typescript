import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

// A custom theme for this app
const theme = createTheme({
  components: {
    // MuiMenu: {
    //   styleOverrides: {
    //     // paper: {
    //     //   backgroundColor: arcBlue,
    //     //   color: arcBlue,
    //     //   borderRadius: "0px",
    //     // },
    //   },
    // },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: arcBlue,
          fontSize: "1rem",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: arcGrey,
          fontWeight: 300,
        },
        underline: {
          "&:before": {
            borderBottom: `2px solid ${arcBlue}`,
          },
          "&:hover:not($disabled):not($focused):not($error):before": {
            borderBottom: `2px solid ${arcBlue}`,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          fontFamily: "Raleway",
          fontWeight: 700,
          fontSize: "2.5rem",
          color: arcBlue,
          lineHeight: 1.5,
        },
        h3: {
          fontFamily: "Pacifico",
          fontSize: "2.5rem",
          color: arcBlue,
        },
        h4: {
          fontFamily: "Raleway",
          fontWeight: 700,
          fontSize: "1.75rem",
          color: arcBlue,
        },
        subtitle1: {
          fontWeight: 300,
          fontSize: "1.25rem",
          color: arcGrey,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "white",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "white",
          textDecorationColor: "white",
          opacity: 0.7,
          "&:hover": {
            opacity: 1,
          },
          "&.Mui-selected": {
            color: "white",
          },
        },

        // selected: { color: "white" },
        // textColorSecondary: "white",
      },
    },
  },
  palette: {
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
    error: {
      main: red.A400,
    },
  },
  // custom: {
  //   typography: {
  //     tab: {
  //       fontFamily: "Raleway",
  //       textTransform: "none",
  //       fontWeight: 700,
  //       fontSize: "1rem",
  //       minWidth: 10,
  //       color: "white",
  //       ml: "25px",
  //     },
  //   },
  // },
});

export default theme;
