function bestellenfris(){
	var pfris = afris * 2.25
	return pfris
}
function bestellenbier(){
	var pbier = pbier * 2.25
	return pbier
}
function bestellenwijn(){
	var pwijn = awijn * 2.85
	return pwijn
}
function bestellenbitterbal8(){
	var pbitterballen8 = aschalen8 * 2.4 
	return pbitterballen8
}
function bestellenbitterbal16(){
	var pbitterballen16 = aschalen16 * 4.1
	return pbitterballen16
}
function afris(){
	var afris = prompt("hoeveel fris wilt u?");
	return afris
}
function abier(){
	var abier = prompt("hoeveel bier wilt u?");
	return abier
}
function awijn(){
	var awijn = prompt("hoeveel Wijn wilt u?");
	return awijn
}
function aschalen8(){
	var aschalen8 = prompt("hoeveel schalen bitterballen wilt u");
	return aschalen8
}
function aschalen16(){
	var aschalen16 = prompt("hoeveel schalen bitterballen wilt u");
	return aschalen16
}
function prijslijst(){
var totaalprijs = prijsberekening();
var pfris = bestellenfris();
var pbier = bestellenbier();
var pwijn = bestellenwijn();
var pbitterballen8 = bestellenbitterbal8(); 
var pbitterballen16 = bestellenbitterbal16();
document.write("Fris: aantal:" + afris + " prijs:" + pfris + " euro " + "<br>");
document.write("Bier: aantal:" + abier + " prijs:" + pbier + " euro " + "<br>");
document.write("Wijn: aantal:" + awijn + " prijs:" + pwijn + " euro " + "<br>");
document.write("bitterballen 8: aantal:" + aschalen8+ " prijs:" +  pbitterballen8 + " euro " + "<br>");
document.write("bitterballen 16: aantal:" + aschalen16+ " prijs:" + pbitterballen16 + " euro " + "<br>");
document.write("Totaal: " + totaalprijs + " euro ")
}
function prijsberekening(){

	return pfris + pbier + pwijn + pbitterballen8 + pbitterballen16	
}
alert("Welkom bij Het Cafe het leukste cafe van nederland!");
var afris = 0
var abier = 0 
var awijn = 0
var aschalen8 = 0
var aschalen16= 0
var pfris = 0
var pbier = 0
var pwijn = 0
var pbitterballen8= 0
var pbitterballen16 = 0

while(bestelling != "stop"){
	var bestelling = prompt("type het item in wat je wil bestellen. Fris: 2.25 euro ,Bier: 2.25 euro ,Wijn: 2.85 euro of type snack als u een snack wilt. type stop als je de rekening wil.")			
	
	if(bestelling == "Fris"){
		bestellenfris();
	}
	else if(bestelling == "Bier"){
		bestellenbier();
	}
	else if(bestelling == "Wijn"){
		bestellenwijn();
	}
	else if(bestelling == "stop"){
		var bestelling = "stop"
	}
	else if(bestelling == "snack"){
		var abitterballen = prompt("Hoeveel bitterballen wilt u 8 (2.40 euro) of 16 (4.10 euro)")
		if(abitterballen == "8"){
			bestellenbitterbal8();
		}
		else if(abitterballen == "16"){
			bestellenbitterbal16();
		}
		else{
		 	alert("Uw bestelling kan niet wordenj toegevoegd");
		}
	}
	else{
		alert("Uw bestelling kan niet worden toegevoegd");
	}
}
prijsberekening();
prijslijst();

