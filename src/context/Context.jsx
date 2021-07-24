import React, {useState, useEffect} from "react";
export const Context = React.createContext();
export const useContext = () => React.useContext(Context);

const dataBase = [{
  id: 1,
  codigo: "TPE01",
  titulo: "Tapones para oídos silicona hipoalergénica moldeable 12 cajas (24 pares)",
  precio: 1650,
  color: "incoloro",
  img: "images/inc.png",
  descripcion: [
      "Se adaptan cómodamente al oído.",
      "Mejoran notablemente la calidad de horas de sueño, aislando los ruidos molestos.",
      "Protegen del ingreso de agua al conducto auditivo.",
      "Reducen 22 decibeles.",
      "Incluye estuche para su almacenamiento."
  ]

}, 
{
  id: 2,
  codigo: "TPE02",
  titulo: "Tapones para oídos silicona hipoalergénica moldeable 12 cajas (24 pares)",
  precio: 1650,
  color: "fluo",
  img: "images/fluo.png",
  descripcion: [
      "Se adaptan cómodamente al oído.",
      "Mejoran notablemente la calidad de horas de sueño, aislando los ruidos molestos.",
      "Protegen del ingreso de agua al conducto auditivo.",
      "Reducen 22 decibeles.",
      "Incluye estuche para su almacenamiento."
  ]

} ,
{   
  id: 3,
  codigo: "TPE05",
  titulo: "Tapones para oídos silicona hipoalergénica moldeable 12 cajas (24 pares)",
  precio: 1650,
  color: "nude",
  img: "images/nude.png",
  descripcion: [
      "Se adaptan cómodamente al oído.",
      "Mejoran notablemente la calidad de horas de sueño, aislando los ruidos molestos.",
      "Protegen del ingreso de agua al conducto auditivo.",
      "Reducen 22 decibeles.",
      "Incluye estuche para su almacenamiento."
  ]

},
{
  id: 4,
  codigo: "TPE03",
  titulo: "Tapones para oídos Goma Soft Expandible por 12 cajas (12 pares)",
  precio: 1224,
  color: "naranja",
  img: "images/soft.png",
  descripcion: [
      "Protegen de ruidos molestos, transito vehicular,música, máquinas, etc.",
      "Reducen 29 decibeles.",
      "Se ajustan sellando el canal auditivo.",
      "Tapones con cordón.",
      "Incluye estuche para su almacenamiento."
      
  ]

},
{
  id: 5,
  codigo: "TPE04",
  titulo: "Tapones para oídos silicona Vulcanizada Hipoalergénica por 12 cajas (12 pares)",
  precio: 1260,
  color: "verde",
  img: "images/vulcan.png",
  descripcion: [
      "Protegen de ruidos molestos, transito vehicular, música, máquinas, etc.",
      "Protegen del ingreso de agua al conducto auditivo.",
      "Reducen 26 decibeles.",
      "Tapones con cordón.",
      "Se adaptan cómodamente al oído. Máxima adherencia."
      
  ]

},
{
  id: 6,
  codigo: "TPE06",
  titulo: "Tapones para oídos SPLASH Silicona Moldeable por 12 cajas (24 pares)",
  precio: 1650,
  color: "amarillo fluo",
  img: "images/splash.png",
  descripcion: [
      "Se adaptan cómodamente al oído. Máxima adherencia.",
      "Protegen del ingreso de agua al conducto auditivo. Ayudan a prevenir infecciones.",
      "Ideal para deportes acuáticos. Para uso en pileta, playa y ducha.",
      "Incluye estuche para su almacenamiento.",
      "Su color amarillo fluo permite localizarlos fácilmente en caso de extravío."
  ]

}]

export const ContextProvider = props => {
  // const [list, setList] = useState([]);

  const [dataProducts, setDataProducts] = useState(dataBase);
  
  

  // const productsAdd = itemCount => {
  //   if (list.find(item => item.id === itemCount.id)) {
  //     const newCartItem = list.map(item => {
  //       if (item.id === itemCount.id) {
  //         return { ...item, count: itemCount.count + item.count };
  //       }
  //       return item;
  //     });
  //     setList(newCartItem);
  //   } else {
  //     setList(state => {
  //       return [...state, itemCount];
  //     });
  //   }
  // };

  return (
    <Context.Provider value={{   dataProducts, setDataProducts}}>
      {props.children}
    </Context.Provider>
  );
};