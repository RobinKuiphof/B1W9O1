alert("Welkom bij Het Cafe het leukste cafe van nederland!");

var totaalprijs = 0


function bestelling(){ // stelt de vraag wat je wil bestellen
	return prompt("Wat wilt u bestellen? fris, bier of wijn of een snack.");
}
function prijsproduct(aantal, prijs){ // rekent de prijs van het product uit
	return aantal * prijs
}
function rekening(naam , aantal, priceproduct){ // schrijft het aantal producten de naam van het product en de prijs van her product
	document.write(naam +": aantal:" + aantal + " prijs:" + priceproduct + " euro " + "<br>");
}
function eindprijs(totaalprijs, price){ // rekent de eindprijs uit
	return totaalprijs + price
}


	while(vraag != "stop"){
		var vraag = bestelling();
		if(vraag == "fris"){
			var aantal = prompt("Hoeveel fris wilt u?")
			var prijs = 2.25
			var price = prijsproduct(aantal, prijs);
			var naam = "fris"
			rekening(naam, aantal, price);
			var totaalprijs = eindprijs(totaalprijs, price);
		}
		else if(vraag == "bier"){
			var aantal = prompt("Hoeveel bier wilt u");
			var prijs = 2.25
			var price = prijsproduct(aantal, prijs);
			var naam = "bier"
			rekening(naam, aantal, price);
			var totaalprijs = eindprijs(totaalprijs, price);
		}
		else if(vraag == "wijn"){

			var aantal = prompt("Hoeveel wijn wilt u");
			var prijs = 2.85
			var price = prijsproduct(aantal, prijs);
			var naam = "wijn"
			rekening(naam, aantal, price);
			var totaalprijs = eindprijs(totaalprijs, price);
		}
		else if(vraag == "stop"){
			var vraag = "stop"
		}
		else if(vraag == "snack"){
			var aantalbit = prompt("Hoeveel bitterballen wilt u toevoegen 8 of 16")
			if(aantalbit == 8){
				var aantal = prompt("Hoeveel schalen wilt u");
				var prijs = 2.4
				var price = prijsproduct(aantal, prijs);
				var naam = "8 bitterballen"
				rekening(naam, aantal, price);
				var totaalprijs = eindprijs(totaalprijs, price);
			}
			else if(aantalbit == 16){
				var aantal = prompt("Hoeveel schalen wilt u");
				var prijs = 4.1
				var price = prijsproduct(aantal, prijs);
				var naam = "16 bitterballen"
				rekening(naam, aantal, price);
				var totaalprijs = eindprijs(totaalprijs, price);
			}
			else{
		 	alert("De snacks zijn niet toegevoegd aan de bestelling");
		 	}
		}
		else{
			alert("Uw bestelling kan niet worden toegevoegd");
		}	
	}

document.write("Totaal: " + totaalprijs + " euro ")


