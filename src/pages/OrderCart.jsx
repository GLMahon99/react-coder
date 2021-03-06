import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Import Context
import {useContext} from '../context/CartContext'

//Import Firestore
import { getFirestore } from '../firebase';

const OrderCart = () => {

  // Context
  const { listCart, totalPriceCart, clear, totalItems } = useContext();
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
                        <label for="full-name" className="form-label">Direcci??n</label>
                        <input id="direccion" type="text" className="form-control" name="direccion" placeholder="" onChange={handleChange}/>
                    </div>

                </div>
                <div className="col">
                    <div className="my-2">
                        <label for="exampleInputEmail1" className="form-label">Numero de tel??fono</label>
                        <input type="tel" className="form-control" id="num-phone" name="num-phone"
                            placeholder="ingresa tu numero de tel??fono o celular" onChange={handleChange}/>
                        <div class="my-2">
                            <label for="exampleInputEmail1" className="form-label">Correo Electr??nico</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                                aria-describedby="emailHelp" placeholder="ejemplo@gmail.com" onChange={handleChange}/>
                        </div>
                        
                    </div>


                </div>
                
            </div>
            <div>
              <div><span>Cantidad de items: {totalItems()}</span></div>
              <div><span>Total de la compra: $ {totalPriceCart}</span></div>
            </div>
            <button className="btn btn-primary my-2" onClick={sendFormData} >Confirmar compra</button>
        </form>
      </div>
{
        order && (

          <div class="alert alert-success container w-50" role="alert">
            <Link to='/' style={{textDecoration:"none", color:"gray"}}><span className="d-flex justify-content-end" onClick={clear}>cerrar</span></Link>
            <h4 class="alert-heading">Compra realizada!!!</h4>
            <p>Total de la compra: ${totalPriceCart} </p>
            <hr></hr>
            <p class="mb-0">Numero de orden: {order}</p>
          </div>
        )
      }
      
    </div>
  )

}



export default OrderCart;