const cart = require('./asgnm_14_data');

  // Print No: of prime items
  var prime_items = cart.filter(item => item.type === 'prime').length;
  console.log(`There are ${prime_items} prime items in the cart.\n`);
  
  // Lists the name of all prime items
  console.log("The names of the prime items are:");
cart.forEach(cart => {if(cart.type==='prime'){console.log(cart.name)}});

  // Lists the name of all non-prime items
  console.log("\nThe names of the non-prime items are:");
cart.forEach(cart => {if(cart.type!='prime'){console.log(cart.name)}});

//   Apply 20% discount to all tech items and print the cart
  var discount = cart.map(items => { return Object.assign({}, items, 
            {
                price: (items.price * 0.8).toFixed(2)
            } 
        )});    
//   console.log(discount);

  // Find total cost of all prime items
  var total_prime_cost = cart.filter(items => items.type === 'prime').map(item => item.price).reduce((a,b)=>a+b);
  console.log(`\nThe total cost of all prime items is $${total_prime_cost.toFixed(2)}`);

  // Find total cost of all regular items
  var total_regular_cost = cart.filter(items => items.type === 'regular').map(item => item.price).reduce((a,b)=>a+b);
  console.log(`The total cost of all regular items is $${total_regular_cost.toFixed(2)}\n`);

  // divide the cart into 2 (Prime cart and regular cart) and print
  var prime_cart = cart.filter(items => items.type === 'prime');
  var regular_cart = cart.filter(items => items.type === 'regular');
//   console.log(prime_cart, regular_cart);

  // List all the food item.
  var food_items = cart.filter(items => items.category === 'food');
//   console.log(food_items);