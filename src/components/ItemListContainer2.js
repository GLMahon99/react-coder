import React,{useState, useEffect} from 'react';

import ItemList from './ItemList';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));



const dataProduct = async () => {
    const data = await fetch("./src/api.json")
    const product = await data.json();
    console.log(product);
};



function ItemListContainer(){
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [loading , setLoading] = useState(false);
    
 
    useEffect(()=>{
        //cuando entres a esta promise,dime que esta seteado en true
        setLoading(true)
        new Promise((resolve, reject)=>{
            setTimeout(() => resolve(dataProduct), 5000);
        }).then(
            (dataResolve) => {
            setData(dataResolve);
            //pero una vez que la resuelva setea como false
            setLoading(false);
        })
    }, [])
    //condicion si esta cargando o no
    if(loading){
        return(
            <div className={classes.root}>
      <CircularProgress />
      
    </div>
        )
    }
    return(
        <div >
            {data.map((item) => <ItemList {...item}/>)}
            
        </div>
        )
}

export default ItemListContainer;