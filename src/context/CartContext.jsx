import React, {useState} from "react";
export const Context = React.createContext();
export const useContext = () => React.useContext(Context);



export const ContextProvider = props => {
  const [listCart, setListCart] = useState([]);
  


  const productsAdd = itemCount => {
    if (listCart.find(item => item.id === itemCount.id)) {
      const newCartItem = listCart.map(item => {
        if (item.id === itemCount.id) {
          return { ...item, count: itemCount.count + item.count };
        }
        return item;
      });
      setListCart(newCartItem);
    } else {
      setListCart(state => {
        return [...state, itemCount];
      });
    }
  };
  
  const removeItemCart = itemCount => {
  // const filterToRemove = listCart.filter((i) => i.id !== itemCount.id )
  
  
  const indice = listCart.indexOf(itemCount.id); 
  listCart.splice(indice, 1)
  
  // console.log('filter',filterToRemove)
  // console.log('splice',listCart)

    

    console.log('splice',listCart)
  
  
  }

  const clear = () =>  setListCart([]);
  // console.log('clear', listCart)
  
  const totalPrice = () => listCart.reduce((accumulator, item) => accumulator + item.price * item.numero, 0);
  

  const totalItems = () => listCart.reduce((accumulator, item) => accumulator + item.numero, 0);
  

    

  return (
    <Context.Provider value={{listCart, productsAdd, removeItemCart, clear, totalPrice, totalItems}}>
      {props.children}
    </Context.Provider>
  );
};