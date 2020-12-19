import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  };
});

export default function AddressForm() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Add New Book
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="author"
            name="author"
            label="Author"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="synopsis"
            name="synopsis"
            label="Synopsis"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="category"
            name="category"
            label="Category"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="year" name="year" label="Year" fullWidth />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Add
        </Button>
      </Grid>
    </>
  );
}
