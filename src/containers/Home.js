import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    h1: {
      marginTop: "100px",
    },
  }),
);

function Home() {
    const classes = useStyles();
  return (
    <h1 className={classes.h1}>Home Page</h1>
  );
}

export default Home;
