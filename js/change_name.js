	//Все что должно выполниться после загрузки html, вставлять сюда
	$$r(function() {
		var density = window.location.search.substring(9);
		if (density == 1){
				document.getElementById("name").innerHTML = product[1].title + ' ' + product[1].weight + " г";
				document.getElementById("price").innerHTML = product[1].price + " грн.";
				document.getElementById("image").src = product[1].image;
				a = 1;
		} else if (density == 2){
				document.getElementById("name").innerHTML = product[4].title + ' ' + product[4].weight + " г";
				document.getElementById("price").innerHTML = product[4].price + " грн.";
				document.getElementById("image").src = product[4].image;
				a = 4;
		} else if (density == 3){
				document.getElementById("name").innerHTML = product[7].title + ' ' + product[7].weight + " г";
				document.getElementById("price").innerHTML = product[7].price + " грн.";
				document.getElementById("image").src = product[7].image;
				a = 7;
		} else {
				document.getElementById("name").innerHTML = product[1].title + ' ' + product[1].weight + " г";
				document.getElementById("price").innerHTML = product[1].price + " грн.";
				document.getElementById("image").src = product[1].image;
				a = 1;
		}
	    olyx();

	});
			var a;
			var density = window.location.search.substring(9);
			function choiceWeight(){
			document.getElementById("buy").href = "order.html?id="+a;
			//var a = document.getElementById("name").innerHTML;
			//var b = document.getElementById("price").innerHTML;
			//var c = document.getElementById("image").src;
			//document.getElementById("redirect").href = "buy.html?"+btoa("ves="+a+"&price="+b+"&myUrl="+c);
		}
		
//Sugaris 650 g		
		function change1(){
			if (density == 1){
			document.getElementById("name").innerHTML = product[1].title + ' ' +product[1].weight + " г";
			document.getElementById("price").innerHTML = product[1].price + " грн.";
			document.getElementById("image").src = product[1].image;
			a = 1;
			} else if (density == 2){
			document.getElementById("name").innerHTML = product[4].title + ' ' + product[4].weight + " г";
			document.getElementById("price").innerHTML = product[4].price + " грн.";
			document.getElementById("image").src = product[4].image;
			a = 4;		
			} else if (density == 3){
			document.getElementById("name").innerHTML = product[7].title + ' ' + product[7].weight + " г";
			document.getElementById("price").innerHTML = product[7].price + " грн.";
			document.getElementById("image").src = product[7].image;
			a = 7;	
			} else {
			document.getElementById("name").innerHTML = product[1].title + ' ' + product[1].weight + " г";
			document.getElementById("price").innerHTML = product[1].price + " грн.";
			document.getElementById("image").src = product[1].image;
			a = 1;
			}
		}
		
//Sugaris 400 g	
		function change2(){
			if (density == 1){
			document.getElementById("name").innerHTML = product[2].title + ' ' + product[2].weight + " г";
			document.getElementById("price").innerHTML = product[2].price + " грн.";
			document.getElementById("image").src = product[2].image;
			a = 2;
			} else if (density == 2){
			document.getElementById("name").innerHTML = product[5].title + ' ' + product[5].weight + " г";
			document.getElementById("price").innerHTML = product[5].price + " грн.";
			document.getElementById("image").src = product[5].image;
			a = 5;		
			} else if (density == 3){
			document.getElementById("name").innerHTML = product[8].title + ' ' + product[8].weight + " г";
			document.getElementById("price").innerHTML = product[8].price + " грн.";
			document.getElementById("image").src = product[8].image;
			a = 8;	
			} else {
			document.getElementById("name").innerHTML = product[2].title + ' ' + product[2].weight + " г";
			document.getElementById("price").innerHTML = product[2].price + " грн.";
			document.getElementById("image").src = product[2].image;
			a = 2;
			}
		}
		
//Sugaris 350 g	
		function change3(){
			if (density == 1){
			document.getElementById("name").innerHTML = product[3].title + ' ' + product[3].weight + " г";
			document.getElementById("price").innerHTML = product[3].price + " грн.";
			document.getElementById("image").src = product[3].image;
			a = 3;
			} else if (density == 2){
			document.getElementById("name").innerHTML = product[6].title + ' ' + product[6].weight + " г";
			document.getElementById("price").innerHTML = product[6].price + " грн.";
			document.getElementById("image").src = product[6].image;
			a = 6;		
			} else if (density == 3){
			document.getElementById("name").innerHTML = product[9].title + ' ' + product[9].weight + " г";
			document.getElementById("price").innerHTML = product[9].price + " грн.";
			document.getElementById("image").src = product[9].image;
			a = 9;	
			} else {
			document.getElementById("name").innerHTML = product[3].title + ' ' + product[3].weight + " г";
			document.getElementById("price").innerHTML = product[3].price + " грн.";
			document.getElementById("image").src = product[3].image;
			a = 3;
			}
		}