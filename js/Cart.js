var d = document,
    itemBox = null,
    cartCont = null;

function initializeCart(){
    itemBox = d.querySelectorAll('.item_box'); // блок каждого товара
    cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
	// Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
	for(var i = 0; i < itemBox.length; i++){
	  addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
	}
}

function updateCount(){
	var cartData = getCartData() || {};
	var count = Object.keys(cartData).length;
	document.getElementById('product-count').textContent = count;
}

// Функция кроссбраузерной установка обработчика событий
function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, function(){ handler.call( elem ); });
  }
  return false;
}
// Получаем данные из LocalStorage
function getCartData(){
  return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o){
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
}
// Добавляем товар в корзину
function addToCart(e){
  this.disabled = true; // блокируем кнопку на время операции с корзиной
  var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
      parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
      itemId = this.getAttribute('data-id'); // ID товара
  if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
    cartData[itemId][0] += 1;
  } else { // если товара в корзине еще нет, то добавляем в объект
    cartData[itemId] = [1];
  }
  if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
    this.disabled = false; // разблокируем кнопку после обновления LS
  }
  updateCount();
  
  return false;
}

/* Открыть корзину */
//addEvent(d.getElementById('checkout'), 'click', openCart);
/* Очистить корзину */
function clearCart(){
  localStorage.removeItem('cart');
}

function removeProductFromCart(productId){
	var cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
	
	if(cartData.hasOwnProperty(productId)){
		delete cartData[productId];
	}
	
	setCartData(cartData);
}

function changeCount(productId, count){
	var cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
	
	if(cartData.hasOwnProperty(productId)){
		cartData[productId] = count;
	}
	
	setCartData(cartData);
}