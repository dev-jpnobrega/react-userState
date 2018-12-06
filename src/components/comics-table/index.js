import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    height: 400,
    width: 400,
  },
  media: {
    height: 140,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 'auto',
    width: 'auto',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

const selectImages = (images) => {
  if (!images || images.length === 0) {
    return 'http://kaverisias.com/wp-content/uploads/2018/01/catalog-default-img.gif';
  }
  return `${images[0].path}.${images[0].extension}`;
}

const CardComic = (props) => {
  const { classes, value } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={selectImages(value.images)}
        title={ value.title }
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          { value.title }
        </Typography>
        <Typography component="p">
          { value.description }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

const ComicsTableComponent = (props) => {
  const { data, classes } = props;
  const spacing = '8';

  return (
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={12}>
        <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
          {data.map(value => {
            if (value.images && value.images.length > 0) {
              return (            
                <Grid key={value.id} item>
                  <Paper className={classes.paper}>
                    <CardComic classes={classes} value={value}/>
                  </Paper>
                </Grid>
              )
            }})}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(ComicsTableComponent);