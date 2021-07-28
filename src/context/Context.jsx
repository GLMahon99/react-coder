import React, {useState, useEffect} from "react";
export const Context = React.createContext();
export const useContext = () => React.useContext(Context);



export const ContextProvider = props => {
  const [list, setList] = useState([]);

  
  
  

  const productsAdd = itemCount => {
    if (list.find(item => item.id === itemCount.id)) {
      const newCartItem = list.map(item => {
        if (item.id === itemCount.id) {
          return { ...item, count: itemCount.count + item.count };
        }
        return item;
      });
      setList(newCartItem);
    } else {
      setList(state => {
        return [...state, itemCount];
      });
    }
  };

  return (
    <Context.Provider value={{ list, productsAdd   }}>
      {props.children}
    </Context.Provider>
  );
};