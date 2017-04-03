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








  //-------Menu View-------
  function menuView(){
    let $html = $(`
        <header>
          <h1>Dres Cafe</h1>
        </header>
        <div class="container">
          <h2>Menu</h2>
          <div class="menu">${menuFiller}</div>
        </div>`)

    let menuFiller = menuFill();
    return $html;
  }//end of menuView

  //------Menu Populate View?----
  function menuFill(){
    let $html = $(`
      <h3 class="category"></h3>
      <div class="item-card">
        <p class="item-line">
          <span class="item"></span>
          <span class="price"></span>
        </p>
        <p class="descr-line">
          <span class="description"></span>
          <span class="icons"></span>
        </p>
    </div>`);


    return $html;
  }


  //------Cart View--------
  function cartView(){
    let $html = $(`
      <div class="cart-card">
        <h3>Your Order</h3>
        <p class="cart-items">
          <span class="cart-item"></span>
          <span class="cart-price"></span>
        </p>
        <p class="subtotal"></p>
        <p class="tax"></p>
        <p class="total"></p>
        <button type="button" name="button">ORDER NOW</button>
      </div>`)

    return $html;
  }//end of cartView

  //------Confirmation View---
  function confirmView(){

  }
}//end of export
