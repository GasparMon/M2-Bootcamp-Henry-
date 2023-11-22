import React, { useState } from 'react';
import { connect } from 'react-redux';
import Caja from '../../assets/caja.png';
import './form.css';
import { addProduct } from '../../redux/actions/actions';


class Form extends React.Component{
   constructor(props){
      super(props)

      this.state = {
         name: "",
         price: "",
         id: ""
      }
   }

  

   handleInputChange = (event) => {
      this.setState({ ...this.state, [event.target.name]: event.target.value });
   }

   handleSubmit = () => {
    const { addProduct } = this.props;

    // Crear un objeto con los datos del estado local y asignar un id usando Date.now()
    const product = {
      ...this.state,
      id: Date.now()
    };

    // Ejecutar la función addProduct pasando el objeto product como argumento
    addProduct(product);
  }


 

   render(){
      return (
         <form className='formBg' onSubmit={this.handleSubmit}>
            <div className='inputBox'>
               <label>Nombre: </label>
               <input
                  name='name'
                  onChange={this.handleInputChange}
                  value={this.state.name}
               />
            </div>
            <div className='inputBox'>
               <label>Precio:</label>
               <input
                  type='number'
                  name='price'
                  onChange={this.handleInputChange}
                  value={this.state.price}
               />
            </div>
            <button className='formBtn'>¡ADD!</button>
            <img src={Caja} alt='' className='logo' />
         </form>
      )
   }
}

export function mapDispatchToProps(dispatch) {

   return {

      addProduct: (product) => {

         dispatch(addProduct(product))
      }
   }
}

export default connect(null, mapDispatchToProps)(Form);
