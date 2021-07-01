import React,{useState, useEffect} from 'react';
import ItemCount from './ItemCount';
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



const dataProduct = [
    {
        id: "TPE01",
        title: "tapones moldeables",
        price: 1680,
        description: "lorem ipsum",
        pictureUrl:""
    },
    {
        id: "TPE02",
        title: "tapones moldeables",
        price: 1680,
        description: "lorem ipsum",
        pictureUrl:""
    },
    {
        id: "TPE03",
        title: "tapones moldeables",
        price: 1320,
        description: "lorem ipsum",
        pictureUrl:""
    },
    {
        id: "TPE04",
        title: "tapones moldeables",
        price: 1320,
        description: "lorem ipsum",
        pictureUrl:"",
    },
    {
        id: "TPE05",
        title: "tapones moldeables",
        price: 1680,
        description: "lorem ipsum",
        pictureUrl:""
    },
    {
        id: "TPE06",
        title: "tapones moldeables",
        price: 1680,
        description: "lorem ipsum",
        pictureUrl:""
    }
];



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
    })
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
            <ItemCount stock={3} initial={1}/>
        </div>
        )
}

export default ItemListContainer;