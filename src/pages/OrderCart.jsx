import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Import Context
import {useContext} from '../context/CartContext'

//Import Firestore
import { getFirestore } from '../firebase';

const OrderCart = () => {

  // Context
  const { listCart, totalPriceCart } = useContext();
  // State
  const [ order, setOrder ] = useState("");
  const [ formData, setFormData ] = useState({});
  // Firestore
  const db = getFirestore();


  const handleChange = (evt) => {
    const value = evt.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        [evt.target.name]: value
      }
    });
  }


  const sendFormData = (e) => {
    e.preventDefault()

    console.log('formdata', {
      buyer: formData,
      items: listCart,
      total: totalPriceCart,
    });


    db.collection("purchase order").add({
      formData,
      listCart,
      totalPriceCart,
    })
    .then((docRef) => {
        console.log("Document ref id ", docRef.id);
        setOrder(docRef.id);
    })
    .catch((error) => {
        console.error("Error", error);
    });

  }


  useEffect(() => {

    const items = db.collection("items").doc("1")
    items.get().then(querySnapshot => {
      let sendData = querySnapshot.data();
      console.log('ejemplo de envio de datos', sendData);
    })


  }, [])


  return (
    <div style={{marginTop:"5%", marginBottom:"5%"}}>
      <div className="container">
        <Link to='/cart'>
          <button className="btn btn-secondary">Regresar al carrito</button>
        </Link>
      </div>
      <div >
      <form id="form" className="container">
            <div class="row row-cols-md-2 row-cols-sm-1">
                <div className="col">

                    <div class="my-2">
                        <label for="full-name" className="form-label">Nombre</label>
                        <input id="full-name" type="text" className="form-control" name="name"
                            placeholder="ingresa tu nombre" onChange={handleChange}/>
                    </div>
                    <div className="my-2">
                        <label for="full-name" className="form-label">Apellido</label>
                        <input id="surname" type="text" className="form-control" name="surname"
                            placeholder="ingresa tu Apellido" onChange={handleChange}/>
                    </div>
                    <div className="my-2">
                        <label for="full-name" className="form-label">DNI</label>
                        <input id="dni" type="text" className="form-control" name="dni" placeholder="ingresa tu DNI" onChange={handleChange}/>
                    </div>
                    <div className="my-2">
                        <label for="full-name" className="form-label">Dirección</label>
                        <input id="direccion" type="text" className="form-control" name="direccion" placeholder="" onChange={handleChange}/>
                    </div>

                </div>
                <div className="col">
                    <div className="my-2">
                        <label for="exampleInputEmail1" className="form-label">Numero de teléfono</label>
                        <input type="tel" className="form-control" id="num-phone" name="num-phone"
                            placeholder="ingresa tu numero de teléfono o celular" onChange={handleChange}/>
                        <div class="my-2">
                            <label for="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                                aria-describedby="emailHelp" placeholder="ejemplo@gmail.com" onChange={handleChange}/>
                        </div>
                        
                    </div>


                </div>
                
            </div>
            <button className="btn btn-primary" onClick={sendFormData} >Confirmar compra</button>
        </form>
      </div>
{
        order && (
          <div>
            <h3>Numero de orden:</h3>
            <h4>{order}</h4>
          </div>
        )
      }
      
    </div>
  )

}



export default OrderCart;