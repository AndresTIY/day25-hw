import { createStore } from 'redux'

export default function app() {
  const url = 'http://tiny-za-server.herokuapp.com/collections/dres-cafe'
  const apiUrl = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json';

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

    switch(action.type){
      case "LOAD_ITEMS":
        $.getJSON(apiUrl).then(function(data, i, arr){
          // store.dispatch({type:"ITEMS_LOADED", allData: data})
          console.log(Object.keys(data));
        });
        return currentState;

      case "ITEMS_LOADED":

      case "NOOP":
        return currentState;

      default:
        return currentState;
    }//end of switch




  }//end of reducer
  const store = createStore(reducer, initialState);

  const render = function(){
    let state = store.getState();
    $('#app').html(state.view(store));
  };



  store.subscribe(render);
  store.dispatch({type:"NOOP"});







  //-------Menu View-------
  function menuView(store){
    let $html = $(`
        <div>
        <header>
          <h1>Dres Cafe</h1>
        </header>
        <div class="container">
          <h2>Menu</h2>
          <div class="menu"></div>
        </div></div>`)


    var menuFiller = menuFill(store);
    $($html).find('.menu').html(menuFiller);
    var showCart = cartView(store);
    $($html).append(showCart);

    store.dispatch({type:"LOAD_ITEMS"})


    return $html;
  }//end of menuView

  //------Menu Populate View?----
  function menuFill(store){
    let $html = $(`
      <h3 class="category"></h3>
      <div class="item-card">
        <p class="item-line">
          <span class="item">item</span>
          <span class="price">price</span>
        </p>
        <p class="descr-line">
          <span class="description">description</span>
          <span class="icons">icons</span>
        </p>
        <button>Add To Cart</button
    </div>`);

    let $item = $($html).find('.item');
    let $price = $($html).find('.price');
    let $descr = $($html).find('.description')
    let $icon = $($html).find('.icons')
    let $addToCart = $($html).find('button');


    $addToCart.on('click', function(e){
      console.log('it clicks!');
    })


    return $html;
  }


  //------Cart View--------
  function cartView(store){
    let $html = $(`
      <div class="cart-card">
        <h3>Your Order</h3>
        <p class="cart-items">
          <span class="cart-item">item</span>
          <span class="cart-price">price</span>
        </p>
        <p class="subtotal">subtotal</p>
        <p class="tax">tax</p>
        <p class="total">total</p>
        <button type="button" name="button">ORDER NOW</button>
      </div>`)

    let $cartItem = $($html).find('.cart-item');
    let $cartPrice = $($html).find('.cart-price');
    let $subtotal = $($html).find('.subtotal');
    let $total = $($html).find('.total');
    let $orderBtn = $($html).find('button');
    $orderBtn.on('click', function(e){
      console.log('order button clicks!');
    })

    return $html;
  }//end of cartView

  //------Confirmation View---
  function confirmView(store){

  }

}//end of export
