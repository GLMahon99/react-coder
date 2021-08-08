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
  
  const removeItem = _ =>{
    
  }

  return (
    <Context.Provider value={{listCart, productsAdd}}>
      {props.children}
    </Context.Provider>
  );
};