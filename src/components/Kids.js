import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Men() {
   const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}
  direction="row"
  justify="center"
  alignItems="center"
>
        <Grid item xs={12} sm={6} md={6} lg={8}>
          <Paper className={classes.paper}>kids page</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Men
