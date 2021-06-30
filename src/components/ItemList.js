import React from 'react';
import Item from './Item';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));

//agrupa cada uno de los items
function ItemList (){
  const classes = useStyles();

    return(
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
            <Item/>
        </Grid>
        <Grid item xs={4}>
          <Item/>
        </Grid>
        <Grid item xs={4}>
          <Item/>
        </Grid>
      </Grid>
    </div>   
    )
}

export default ItemList;