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
          store.dispatch({
            type:"ITEMS_LOADED",
            allData: data,
        });
      })
        return currentState;

      case "ITEMS_LOADED":
        var newState = {
          allData: action.allData,
        }

      return Object.assign({}, currentState, newState);


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
  store.dispatch({type:"LOAD_ITEMS"});







  //-------Menu View-------
  function menuView(store){
    let state = store.getState();
    let $html = $(`
        <div>
          <header>
            <h1>Dres Cafe</h1>
          </header>
          <div class="container">
            <h2>Menu</h2>
            <div class="menu"></div>
          </div>
        </div>`)

    let $menu = $($html).find('.menu');
    $($menu).html(`
      <div><h3 class="bfast">Breakfast</h3></div>
      <div><h3 class="sandwich">Sandwiches</h3></div>
      <div><h3 class="toppings">Toppings</h3></div>
      <div><h3 class="sides">Sides</h3></div>
      <div><h3 class="salads">Salads</h3></div>
      <div><h3 class="soups">Soups</h3></div>
      <div><h3 class="drinks">Drinks</h3></div>
      <div><h3 class="desserts">Desserts</h3></div>
      <div><h3 class="vera">veraDesserts</h3></div>
      `);

    let bfast = $menu.find('.bfast')
    let sandwich = $menu.find('.sandwich')
    let toppings = $menu.find('.toppings')
    let sides = $menu.find('.sides')
    let salads = $menu.find('.salads')
    let soups = $menu.find('.soups')
    let drinks = $menu.find('.drinks')
    let desserts = $menu.find('.desserts')
    let vera = $menu.find('.vera')

    $.ajax({
      type: "GET",
      url: apiUrl,
      dataType: 'json'
    }).then ((data)=>{
      //append items
      appendAll(data.breakfast, bfast)
      appendAll(data.sandwiches, sandwich)
      appendAll(data.toppings, toppings)
      appendAll(data.sides, sides)
      appendAll(data.salads, salads)
      appendAll(data.soups, soups)
      appendAll(data.drinks, drinks)
      appendAll(data.desserts, desserts)
      appendAll(data.veraDesserts, vera)
    })

    function appendAll(dataCategory, appendElem ){
      dataCategory.forEach(function(item, i, arr){
        var $menuItems = $(`
          <div class="item-card">
            <p class="item-line">
              <span class="item">${item.item}</span>
              <span class="price">${item.price}</span>
            </p>
            <p class="descr-line">
              <span class="description">${item.description}</span>
              <span class="icons">icons</span>
            </p>
            <button>Add To Cart</button
        </div>`)
        $(appendElem).append($menuItems)
        let $addToCart = $($menuItems).find('button');
        $addToCart.on('click', function(e){
          console.log('it clicks!');
        })
      })



    }//end of appendAll
    $($html).append(cartView())






    return $html;
  }//end of menuView




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
