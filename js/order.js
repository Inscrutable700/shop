$$r(function() {
	var cartData = getCartData();
	for(var productId in cartData){
		var product = products[productId];
		var count = cartData[productId][0];
		var productsContainer = document.getElementById("cart-products");
		
		//Add new product
		var image = "<img src = '" + product.image + "' alt='' width = 400px>";
		var productTitle = "<p><span id='productTitle'>" + product.title + ", " + product.weight + " г</span><span id='productPrice'><br />" + product.price + " грн</span></p>";
		var shortDescription = "<br /> <p>" + product.shortDescr + "</p>";
		var counter = "<input type='number' data-id='" + productId + "' value='" + count + "' onchange='changeCountForProduct(this)'/>";
		var removeButton = "<input type='button' data-id='" + productId + "' value='Удалить из корзины' onclick='removeFromCart(this)' />";
		
		var productInfo =  "<div id=" + productId + " data-id='" + productId + "'>" + image + productTitle + shortDescription + counter + removeButton + "</div>";
		productsContainer.innerHTML += productInfo;
	}
});

function sendForm(e){
	
	var cartData = getCartData();
	var info = "";
	for(var productId in cartData){
		var product = products[productId];
		var count = cartData[productId][0];
		info += product.title + " " + product.weight + " г,  " + product.price + " грн. В количестве " + count + "\n";
	}
	document.getElementById('product').value = info;
	var data = $("#send-form").serialize();
	
	$.ajax({
		 type: "POST",
		 url: 'post.php',
		 data: data,
		 success: function() {
			  clearCart();
		 }
	});
}

function removeFromCart(e){
	var productId = e.getAttribute('data-id');
	removeProductFromCart(productId);
	$('#' + productId).remove();
} 

function changeCountForProduct(e){
	changeCount(e.getAttribute("data-id"), e.value);
}

//addEvent(d.getElementById('clear_cart'), 'click', clearCart);