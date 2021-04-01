
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {HomeRounded,ExitToApp,CalendarToday,LocalShipping,Settings,BarChart,TrendingUp}  from'@material-ui/icons';
import logo from '../media/agrox.png';
import HomeFrangments from '../Fragments/HomeFrangments';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
          <img src={logo} height="65px" />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
           <ListItem button>
                 <ListItemIcon>
                 <HomeRounded/>
                 </ListItemIcon>
                 <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
                 <ListItemIcon>
                 <LocalShipping/>
                 </ListItemIcon>
                 <ListItemText primary="Orders" />
            </ListItem>
            <ListItem button>
                 <ListItemIcon>
                 <TrendingUp/>
                 </ListItemIcon>
                 <ListItemText primary="Price Prediction" />
            </ListItem>
            <ListItem button>
                 <ListItemIcon>
                 <BarChart/>
                 </ListItemIcon>
                 <ListItemText primary="Price Chart" />
            </ListItem>
            <ListItem button>
                 <ListItemIcon>
                 <CalendarToday/>
                 </ListItemIcon>
                 <ListItemText primary="Today" />
            </ListItem>
            <ListItem button>
                 <ListItemIcon>
                 <Settings/>
                 </ListItemIcon>
                 <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button>
                 <ListItemIcon>
                 <ExitToApp/>
                 </ListItemIcon>
                 <ListItemText primary="Log Out" />
            </ListItem>

            </List> 
            <Divider/>   

        </div>
      </Drawer>
      <main className={classes.content}>
      <Toolbar/>
      <HomeFrangments/>  
    
       
      </main>
    </div>
  );
}

