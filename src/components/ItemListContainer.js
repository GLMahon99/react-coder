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
        <div >
            <ItemList/>
            <ItemCount stock={3} initial={1}/>
        </div>
        )
}

export default ItemListContainer;