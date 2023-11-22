import { connect } from 'react-redux';
import React from 'react';
import './products.css';
import { getStoreName } from '../../redux/actions/actions';
import Card from '../Card/Card'
import { useEffect } from 'react';

export function Products({ list, storeName, getStoreName }) {

   useEffect(() => {

      getStoreName();
   }, []);

   return (
      <>
         <div className='productsBg'>
            <h1 className='productsTl'>{storeName}</h1>

            <div className='productsList'>
               {list.map((element, index) => (
                  <Card
                  key={index}
                  name={element.name}
                  price={element.price}
                  id={element.id}
                  />
               ))}
            </div>
         </div>
      </>
   );
}

export function mapStateToProps(state) {

   return {
      list: state.list,
      storeName: state.storeName,
   }
}

export function mapDispatchToProps(dispatch) {

   return {

      getStoreName: function(){

         dispatch(getStoreName())
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
