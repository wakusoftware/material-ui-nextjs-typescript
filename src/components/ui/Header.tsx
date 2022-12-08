import {
  AppBar,
  Tab,
  Tabs,
  SxProps,
  Toolbar,
  useScrollTrigger,
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  paperClasses,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { cloneElement, useEffect, useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import theme from "../../theme";
import Link from "../../Link";

interface ElevationScrollProps {
  children: React.ReactElement;
}

const iOS =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

function ElevationScroll(props: ElevationScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header(props: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const styles: {
    menu: SxProps;
    drawerItem: SxProps;
    menuItem: SxProps;
    listItem: SxProps;
    drawerItemEstimate: SxProps;
    tabContainer: SxProps;
    tab: SxProps;
    tabEstimate: SxProps;
    button: SxProps;
    logo: SxProps;
    drawerIconContainer: SxProps;
    drawerIcon: SxProps;
    drawer: SxProps;
    appbar: SxProps;
    toolbarMargin: SxProps;
    menuList: SxProps;
  } = {
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "4em",
      [theme.breakpoints.down("md")]: {
        marginBottom: "3em",
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: "2em",
      },
    },
    listItem: {
      opacity: 0.7,
      "&.Mui-selected": {
        backgroundColor: theme.palette.action.selected,
        opacity: 1,
      },
    },
    drawerItem: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "white",
    },
    drawerItemEstimate: {
      backgroundColor: theme.palette.secondary.main,
      opacity: 0.7,
      "&.Mui-selected": {
        backgroundColor: theme.palette.action.selected,
        opacity: 1,
      },
    },
    menuList: { backgroundColor: theme.palette.primary.main },
    menu: {
      zIndex: 1302,
    },
    tabContainer: {
      ml: "auto",
      "&.MuiTabs-indicator": { color: "white" },
      "&.Mui-selected": { color: "white" },
      mr: "25px",
    },
    drawerIconContainer: { marginLeft: "auto" },
    drawerIcon: { height: "50px", width: "50px" },
    menuItem: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "white",
    },
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      minWidth: 10,
      color: "white",
      opacity: 0.7,
      "&.Mui-selected": {
        opacity: 1,
      },
      ml: "25px",
    },
    tabEstimate: {
      borderRadius: "50px",
      ml: "25px",
      fontFamily: "Pacifico",
      textTransform: "none",
      height: "45px",
      color: "white",
      backgroundColor: theme.palette.secondary.main,
      opacity: 0.7,
      "&.Mui-selected": {
        opacity: 1,
      },
    },
    button: {
      borderRadius: "50px",
      ml: "50px",
      mr: "25px",
      fontFamily: "Pacifico",
      textTransform: "none",
      height: "45px",
      color: "white",
    },
    logo: {
      height: "8em",
      [theme.breakpoints.down("md")]: { height: "7em" },
      [theme.breakpoints.down("sm")]: { height: "5.5em" },
      "&:hover": { cursor: "pointer !important" },
    },
    drawer: {
      [`& .${paperClasses.root}`]: {
        backgroundColor: theme.palette.primary.main,
      },
    },
    appbar: {
      zIndex: theme.zIndex.modal + 1,
    },
  };

  const onChangeHandler = (event: React.SyntheticEvent, newValue: number) => {
    props.setCurrentTab(newValue);
  };

  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const onCloseHandler = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const onMenuItemClickHandler = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(index);
  };

  const menuOptions = [
    { link: "/services", name: "Services" },
    { link: "/softwaredevelopment", name: "Custom Software Development" },
    { link: "/appdevelopment", name: "Mobile App Development" },
    { link: "/websites", name: "Websites" },
  ];

  const tabsOptions = [
    { link: "/", name: "Home" },
    {
      link: "/services",
      name: "Services",
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event: React.MouseEvent<HTMLElement>) =>
        onClickHandler(event),
    },
    { link: "/revolution", name: "The Revolution" },
    { link: "/about", name: "About Us" },
    { link: "/contact", name: "Contact Us" },
    { link: "/estimate", name: "Free Estimate" },
  ];

  useEffect(() => {
    const pathname = window.location.pathname;

    const tabIndex = tabsOptions.findIndex(
      (option) => option.link === pathname
    );

    const ctxTabindex = menuOptions.findIndex(
      (option) => option.link === pathname
    );

    if (pathname === "/estimate") {
      props.setCurrentTab(5);
    } else {
      props.setCurrentTab(tabIndex === -1 ? 1 : tabIndex);
    }
    props.setSelectedIndex(ctxTabindex);
  }, []);

  const tabs = (
    <React.Fragment>
      <Tabs
        aria-label="Basic tabs"
        value={props.currentTab}
        onChange={onChangeHandler}
        sx={styles.tabContainer}
        indicatorColor="primary"
      >
        {tabsOptions.map((tab, index) => (
          <Link href={tab.link}>
            <Tab
              // component={Link}
              // LinkComponent={Link}
              // href={tab.link}
              key={`${tab.link}-${index}`}
              sx={index === 5 ? styles.tabEstimate : styles.tab}
              label={tab.name}
              // onClick={() => navigate(tab.link)}
              aria-owns={tab.ariaOwns}
              onMouseOver={tab.mouseOver}
            />
          </Link>
        ))}
      </Tabs>
      <Menu
        defaultValue={undefined}
        id="simple-menu"
        open={openMenu}
        onClose={onCloseHandler}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        MenuListProps={{
          onMouseLeave: onCloseHandler,
          sx: styles.menuList,
        }}
        elevation={0}
        sx={styles.menu}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <Link href={option.link}>
            <MenuItem
              // LinkComponent={Link}
              // href={option.link}
              key={`${option}-${i}`}
              onClick={(event) => {
                // navigate(option.link);
                props.setCurrentTab(1);
                onCloseHandler();
                onMenuItemClickHandler(event, i);
              }}
              sx={{
                opacity: 0.7,
                "&.Mui-selected": {
                  backgroundColor: theme.palette.action.selected,
                  opacity: 1,
                },
              }}
              selected={i === props.selectedIndex && props.currentTab === 1}
            >
              <Typography sx={styles.menuItem}>{option.name}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        sx={styles.drawer}
      >
        <Box sx={styles.toolbarMargin} />
        <List disablePadding>
          {tabsOptions.map((tab, index) => (
            <ListItem
              LinkComponent={Link}
              href={tab.link}
              key={`${tab.link}-${index}`}
              divider
              button
              onClick={() => {
                // navigate(tab.link);
                setOpenDrawer(false);
                props.setCurrentTab(index);
              }}
              selected={props.currentTab === index}
              sx={index === 5 ? styles.drawerItemEstimate : styles.listItem}
            >
              <ListItemText disableTypography sx={styles.drawerItem}>
                {tab.name}
              </ListItemText>
            </ListItem>
          ))}
          {}
        </List>
      </SwipeableDrawer>
      <IconButton sx={styles.drawerIconContainer}>
        <MenuIcon
          sx={styles.drawerIcon}
          onClick={() => setOpenDrawer(!openDrawer)}
        />
      </IconButton>
    </React.Fragment>
  );

  return (
    <ElevationScroll {...props}>
      <AppBar position="sticky" sx={styles.appbar}>
        {/* <ResponsiveAppBar /> */}
        <Toolbar disableGutters>
          <Box
            // component={Link}
            // href="/"
            component="img"
            sx={styles.logo}
            alt="company logo"
            src="/assets/logo.svg"
            // onClick={() => navigate("/")}
            //Make hand appear on hover
          />
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
