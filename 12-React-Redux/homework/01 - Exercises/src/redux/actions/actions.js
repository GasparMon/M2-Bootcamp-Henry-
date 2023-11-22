import { ADD_PRODUCT, DELETE_PRODUCT } from "./types"
import axios from 'axios';

export const addProduct = (product) => {

    return{
        type: ADD_PRODUCT,
        payload: product,
    }
}

export const deleteProduct  = (id) => {

    return {

        type: DELETE_PRODUCT,
        payload: id,
    }
}

export const getStoreName = () => {
    return async function (dispatch) {
      try {
        // Realiza la solicitud GET a la API
        let response = await axios.get('http://localhost:3001/store');
  
        // Retorna un objeto con el tipo y la respuesta como payload
        return dispatch({
          type: 'GET_STORE_NAME',
          payload: response.data.name // Ajusta según la estructura de tu respuesta
        });
      } catch (error) {
        // Manejar errores si es necesario
        console.error('Error al obtener el nombre de la tienda:', error);
      }
    };
  };