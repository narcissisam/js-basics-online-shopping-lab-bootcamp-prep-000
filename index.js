var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(99*(Math.random()));
  cart.push(new Object({[item]: price}));
  return ([item] +' has been added to your cart.');
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."}
  else if (cart.length === 1){
    return "In your cart, you have "+Object.keys(cart[0])+ " at $"+cart[0][Object.keys(cart[0])]+"."
  }
    else if (cart.length ===2){
      return ('In your cart, you have '+Object.keys(cart[cart.length-2])+ " at $"+cart[cart.length-2][Object.keys(cart[cart.length-2])]+ ", and " +Object.keys(cart[cart.length-1])+" at $"+cart[cart.length-1][Object.keys(cart[cart.length-1])] +'.');
      }
      else {
        var mystring = "In your cart, you have "
        
      }
}
function total() {
  var z = 0;
  for (let i=0; i< cart.length; i++){
    z += cart[i][Object.keys(cart[i])]}
    return z;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++)
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      return cart;
    }
    console.log('That item is not in your cart.')
    return cart
}

function placeOrder(cardNumber) {
  if(cardNumber) {
    console.log('Your total cost is'+total+'and will be charged to the card'+cardNumber+".");
  for (var i=cart.length; i>=0; i--){
    cart.pop()}
  }
  else {
    return('Sorry, we don\'t have a credit card on file for you.');
  }
  return cart;
}