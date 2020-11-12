import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { GiRunningShoe } from "react-icons/gi";
import { DataContext } from "./Context";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "white",
      color: "black",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  MuiToolbarRoot: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    color: "black",
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Navbar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem>
          <Link to='/'>Home</Link>
        </ListItem>
        <ListItem>
          <Link to='men'>Men</Link>
        </ListItem>
        <ListItem>
          <Link to='women'>Women</Link>
        </ListItem>
        <ListItem>
          <Link to='kids'>Kids</Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Link to='cart'>Cart</Link>
        </ListItem>
      </List>
      <Divider />
      <List></List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={classes.MuiToolbarRoot}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/'>
            <GiRunningShoe style={{ width: 50, height: 40, color: "black" }} />
          </Link>
          <Typography variant='h4' noWrap>
            STORM
          </Typography>
          <Link to='/cart'>
            {" "}
            <div className='cart-icon'>
              {" "}
              <span>{cart.length}</span>
            </div>
            <ShoppingCartIcon
              style={{
                justify: "space-around",
                width: 50,
                height: 20,
                color: "black",
              }}
            />
          </Link>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

export default Navbar;
