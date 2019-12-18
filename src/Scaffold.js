import React from 'react';
import { Router } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import UserList from './List/UserList';

const useClasses = makeStyles(theme => ({
  header: {
    flexGrow: 1,
    height: 56,
  },
}));

export default function Scaffold () {
  const classes = useClasses();

  return (
    <div>
      <div className={classes.header}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Pig Knows - User List
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Router>
        <UserList path="/" />
      </Router>
    </div>
  );
}

