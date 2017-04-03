import { createStore } from 'redux'

export default function app() {
  const url = 'http://tiny-za-server.herokuapp.com/collections/dres-cafe'
  const apiUrl = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json';

  const initialState = {
    cart: {},
    subtotal: null,
    tax: 1.08,
    finalTotal: null,
    view: menuView
  }

  const reducer = function (currentState, action){
    if (currentState === undefined){
      return initialState;
    }


  }//end of reducer
  const store = createStore(reducer, initialState);

  const render = function(){
    let state = store.getState();
    $('#app').html(state.view(store));
  };

  store.subscribe(render);


}//end of export
