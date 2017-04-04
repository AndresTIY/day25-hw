## Day 25 Homework
#### Explorer Mode

- Create a website for a fictional restaurant that allows customers to place orders online
- Display the MENU by using provided API's
  - API:
    - Fancy Menu: https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json
    - Cafe Menu: https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json
    - Pub Menu: https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json
- Customer should be able to add an item to their order by clicking on the ITEM'S NAME in the menu. Alternatively you can create a button on each menu item that says "add to order"
- Display the total for the customer, and include tax at 8%
- When customer clicks the ORDER NOW button, you should save their order to a tiny-za-server end point
- After clicking the order now button, customer should be taken to a CONFIRMATION SCREEN displaying their order and the total due.

#### Models, Views, and Actions
- Models
  - what models are needed and what data do they hold?
    - cart object {
        item: price,
        item2: price,
        item3: price....
      };
    - subtotal: total of each value in object
    - tax: .08%
    - total: sum * 1.08



  - what custom functions does each model need to be presented?
    - cart object needs a constructor?
    - order now button should send CART OBJECT and TOTAL to server
    - subtotal, forEach(item, i, arr){total += item.price}
      - should run every time anything gets added or deleted

- Views
  - how many views will you need? 3
    - menu-view, retrieves menu items
      - icons need to be displayed under price, active if true, greyed out else
      - categories:
        - breakfast,
        - sandwiches,
        - toppings,
        - sides,
        - salads,
        - soups,
        - drinks,
        - desserts,
        - veraDesserts
      - each category has:
        - id: number
        - item: string
        - price: number
        - description: string
        - local fav: 0 or 1, boolean
        - low sodium: 0 or 1, boolean
        - under 500 cals: 0 or 1, boolean
    - cart-view
      - list item and price
      - subtotal
      - tax
      - total with tax+subtotal
      - order now button
        - Button Should Send Order to Tiny-Za
        - What get's sent?
    - confirmation-view
      - display confirmation message
      - display a receipt
      -

  - what events does each view listen to?
    - listens for change events, retrieves new data from store and provides new data to entire tree of their child views
    - menu view
      - should listen for click event
      - check for local fav, low sodium, under 500 cals, and make icon active if true


    - cart-view should do the adding

    - confirmation-view listens for ORDER NOW button


- Actions
  - how many actions will I need?
  - what data will each Action be dispatched with?

### Steps
- find all classes that need to take in items from api
- initial case should load the full menu, need to extract data from server first
