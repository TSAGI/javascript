const cart = require('./asgnm_14_data');

  // Print No: of prime items
  var prime_items = cart.filter(item => item.type === 'prime').length;
  console.log(`There are ${prime_items} prime items in the cart.\n`);
  
  // Lists the name of all prime items
  var prime_item_names = cart.filter(item => item.type == 'prime').map(item => item.name);
  console.log('The names of the PRIME items in the cart are: '), prime_item_names.forEach(name => console.log(`\t ${name}`));

  // Lists the name of all non-prime items
  var non_prime_names = cart.filter(item => item.type != 'prime').map(item => item.name);
  console.log('\nThe names of NON-PRIME items in the cart are: '), non_prime_names.forEach(name => console.log(`\t ${name}`));
  
//   Apply 20% discount to all tech items and print the cart
  var discount = cart.map(items => { return Object.assign({}, items, 
            {
                price: (items.price * 0.8).toFixed(2)
            } 
        )});    
  console.log(discount);

  // Find total cost of all prime items
  var total_prime_cost = cart.filter(items => items.type === 'prime').map(item => item.price).reduce((a,b)=>a+b);
  console.log(`\nThe total cost of all prime items is $${total_prime_cost.toFixed(2)}`);

  // Find total cost of all regular items
  var total_regular_cost = cart.filter(items => items.type === 'regular').map(item => item.price).reduce((a,b)=>a+b);
  console.log(`The total cost of all regular items is $${total_regular_cost.toFixed(2)}\n`);

  // divide the cart into 2 (Prime cart and regular cart) and print
  var prime_cart = cart.filter(items => items.type === 'prime');
  var regular_cart = cart.filter(items => items.type === 'regular');
  console.log(prime_cart, regular_cart);

  // List all the food item.
  var food_items = cart.filter(items => items.category === 'food');
  console.log(food_items);