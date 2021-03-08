import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

function MaterialUiLayout(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{props.children[0]}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{props.children[1]}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{props.children[2]}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{props.children[3]}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{props.children[4]}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{props.children[5]}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{props.children[6]}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
MaterialUiLayout.sections = ['header', 'main-left', 'main-right', 'bottom-left', 'bottom-left-mid', 'bottom-right-mid', 'bottom-right']
export default MaterialUiLayout