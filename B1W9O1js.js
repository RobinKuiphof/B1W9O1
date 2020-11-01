var totaalprijs = 0
function rekening(prijsproduct, aantal, naam){
document.write(naam +": aantal:" + aantal + " prijs:" + prijsproduct + " euro " + "<br>");
var totaalprijs = totaalprijs + prijsproduct
}



function bestelling(){
	while(bestelling != "stop"){
		var bestelling = prompt("Wat wilt u bestellen? fris, bier of wijn of een snack.");
		if(bestelling == "fris"){
			var aantal = prompt("Hoeveel fris wilt u?");
			var prijsproduct = 2.25 * aantal
			var prijs = 2.25
			var totaalprijs = totaalprijs + prijs
			var naam = "fris"
			document.write(naam +": aantal:" + aantal + " prijs:" + prijsproduct + " euro " + "<br>");
		}
		else if(bestelling == "bier"){
			var naam = "bier"
			var aantal = prompt("Hoeveel bier wilt u");
			var prijsproduct = 2.25 * aantal
			var totaalprijs = totaalprijs + prijs
			var prijs = 2.25
			document.write(naam +": aantal:" + aantal + " prijs:" + prijsproduct + " euro " + "<br>");
		}
		else if(bestelling == "wijn"){
			var naam = "wijn"
			var aantal = prompt("Hoeveel wijn wilt u");
			var prijsproduct = 2.85 * aantal
			var totaalprijs = totaalprijs + prijs
			var prijs = 2.85
			document.write(naam +": aantal:" + aantal + " prijs:" + prijsproduct + " euro " + "<br>");
		}
		else if(bestelling == "stop"){
			var bestelling = "stop"
		}
		else if(bestelling == "snack"){
			var aantalbit = prompt("Hoeveel bitterballen wilt u toevoegen 8 of 16")
			if(aantalbit == 8){
				var naam = "8 bitterballen"
				var aantal = prompt("Hoeveel schalen wilt u");
				var prijsproduct = 2.4 * aantal
				var prijs = 2.4
				var totaalprijs = totaalprijs + prijs
				document.write(naam +": aantal:" + aantal + " prijs:" + prijsproduct + " euro " + "<br>");
			}
			else if(aantalbit == 16){
				var naam = "16 bitterballen"
				var aantal = prompt("Hoeveel schalen wilt u");
				var prijsproduct = 4.1 * aantal
				var prijs = 4.1
				var totaalprijs = totaalprijs + prijs
				document.write(naam +": aantal:" + aantal + " prijs:" + prijsproduct + " euro " + "<br>");
			}
			else{
		 	alert("Uw bestelling kan niet worden toegevoegd");
		 	}
		}
		else{
			alert("Uw bestelling kan niet wordenj toegevoegd");
		}	
	}
}


bestelling();
