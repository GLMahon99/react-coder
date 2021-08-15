import React, {useState, useEffect} from "react";
export const Context = React.createContext();
export const useContext = () => React.useContext(Context);



export const ContextProvider = props => {

  const [listCart, setListCart] = useState([]);
  const [totalPriceCart, setTotalPriceCart] = useState(0)
  


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
  
  // const removeItemCart = (itemCount) => {
  //   const filterToRemove = listCart.filter((i) => i.id !== itemCount.id);
  //   setListCart(filterToRemove);
  //   };
  // Funcio removeItemCart reducida
  const removeItemCart = (itemCount) => {setListCart(listCart.filter((i) => i.id !== itemCount.id))
    console.log(listCart)
  };

  

  const clear = () =>  setListCart([]);
  // console.log('clear', listCart)
  
  

  const totalItems = () => listCart.reduce((accumulator, item) => accumulator + item.count, 0);
  
  useEffect(() => {
    // Calculate total price
    let result = listCart.reduce((accumulator, item) => accumulator + item.price * item.count, 0)
    setTotalPriceCart(result);

    
  }, [listCart])

    

  return (
    <Context.Provider value={{listCart, productsAdd, removeItemCart, clear, totalPriceCart, totalItems}}>
      {props.children}
    </Context.Provider>
  );
};