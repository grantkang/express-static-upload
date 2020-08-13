import React from 'react';
import { Typography, GridList, GridListTile } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: 500,
    height: 450
  }
});

export default function Gallery(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h4" align="center" component="h1">Gallery</Typography>
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={4}>
          {props.images.map(image => (
            <GridListTile key={image} cols={2}>
              <img src={`uploads/${image}`} alt={image} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </React.Fragment>
  );
}
