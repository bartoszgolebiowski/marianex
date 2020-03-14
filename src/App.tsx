import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';

import Context from './context/Context';
import useGlobal from './customHooks/useGlobal'
import Canvas from './containers/Canvas';
import Menu from './components/Canvas/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}))

const App = () => {
  const classes = useStyles();
  const value = useGlobal();

  return (
    <Context.Provider value={value}>
      <div className={classes.root}>
        <CssBaseline />
        <Menu />
        <Canvas />
      </div>
    </Context.Provider>
  );
}

export default App;
