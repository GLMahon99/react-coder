import React,{useState, useEffect} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const data = [
    {
        id: "TPE01",
        title: "tapones moldeables",
        price: 1680,
        description: "lorem ipsum",
        pictureUrl:""
    },
]



function ItemListContainer(greting){

    const [data, setData] = useState();
 
    useEffect(()=>{
        new Promise((resolve, reject)=>{
            setTimeout(resolve(data), 2000);
        }).then(
            function(referenceResolve){
            setData(referenceResolve);
        })
    })

    return(
        <div className="" style={{width:'40%'}}>
            <h5 style={{color:'white', backgroundColor:'blue'}}>Titulo Producto</h5>
            <ItemList/>
            <ItemCount stock={3} initial={1}/>
        </div>
        )
}

export default ItemListContainer;