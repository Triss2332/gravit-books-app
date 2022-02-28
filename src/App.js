import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import clsx from 'clsx';

//componenti
import BestsellerBooks from './components/BestsellerBooks';
import FullOverview from './components/FullOverview';
import RandomBooks from './components/RandomBooks';
import Home from './components/Home';

//Material
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import { MenuItem } from '@material-ui/core';


//logo
import logo from "./assets/logo.png"



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 80,
  },
  logo: {
    marginRight: theme.spacing(2),
    maxWidth: 100,
  },
  list: {
    width: 250,
  },
  toolbar: {
    justifyContent: "space-between",
  },
}));



function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <MenuItem><Link to="/">Home</Link></MenuItem>
      </List>
      <Divider />
      <List>
        <MenuItem><Link to="/random-books">Random Book Generator</Link></MenuItem>
      </List>
      <Divider />
    </div>
  );


  return (

    <Router>
      <div>
        <div className={classes.root}>
          <AppBar>
            <Toolbar className={classes.toolbar}>
              <img src={logo} alt="logo" className={classes.logo} />

              <div>
                {['right'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)} edge="end" className={classes.menuButton}
                      color="inherit" aria-label="menu">
                      <MenuIcon />
                    </IconButton>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>
            </Toolbar>
          </AppBar> 
        </div>

        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/best-sellers' element={<BestsellerBooks />}>
          </Route>
          <Route path='/random-books' element={<RandomBooks />}>
          </Route>
          <Route path='/full-overview' element={<FullOverview />}>
          </Route>
        </Routes>

      </div>
    </Router>

  );
}

export default App;
