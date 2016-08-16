'use strict';
$.urlParam = function(name) {
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results == null) {
		return null;
	}
	else {
		return results[1] || 0;
	}
}
const verbiedstate = -2;
const verbiedcard = -2;
const passtate = -1;
const pascard = -1;
const speler1pas = -1;
const startgame = -2;
const speler1wissel = 0;
var EenEnDertigen = {};
var wisselmetdepot = true;
var startspeler = 1;
function pausecomp(millis) {
	var date = new Date();
	var curDate = null;
	do {
		curDate = new Date();
	}
	while(curDate-date < millis);
}
EenEnDertigen.gameover = function () {
	var eigenhand;
	var score;
	var endscore;
	speler2.cards[0].setSide('front');
	speler2.cards[1].setSide('front');
	speler2.cards[2].setSide('front');
	speler3.cards[0].setSide('front');
	speler3.cards[1].setSide('front');
	speler3.cards[2].setSide('front');
	speler4.cards[0].setSide('front');
	speler4.cards[1].setSide('front');
	speler4.cards[2].setSide('front');
	for (var i = 1; i < 5; i++) {
		switch (i) {
			case 1: eigenhand = EenEnDertigen.handtosymbols(speler1.cards);
				score = EenEnDertigen.scorewissel(eigenhand);
				endscore = score[2];
				if (endscore === 20.5) endscore = score[3];
				$("#scoreone").html(endscore);
				break;
			case 2: eigenhand = EenEnDertigen.handtosymbols(speler2.cards);
				score = EenEnDertigen.scorewissel(eigenhand);
				endscore = score[2];
				if (endscore === 20.5) endscore = score[3];
				$("#scoretwo").html(endscore);
				break;
			case 3: eigenhand = EenEnDertigen.handtosymbols(speler3.cards);
				score = EenEnDertigen.scorewissel(eigenhand);
				endscore = score[2];
				if (endscore === 20.5) endscore = score[3];
				$("#scorethree").html(endscore);
				break;
			case 4: eigenhand = EenEnDertigen.handtosymbols(speler4.cards);
				score = EenEnDertigen.scorewissel(eigenhand);
				endscore = score[2];
				if (endscore === 20.5) endscore = score[3];
				$("#scorefour").html(endscore);
				break;
		}
	}
	swal({
		title: "<h4 id='swalspelover'>Spel afgelopen!</h4>",
		imageUrl: "Cards.png",
		timer: 30000,
		showConfirmButton: true,
		html: true
	});
}
EenEnDertigen.scorewissel = function (combination) {
//	console.log(JSON.stringify(combination));
	var countsuites = [0,0,0,0];
	var scoresuites = [0,0,0,0];
	var countranks = [0,0,0,0,0,0,0,0];
	for (var i = 0, len = combination.length - 2; i < len; i++) {
		switch (combination[i * 2]) {
			case "♠": countsuites[0]++;
				break;
			case "♥": countsuites[1]++;
				break;
			case "♣": countsuites[2]++;
				break;
			case "♦": countsuites[3]++;
				break;
		}
		switch (combination[i * 2 + 1]) {
			case "A": countranks[0]++;
				switch (combination[i * 2]) {
					case "♠": scoresuites[0] = scoresuites[0] + 11;
						break;
					case "♥": scoresuites[1] = scoresuites[1] + 11;
						break;
					case "♣": scoresuites[2] = scoresuites[2] + 11;
						break;
					case "♦": scoresuites[3] = scoresuites[3] + 11;
						break;
				}
				break;
			case "7": countranks[1]++;
				switch (combination[i * 2]) {
					case "♠": scoresuites[0] = scoresuites[0] + 7;
						break;
					case "♥": scoresuites[1] = scoresuites[1] + 7;
						break;
					case "♣": scoresuites[2] = scoresuites[2] + 7;
						break;
					case "♦": scoresuites[3] = scoresuites[3] + 7;
						break;
				}
				break;
			case "8": countranks[2]++;
				switch (combination[i * 2]) {
					case "♠": scoresuites[0] = scoresuites[0] + 8;
						break;
					case "♥": scoresuites[1] = scoresuites[1] + 8;
						break;
					case "♣": scoresuites[2] = scoresuites[2] + 8;
						break;
					case "♦": scoresuites[3] = scoresuites[3] + 8;
						break;
				}
				break;
			case "9": countranks[3]++;
				switch (combination[i * 2]) {
					case "♠": scoresuites[0] = scoresuites[0] + 9;
						break;
					case "♥": scoresuites[1] = scoresuites[1] + 9;
						break;
					case "♣": scoresuites[2] = scoresuites[2] + 9;
						break;
					case "♦": scoresuites[3] = scoresuites[3] + 9;
						break;
				}
				break;
			case "0": countranks[4]++;
				switch (combination[i * 2]) {
					case "♠": scoresuites[0] = scoresuites[0] + 10;
						break;
					case "♥": scoresuites[1] = scoresuites[1] + 10;
						break;
					case "♣": scoresuites[2] = scoresuites[2] + 10;
						break;
					case "♦": scoresuites[3] = scoresuites[3] + 10;
						break;
				}
				break;
			case "B": countranks[5]++;
				switch (combination[i * 2]) {
					case "♠": scoresuites[0] = scoresuites[0] + 10;
						break;
					case "♥": scoresuites[1] = scoresuites[1] + 10;
						break;
					case "♣": scoresuites[2] = scoresuites[2] + 10;
						break;
					case "♦": scoresuites[3] = scoresuites[3] + 10;
						break;
				}
				break;
			case "V": countranks[6]++;
				switch (combination[i * 2]) {
					case "♠": scoresuites[0] = scoresuites[0] + 10;
						break;
					case "♥": scoresuites[1] = scoresuites[1] + 10;
						break;
					case "♣": scoresuites[2] = scoresuites[2] + 10;
						break;
					case "♦": scoresuites[3] = scoresuites[3] + 10;
						break;
				}
				break;
			case "H": countranks[7]++;
				switch (combination[i * 2]) {
					case "♠": scoresuites[0] = scoresuites[0] + 10;
						break;
					case "♥": scoresuites[1] = scoresuites[1] + 10;
						break;
					case "♣": scoresuites[2] = scoresuites[2] + 10;
						break;
					case "♦": scoresuites[3] = scoresuites[3] + 10;
						break;
				}
				break;
		}
	}
	var score = 0;
	var endscore = 0;
	for (var j = 0, len = scoresuites.length; j < len; j++) {
		if (scoresuites[j] > score) {
			score = scoresuites[j];
		}
	}
	for (var j = 0, len = countranks.length; j < len; j++) {
		switch (countranks[j]) {
			case 0: break;
			case 3: if (score < 31) score = 30.5;
				if (j === 0) score = 31;
				break;
			case 2: if (score < 21) {
					endscore = score;
					score = 20.5;
				}
				break;
		}
	}
	return [combination[6], combination[7], score, endscore];
}
EenEnDertigen.handtosymbols = function (cards) {
	var symbols = "";
	for (var i = 0, len = cards.length; i < len; i++) {
		var symbol1 = "";
		var symbol2 = "";
		switch (cards[i].suit) {
			case 0: symbol1 = "♠";
				break;
			case 1: symbol1 = "♥";
				break;
			case 2: symbol1 = "♣";
				break;
			case 3: symbol1 = "♦";
				break;
		}
		switch (cards[i].rank) {
			case 13:symbol2 = "H";
				break;
			case 12:symbol2 = "V";
				break;
			case 11:symbol2 = "B";
				break;
			case 10:symbol2 = "0";
				break;
			case 9: symbol2 = "9";
				break;
			case 8: symbol2 = "8";
				break;
			case 7: symbol2 = "7";
				break;
			case 1: symbol2 = "A";
				break;
		}
		symbols = symbols + symbol1 + symbol2;
	}
	return symbols;
}
EenEnDertigen.KaartSelection = function (arr) {
    this.arr = arr;
    var speler;
    if (this.arr[0] === 2) speler = speler2;
    if (this.arr[0] === 3) speler = speler3;
    if (this.arr[0] === 4) speler = speler4;
    this.logprivatevariables = function() {
//	console.log("Arr: " + this.arr);
    }
}
EenEnDertigen.speler = function (index, cards, state) {
	this.index = index;
	this.cards = cards;
	this.state = state;
	this.stub = false;
}
EenEnDertigen.speler_stub = function (index, cards, state) {
	if (($.urlParam('stubmode') != null) && $.urlParam('stubmode')) {
//		console.log("EenEnDertigen_stub call count: " + stub.callCount);
	}
	else {
		stub.restore();
	}
	this.index = index;
	this.cards = cards;
	this.state = state;
	this.stub = true;
}
var stub = sinon.stub(EenEnDertigen, "speler", EenEnDertigen.speler_stub);
EenEnDertigen.spelerai = function (index, cards, state) {
	this.bestscore = 0;
	EenEnDertigen.speler.call(this, index, cards, state);
}
EenEnDertigen.spelerai.prototype.generateCardCombinations = function(selections, eigenhand, pot) {
    var countCardCombinations = 0;
    var result=[];
    for (var i = 1; i < 4; i++) {
	var eigenhandindex = i - 1;
        if (selections[i] === 1) {
		for (var j = 0; j < 3; j++) {
			var nieuwhand = eigenhand;
			var indextoreplace = eigenhandindex * 2;
			nieuwhand = nieuwhand.substring(0, indextoreplace) + pot.substring(j * 2, j * 2 + 2) + nieuwhand.substring(indextoreplace + 2, nieuwhand.length) + eigenhandindex.toString() + j.toString();
			result.push(nieuwhand);
			countCardCombinations++;
		}
	}
    }
//  console.log("Count card combinations for player: " + selections[0] + "  " + countCardCombinations);
    return result;
}
EenEnDertigen.trigger = function () {
	var triggertimeout = 5000;
	if (speler2.state === 0) {
		setTimeout(function () { $("#btn_id2").trigger('click'); }, triggertimeout);
	}
	else
	if (speler3.state === 0) {
		setTimeout(function () { $("#btn_id3").trigger('click'); }, triggertimeout);
	}
	else
	if (speler4.state === 0) {
		setTimeout(function () { $("#btn_id4").trigger('click'); }, triggertimeout);
	}
}
EenEnDertigen.spelerai.prototype.aikaartwissel = function() {
	var cardwissel = false;
	var handkaart = Math.floor(Math.random() * 3);
	var tafelkaart = Math.floor(Math.random() * 3);
	var bestSelection = [handkaart, tafelkaart, 0];
	this.allSelections = new HashMap();
	var arr = new Array(this.index,1,0,0);
	var combo = new EenEnDertigen.KaartSelection(arr);
	this.allSelections.put(arr[0].toString() + arr[1].toString() + arr[2].toString() + arr[3].toString(), combo);
	arr = new Array(this.index,0,1,0);
	combo = new EenEnDertigen.KaartSelection(arr);
	this.allSelections.put(arr[0].toString() + arr[1].toString() + arr[2].toString() + arr[3].toString(), combo);
	arr = new Array(this.index,0,0,1);
	combo = new EenEnDertigen.KaartSelection(arr);
	this.allSelections.put(arr[0].toString() + arr[1].toString() + arr[2].toString() + arr[3].toString(), combo);
	var values = this.allSelections.toArray();
	var bestscore = this.bestscore;
	var pot = EenEnDertigen.handtosymbols(speler0.cards);
	var bestSelection;
	if (!(bestscore === 30.5) && !(bestscore === 31)) {
		for (var i = 0; i < values.length; i++) {
			var selectionCombo = values[i];
			var selectedCard = selectionCombo['arr'];
			var selectedCardname = JSON.stringify(selectedCard);
			this.allCombinations = this.generateCardCombinations(selectionCombo['arr'], EenEnDertigen.handtosymbols(this.cards), pot);
			for (var j = 0; j < this.allCombinations.length; j++) {
				var combination = this.allCombinations[j];
				bestSelection = EenEnDertigen.scorewissel(combination);
				if (bestSelection[2] >= bestscore) {
					handkaart = bestSelection[0];
					tafelkaart = bestSelection[1];
					bestscore = bestSelection[2];
					this.bestscore = bestscore;
					cardwissel = true;
				}
			}
		}
		bestSelection = EenEnDertigen.scorewissel(pot);
		if ((bestSelection[2] > bestscore) && (bestSelection[2] >= 30)) {
			for (var k = 0, len = this.cards.length; k < len; k++) {
				this.cards[k].setSide('front');
				speler0.cards[k].setSide('back');
				swapElements(this.cards[k], speler0.cards[k]);
				var tempCard = this.cards[k];
				this.cards[k] = speler0.cards[k];
				speler0.cards[k] = tempCard;
				switch (this.index) {
				case 2 : $('#chk2two').prop('checked', true);
					 break;
				case 3 : $('#chk2three').prop('checked', true);
					 break;
				case 4 : $('#chk2four').prop('checked', true);
					 break;
				}
			}
			if (bestSelection[2] === 30.5) {
				handkaart = pascard;
				tafelkaart = pascard;
			}
			else
			if (bestSelection[2] === 31) {
				handkaart = verbiedcard;
				tafelkaart = verbiedcard;
			}
			else {
				handkaart = pascard;
				tafelkaart = pascard;
			}
		}
		if (!cardwissel) {
			handkaart = -1;
			tafelkaart = -1;
		}
	}
	else {
		if (bestscore === 30.5) {
			handkaart = pascard;
			tafelkaart = pascard;
		}
		if (bestscore === 31) {
			handkaart = verbiedcard;
			tafelkaart = verbiedcard;
		}
	}
	return [handkaart, tafelkaart];
}
var speler0 = new EenEnDertigen.speler(0, new Array(), 0);
var speler1 = new EenEnDertigen.speler(1, new Array(), 0);
var speler2 = new EenEnDertigen.spelerai(2, new Array(), 0);
var speler3 = new EenEnDertigen.spelerai(3, new Array(), 0);
var speler4 = new EenEnDertigen.spelerai(4, new Array(), 0);
var playerselectedcount = 0;
var potselectedcount = 0;
var cardcoordinates = [[-2.75,-220],[-1.75,-220],[-0.75,-220],[0.75,-220],[1.75,-220],[2.75,-220],[-2.75,-110],[-1.75,-110],[-0.75,-110],[0.75,-110],[1.75,-110],[2.75,-110],[-1.05,110],[-0.05,110],[0.95,110]];
EenEnDertigen.doWissel = function (playerprm) {
	var player0card = -1;
	var player2card = -1;
	var player3card = -1;
	var player4card = -1;
	var triggertimeout = 5000;
	switch (playerprm) {
		case 2:	if (speler3.state === 0) {
				setTimeout(function () { $("#btn_id3").trigger('click'); }, triggertimeout);
			}
			else
			if (speler4.state === 0) {
				setTimeout(function () { $("#btn_id4").trigger('click'); }, triggertimeout);
			}
			else {
				if (speler1.state === 0) setTimeout(function(){
					$('#chk1two').prop('checked', false);
					$('#chk1one').prop('checked', true);
				}, 7500);
			}
			var pot = EenEnDertigen.handtosymbols(speler0.cards);
			var eigenhand = EenEnDertigen.handtosymbols(speler2.cards);
			var scorepot = EenEnDertigen.scorewissel(pot);
			var scoreeigenhand = EenEnDertigen.scorewissel(eigenhand);
			var gewisseldmetdepot = false;
			if (wisselmetdepot) {
				if (scorepot[2] > scoreeigenhand[2]) {
					for (var k = 0; k < 3; k++) {
						speler2.cards[k].setSide('front');
						speler0.cards[k].setSide('back');
						swapElements(speler2.cards[k], speler0.cards[k]);
						var tempCard = speler2.cards[k];
						speler2.cards[k] = speler0.cards[k];
						speler0.cards[k] = tempCard;
					}
					gewisseldmetdepot = true;
				}
				wisselmetdepot = false;
			}
			if ((speler2.state === 0) && !wisselmetdepot && !gewisseldmetdepot)  {
				$('#chk1two').prop('checked', true);
				$('#chk1one').prop('checked', false);
				$('#chk1three').prop('checked', false);
				$('#chk1four').prop('checked', false);
				playerselectedcount = 0;
				potselectedcount = 0;
				var kaartwissel = speler2.aikaartwissel();
				player2card = kaartwissel[0];
				player0card = kaartwissel[1];
				if (!(player2card === pascard) && !(player2card === verbiedcard)) {
					if (!speler2.stub) {
						speler2.cards[player2card].setSide('front');
						speler0.cards[player0card].setSide('back');
					}
					else {
						speler2.cards[player2card].setSide('front');
						speler0.cards[player0card].setSide('front');
					}
//					console.log("Elements to swap: " + speler2.cards[player2card].$el.id + " " + speler0.cards[player0card].$el.id);
					swapElements(speler2.cards[player2card], speler0.cards[player0card]);
					var tempCard = speler2.cards[player2card];
					speler2.cards[player2card] = speler0.cards[player0card];
					speler0.cards[player0card] = tempCard;
					var eigenhand = EenEnDertigen.handtosymbols(speler2.cards);
					var score = EenEnDertigen.scorewissel(eigenhand);
					if (score[2] === 31) {
						swal({
							title: "<h4 id='swalverbied2'>Verbied! Speler2</h4>",
							imageUrl: "Cards.png",
							timer: 2000,
							showConfirmButton: false,
							html: true
						});
						speler1.state = verbiedstate;
						speler2.state = verbiedstate;
						speler3.state = verbiedstate;
						speler4.state = verbiedstate;
						setTimeout(function(){
							EenEnDertigen.gameover();
						}, 7500);
					}
					break;
				}
				if (!(player2card === verbiedcard)) {
					speler2.state = passtate;
					playerselectedcount = 0;
					potselectedcount = 0;
					swal({
						title: "<h4 id='swalpas2'>Pas! Speler2</h4>",
						imageUrl: "Cards.png",
						timer: 2000,
						showConfirmButton: false,
						html: true
					});
					$('#chk2two').prop('checked', true);
					break;
				}
				else {
					swal({
						title: "<h4 id='swalverbied2'>Verbied! Speler2</h4>",
						imageUrl: "Cards.png",
						timer: 2000,
						showConfirmButton: false,
						html: true
					});
					speler1.state = verbiedstate;
					speler2.state = verbiedstate;
					speler3.state = verbiedstate;
					speler4.state = verbiedstate;
					setTimeout(function(){
						EenEnDertigen.gameover();
					}, 7500);
				}
				break;
			}
			break;
		case 3: if (speler4.state === 0) {
				setTimeout(function () { $("#btn_id4").trigger('click'); }, triggertimeout);
			}
			else {
				if (speler1.state === 0) setTimeout(function(){
					$('#chk1three').prop('checked', false);
					$('#chk1one').prop('checked', true);
				}, 7500);
			}
			var pot = EenEnDertigen.handtosymbols(speler0.cards);
			var eigenhand = EenEnDertigen.handtosymbols(speler3.cards);
			var scorepot = EenEnDertigen.scorewissel(pot);
			var scoreeigenhand = EenEnDertigen.scorewissel(eigenhand);
			var gewisseldmetdepot = false;
			if (wisselmetdepot) {
				if (scorepot[2] > scoreeigenhand[2]) {
					for (var k = 0; k < 3; k++) {
						speler3.cards[k].setSide('front');
						speler0.cards[k].setSide('back');
						swapElements(speler3.cards[k], speler0.cards[k]);
						var tempCard = speler3.cards[k];
						speler3.cards[k] = speler0.cards[k];
						speler0.cards[k] = tempCard;
					}
					gewisseldmetdepot = true;
				}
				wisselmetdepot = false;
			}
			if ((speler2.state === 0) && !wisselmetdepot && !gewisseldmetdepot)  {
				$('#chk1three').prop('checked', true);
				$('#chk1one').prop('checked', false);
				$('#chk1two').prop('checked', false);
				$('#chk1four').prop('checked', false);
				playerselectedcount = 0;
				potselectedcount = 0;
				var kaartwissel = speler3.aikaartwissel();
				player3card = kaartwissel[0];
				player0card = kaartwissel[1];
				if (!(player3card === pascard) && !(player3card === verbiedcard)) {
					if (!speler3.stub) {
						speler3.cards[player3card].setSide('front');
						speler0.cards[player0card].setSide('back');
					}
					else {
						speler3.cards[player3card].setSide('front');
						speler0.cards[player0card].setSide('front');
					}
//					console.log("Elements to swap: " + speler3.cards[player3card].$el.id + " " + speler0.cards[player0card].$el.id);
					swapElements(speler3.cards[player3card], speler0.cards[player0card]);
					var tempCard = speler3.cards[player3card];
					speler3.cards[player3card] = speler0.cards[player0card];
					speler0.cards[player0card] = tempCard;
					var eigenhand = EenEnDertigen.handtosymbols(speler3.cards);
					var score = EenEnDertigen.scorewissel(eigenhand);
					if (score[2] === 31) {
						swal({
							title: "<h4 id='swalverbied3'>Verbied! Speler3</h4>",
							imageUrl: "Cards.png",
							timer: 2000,
							showConfirmButton: false,
							html: true
						});
						speler1.state = verbiedstate;
						speler2.state = verbiedstate;
						speler3.state = verbiedstate;
						speler4.state = verbiedstate;
						setTimeout(function(){
							EenEnDertigen.gameover();
						}, 7500);
					}
					break;
				}
				if (!(player3card === verbiedcard)) {
					speler3.state = passtate;
					playerselectedcount = 0;
					potselectedcount = 0;
					swal({
						title: "<h4 id='swalpas3'>Pas! Speler3</h4>",
							imageUrl: "Cards.png",
							timer: 2000,
							showConfirmButton: false,
							html: true
					});
					$('#chk2three').prop('checked', true);
					break;
				}
				else {
					swal({
						title: "<h4 id='swalverbied3'>Verbied! Speler3</h4>",
						imageUrl: "Cards.png",
						timer: 2000,
						showConfirmButton: false,
						html: true
					});
					speler1.state = verbiedstate;
					speler2.state = verbiedstate;
					speler3.state = verbiedstate;
					speler4.state = verbiedstate;
					setTimeout(function(){
						EenEnDertigen.gameover();
					}, 7500);
				}
				break;
			}
			break;
		case 4: var pot = EenEnDertigen.handtosymbols(speler0.cards);
			var eigenhand = EenEnDertigen.handtosymbols(speler4.cards);
			var scorepot = EenEnDertigen.scorewissel(pot);
			var scoreeigenhand = EenEnDertigen.scorewissel(eigenhand);
			var gewisseldmetdepot = false;
			if (wisselmetdepot) {
				if (scorepot[2] > scoreeigenhand[2]) {
					for (var k = 0; k < 3; k++) {
						speler4.cards[k].setSide('front');
						speler0.cards[k].setSide('back');
						swapElements(speler4.cards[k], speler0.cards[k]);
						var tempCard = speler4.cards[k];
						speler4.cards[k] = speler0.cards[k];
						speler0.cards[k] = tempCard;
					}
					gewisseldmetdepot = true;
				}
				wisselmetdepot = false;
			}
			if ((speler4.state === 0) && !wisselmetdepot && !gewisseldmetdepot)  {
				$('#chk1four').prop('checked', true);
				$('#chk1one').prop('checked', false);
				if (speler1.state === 0) setTimeout(function(){
					$('#chk1four').prop('checked', false);
					$('#chk1one').prop('checked', true);
				}, 7500);
				$('#chk1two').prop('checked', false);
				$('#chk1three').prop('checked', false);
				playerselectedcount = 0;
				potselectedcount = 0;
				var kaartwissel = speler4.aikaartwissel();
				player4card = kaartwissel[0];
				player0card = kaartwissel[1];
				if (!(player4card === pascard) && !(player4card === verbiedcard)) {
					if (!speler4.stub) {
						speler4.cards[player4card].setSide('front');
						speler0.cards[player0card].setSide('back');
					}
					else {
						speler4.cards[player4card].setSide('front');
						speler0.cards[player0card].setSide('front');
					}
//					console.log("Elements to swap: " + speler4.cards[player4card].$el.id + " " + speler0.cards[player0card].$el.id);
					swapElements(speler4.cards[player4card], speler0.cards[player0card]);
					var tempCard = speler4.cards[player4card];
					speler4.cards[player4card] = speler0.cards[player0card];
					speler0.cards[player0card] = tempCard;
					var eigenhand = EenEnDertigen.handtosymbols(speler4.cards);
					var score = EenEnDertigen.scorewissel(eigenhand);
					if (score[2] === 31) {
						swal({
							title: "<h4 id='swalverbied4'>Verbied! Speler4</h4>",
							imageUrl: "Cards.png",
							timer: 2000,
							showConfirmButton: false,
							html: true
						});
						speler1.state = verbiedstate;
						speler2.state = verbiedstate;
						speler3.state = verbiedstate;
						speler4.state = verbiedstate;
						setTimeout(function(){
							EenEnDertigen.gameover();
						}, 7500);
					}
					break;
				}
				if (!(player4card === verbiedcard)) {
					speler4.state = passtate;
					playerselectedcount = 0;
					potselectedcount = 0;
					swal({
						title: "<h4 id='swalpas4'>Pas! Speler4</h4>",
						imageUrl: "Cards.png",
						timer: 2000,
						showConfirmButton: false,
						html: true
					});
					$('#chk2four').prop('checked', true);
					if (speler1.state === 0) setTimeout(function(){
						$('#chk1four').prop('checked', false);
						$('#chk1one').prop('checked', true);
					}, 7500);
					break;
				}
				else {
					swal({
						title: "<h4 id='swalverbied4'>Verbied! Speler4</h4>",
						imageUrl: "Cards.png",
						timer: 2000,
						showConfirmButton: false,
						html: true
					});
					speler1.state = verbiedstate;
					speler2.state = verbiedstate;
					speler3.state = verbiedstate;
					speler4.state = verbiedstate;
					setTimeout(function(){
						EenEnDertigen.gameover();
					}, 7500);
				}
				break;
			}
			break;
		default:break;
	}
}
function doSwap(playerprm) {
	var classlist;
	var player0card = -1;
	var player1card = -1;
	var strid;
	switch (playerprm) {
		case 1:	$('#chk1one').prop('checked', true);
			$('#chk1two').prop('checked', false);
			$('#chk1three').prop('checked', false);
			$('#chk1four').prop('checked', false);
			var cardwissel = false;
			wisselmetdepot = false;
			if (speler1.state === 0) {
				for (var i = 0, len = speler1.cards.length; i < len; i++) {
					classlist = speler1.cards[i].$el.className;
					if (classlist.indexOf("selected") > 0) {
						player1card = i;
					}
					strid = speler1.cards[i].$el.id;
					$("#" + strid).removeClass('selected');
					classlist = speler0.cards[i].$el.className;
					if (classlist.indexOf("selected") > 0) {
						player0card = i;
					}
					strid = speler0.cards[i].$el.id;
					$("#" + strid).removeClass('selected');
				}
				playerselectedcount = 0;
				potselectedcount = 0;
				if ((player1card >= 0) && (player0card >= 0)) {
//					console.log("Elements to swap: " + speler1.cards[player1card].$el.id + " " + speler0.cards[player0card].$el.id);
//					console.log("Classlists: " + speler1.cards[player1card].$el.classList + " " + speler0.cards[player0card].$el.classList);
					swapElements(speler1.cards[player1card], speler0.cards[player0card]);
					var tempCard = speler1.cards[player1card];
					speler1.cards[player1card] = speler0.cards[player0card];
					speler0.cards[player0card] = tempCard;
					cardwissel = true;
				}
				var eigenhand = EenEnDertigen.handtosymbols(speler1.cards);
				var score = EenEnDertigen.scorewissel(eigenhand);
				if (score[2] === 31) {
					swal({
						title: "<h4 id='swalverbied1'>Verbied! Speler1</h4>",
						imageUrl: "Cards.png",
						timer: 2000,
						showConfirmButton: false,
						html: true
					});
					speler1.state = verbiedstate;
					speler2.state = verbiedstate;
					speler3.state = verbiedstate;
					speler4.state = verbiedstate;
					setTimeout(function(){
						EenEnDertigen.gameover();
					}, 7500);
				}
				var pasgiven = false;
				var pasgivencount = 0;
				if (speler1.state === passtate) {
					pasgiven = true;
					pasgivencount++;
				}
				if (speler2.state === passtate) {
					pasgiven = true;
					pasgivencount++;
				}
				if (speler3.state === passtate) {
					pasgiven = true;
					pasgivencount++;
				}
				if (speler4.state === passtate) {
					pasgiven = true;
					pasgivencount++;
				}
				if (pasgiven) {
					speler1.state = passtate;
					pasgiven = true;
					pasgivencount++;
					if (pasgivencount >= 4) {
						EenEnDertigen.gameover();
					}
				}
			}
			var playersinthegame = 0;
			if (speler1.state === 0) playersinthegame++;
			if (speler2.state === 0) playersinthegame++;
			if (speler3.state === 0) playersinthegame++;
			if (speler4.state === 0) playersinthegame++;
			playerselectedcount = 0;
			potselectedcount = 0;
			if (cardwissel) {
				if (playersinthegame > 0) {
					EenEnDertigen.trigger();
				}
			}
			else {
				if (playersinthegame > 0) {
					if (speler1.state === 0) {
						swal({
							title: "<h4 id='swalwissel'>A.u.b. Eerst een kaart omwisselen</h4>",
							imageUrl: "Cards.png",
							timer: 2000,
							showConfirmButton: false,
							html: true
						});
					}
					if (speler1.state === passtate) {
						EenEnDertigen.trigger();
					}
				}
				else {
					EenEnDertigen.gameover();
				}
			}
			break;
		case 2:
		case 3:
		case 4:	playerselectedcount = 0;
			potselectedcount = 0;
			EenEnDertigen.doWissel(playerprm);
			var pasgiven = false;
			var pasgivencount = 0;
			if (speler1.state === passtate) {
				pasgiven = true;
				pasgivencount++;
			}
			if (speler2.state === passtate) {
				pasgiven = true;
				pasgivencount++;
			}
			if (speler3.state === passtate) {
				pasgiven = true;
				pasgivencount++;
			}
			if (speler4.state === passtate) {
				pasgiven = true;
				pasgivencount++;
			}
			if (pasgiven) {
				if (pasgivencount >= 4) {
					EenEnDertigen.gameover();
				}
			}
			break;
		case speler1wissel:
			if (speler1.state === 0) {
				$('#chk1one').prop('checked', true);
				$('#chk1two').prop('checked', false);
				$('#chk1three').prop('checked', false);
				$('#chk1four').prop('checked', false);
				for (var i = 0; i < 3; i++) {
					strid = speler1.cards[i].$el.id;
					$("#" + strid).removeClass('selected');
					strid = speler0.cards[i].$el.id;
					$("#" + strid).removeClass('selected');
//					console.log("Elements to swap: " + speler1.cards[i].$el.id + " " + speler0.cards[i].$el.id);
					swapElements(speler1.cards[i], speler0.cards[i]);
					var tempCard = speler1.cards[i];
					speler1.cards[i] = speler0.cards[i];
					speler0.cards[i] = tempCard;
				}
				playerselectedcount = 0;
				potselectedcount = 0;
				if (!wisselmetdepot) {
					$('#chk2one').prop('checked', true);
					speler1.state = passtate;
				}
				wisselmetdepot = false;
				EenEnDertigen.trigger();
			}
			break;
		case startgame:
			speler0.state = 0;
			speler1.state = 0;
			speler2.state = 0;
			speler3.state = 0;
			speler4.state = 0;
			wisselmetdepot = true;
			console.log("StartSpeler: " + startspeler + " 1:" + speler1.state + " 2:" + speler2.state + " 3:" + speler3.state + " 4:" + speler4.state + ":" + wisselmetdepot);
			var triggertimeout = 8000;
			switch (startspeler) {
				case 2:	setTimeout(function () { $("#btn_id2").trigger('click'); }, triggertimeout);
					break;
				case 3: setTimeout(function () { $("#btn_id3").trigger('click'); }, triggertimeout);
					break;
				case 4: setTimeout(function () { $("#btn_id4").trigger('click'); }, triggertimeout);
					break;
			}
			break;
		case speler1pas:
			if (speler1.state === 0) {
				var handsymbols = EenEnDertigen.handtosymbols(speler1.cards);
				swal({
					title: "<h4 id='swalpas1'>Pas! " + handsymbols + "</h4>",
					imageUrl: "Cards.png",
					timer: 2000,
					showConfirmButton: false,
					html: true
				});
				$('#chk2one').prop('checked', true);
				$('#chk1one').prop('checked', true);
				$('#chk1two').prop('checked', false);
				$('#chk1three').prop('checked', false);
				$('#chk1four').prop('checked', false);
				speler1.state = passtate;
			}
			playerselectedcount = 0;
			potselectedcount = 0;
			wisselmetdepot = false;
			EenEnDertigen.trigger();
			break;
	}
}
function swapElements(card1, card2) {
	var tempplayer = card1.player;
	card1.player = card2.player;
	card2.player = tempplayer;
	var delay = 1000;
	var xpos1 = card2.x;
	var ypos1 = card2.y;
	var z1 = card2.$el.style.zIndex;
	card1.animateTo({
		delay: delay,
		duration: 250,
		x: xpos1,
		y: ypos1,
		rot: 0,
		onStart: function onStart() {
			z1;
		},
		onComplete: function onComplete() {
//			console.log("Animate to ended");
		}
	});
	delay = 2000;
	var xpos2 = card1.x;
	var ypos2 = card1.y;
	var z2 = card1.$el.style.zIndex;
	card2.animateTo({
		delay: delay,
		duration: 250,
		x: xpos2,
		y: ypos2,
		rot: 0,
		onStart: function onStart() {
			z2;
		},
		onComplete: function onComplete() {
//			console.log("Animate to ended");
		}
	});
}
var Deck = (function () {
  'use strict';
  var ticking;
  var animations = [];
  function animationframes(delay, duration) {
    var now = Date.now();
    var start = now + delay;
    var end = start + duration;
    var animation = {
      start: start,
      end: end
    };
    animations.push(animation);
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(tick);
    }
    var self = {
      start: function start(cb) {
        animation.startcb = cb;
        return self;
      },
      progress: function progress(cb) {
        animation.progresscb = cb;
        return self;
      },
      end: function end(cb) {
        animation.endcb = cb;
        return self;
      }
    };
    return self;
  }
  var previousTick = 0;
  function tick() {
    var now = Date.now();
    if (now - previousTick < 1000 / 60) {
      requestAnimationFrame(tick);
      return;
    }
    previousTick = now;
    if (!animations.length) {
       ticking = false;
      return;
    }
    for (var i = 0, animation; i < animations.length; i++) {
      animation = animations[i];
      if (now < animation.start) {
        continue;
      }
      if (!animation.started) {
        animation.started = true;
        animation.startcb && animation.startcb();
      }
      var t = (now - animation.start) / (animation.end - animation.start);
      animation.progresscb && animation.progresscb(t < 1 ? t : 1);
      if (now > animation.end) {
        animation.endcb && animation.endcb();
        animations.splice(i--, 1);
        continue;
      }
    }
    requestAnimationFrame(tick);
  }
  window.requestAnimationFrame || (window.requestAnimationFrame = function (cb) {
    setTimeout(cb, 0);
  });
  var style = document.createElement('p').style;
  var memoized = {};
  function prefix(param) {
    if (typeof memoized[param] !== 'undefined') {
      return memoized[param];
    }
    if (typeof style[param] !== 'undefined') {
      memoized[param] = param;
      return param;
    }
    var camelCase = param[0].toUpperCase() + param.slice(1);
    var prefixes = ['webkit', 'moz', 'Moz', 'ms', 'o'];
    var test;
    for (var i = 0, len = prefixes.length; i < len; i++) {
      test = prefixes[i] + camelCase;
      if (typeof style[test] !== 'undefined') {
        memoized[param] = test;
        return test;
      }
    }
  }
  var has3d;
  function translate(a, b, c) {
    typeof has3d !== 'undefined' || (has3d = check3d());
    c = c || 0;
    if (has3d) {
      return 'translate3d(' + a + ', ' + b + ', ' + c + ')';
    } else {
      return 'translate(' + a + ', ' + b + ')';
    }
  }
  function check3d() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
      return false;
    }
    var transform = prefix('transform');
    var $p = document.createElement('p');
    document.body.appendChild($p);
    $p.style[transform] = 'translate3d(1px,1px,1px)';
    has3d = $p.style[transform];
    has3d = has3d != null && has3d.length && has3d !== 'none';
    document.body.removeChild($p);
    return has3d;
  }
  var _ticking;
  var _animations = [];
  function animationFrames(delay, duration) {
    var now = Date.now();
    var start = now + delay;
    var end = start + duration;
    var animation = {
      start: start,
      end: end
    };
    _animations.push(animation);
    if (!_ticking) {
      _ticking = true;
      requestAnimationFrame(_tick);
    }
    var self = {
      start: function start(cb) {
        animation.startcb = cb;
        return self;
      },
      progress: function progress(cb) {
        animation.progresscb = cb;
        return self;
      },
      end: function end(cb) {
        animation.endcb = cb;
        return self;
      }
    };
    return self;
  }
  var _previousTick = 0;
  function _tick() {
    var now = Date.now();
    if (now - _previousTick < 1000 / 60) {
      requestAnimationFrame(_tick);
      return;
    }
    _previousTick = now;
    if (!_animations.length) {
      _ticking = false;
      return;
    }
    for (var i = 0, animation; i < _animations.length; i++) {
      animation = _animations[i];
      if (now < animation.start) {
        continue;
      }
      if (!animation.started) {
        animation.started = true;
        animation.startcb && animation.startcb();
      }
      var t = (now - animation.start) / (animation.end - animation.start);
      animation.progresscb && animation.progresscb(t < 1 ? t : 1);
      if (now > animation.end) {
        animation.endcb && animation.endcb();
        _animations.splice(i--, 1);
        continue;
      }
    }
    requestAnimationFrame(_tick);
  }
  window.requestAnimationFrame || (window.requestAnimationFrame = function (cb) {
    setTimeout(cb, 0);
  });
  function createElement(type) {
    return document.createElement(type);
  }
  var maxZ = 52;
  function _card(i) {
	var transform = prefix('transform');
	var tempvar;
	if ((i > 24) && (i < 32)) {
		tempvar = i + 20;
	}
	else if (i === 24) tempvar = 39;
	if ((i > 16) && (i < 24)) {
		tempvar = i + 15;
	}
	else if (i === 16) tempvar = 26;
	if ((i > 8) && (i < 16)) {
		tempvar = i + 10;
	}
	else if (i === 8) tempvar = 13;
	if ((i > 0) && (i < 8)) {
		tempvar = i + 5;
	}
	else if (i === 0) tempvar = 0;
	var rank = tempvar % 13 + 1;
	var suit = tempvar / 13 | 0;
	var z = (52 - tempvar) / 4;
	var $el = createElement('div');
	$el.id = 'card' + tempvar;
	var $face = createElement('div');
	var $back = createElement('div');
	var isDraggable = false;
	var isFlippable = false;
	var index = -1;
	var player = -1;
	var self = { tempvar: tempvar, index: index, player: player, rank: rank, suit: suit, $el: $el, mount: mount, unmount: unmount, setSide: setSide };
	var modules = Deck.modules;
	var module;
	$face.classList.add('face');
	$back.classList.add('back');
	$el.style[transform] = translate(-z + 'px', -z + 'px');
	self.x = -z;
	self.y = -z;
	self.z = z;
	self.rot = 0;
	self.setSide('back');
	self.index = -1;
	self.player = -1;
	addListener($el, 'mousedown', onMousedown);
	addListener($el, 'touchstart', onMousedown);
	for (module in modules) {
		addModule(modules[module]);
	}
	self.animateTo = function (params) {
//		console.log(JSON.stringify(params));
		var delay = params.delay;
		var duration = params.duration;
		var _params$x = params.x;
		var x = _params$x === undefined ? self.x : _params$x;
		var _params$y = params.y;
		var y = _params$y === undefined ? self.y : _params$y;
		var _params$rot = params.rot;
		var rot = _params$rot === undefined ? self.rot : _params$rot;
		var ease$$ = params.ease;
		var onStart = params.onStart;
		var onProgress = params.onProgress;
		var onComplete = params.onComplete;
		var startX, startY, startRot;
		var diffX, diffY, diffRot;
		animationFrames(delay, duration).start(function () {
			startX = self.x || 0;
			startY = self.y || 0;
			startRot = self.rot || 0;
			onStart && onStart();
		}).progress(function (t) {
			var et = ease[ease$$ || 'cubicInOut'](t);
			diffX = x - startX;
			diffY = y - startY;
			diffRot = rot - startRot;
			onProgress && onProgress(t, et);
			self.x = startX + diffX * et;
			self.y = startY + diffY * et;
			self.rot = startRot + diffRot * et;
			$el.style[transform] = translate(self.x + 'px', self.y + 'px') + (diffRot ? 'rotate(' + self.rot + 'deg)' : '');
		}).end(function () {
			onComplete && onComplete();
		});
	};
	self.setRankSuit = function (rank, suit) {
		var suitName = SuitName(suit);
		$el.setAttribute('class', 'card ' + suitName + ' rank' + rank);
	};
	self.setRankSuit(rank, suit);
	self.enableDragging = function () {
		if (isDraggable) {
			return;
		}
		isDraggable = true;
		$el.style.cursor = 'move';
	};
	self.enableFlipping = function () {
		if (isFlippable) {
			return;
		}
		isFlippable = true;
	};
	self.disableFlipping = function () {
		if (!isFlippable) {
			return;
		}
		isFlippable = false;
	};
	self.disableDragging = function () {
		if (!isDraggable) {
			return;
		}
		isDraggable = false;
		$el.style.cursor = '';
	};
	return self;
	function addModule(module) {
		module.card && module.card(self);
	}
	function onMousedown(e) {
//		console.log("Card: " + $el.id + " Player: " + self.player + " Index: " + self.index + " Event type: " + e.type);
		if (self.player === 1) {
			if ($("#" + $el.id).hasClass('selected')) {
				$("#" + $el.id).removeClass('selected');
				playerselectedcount = 0;
			}
			else {
				if (playerselectedcount === 0) {
					$("#" + $el.id).addClass('selected');
					playerselectedcount = 1;
				}
			}
		}
		if (self.player === 0) {
			if ($("#" + $el.id).hasClass('selected')) {
				$("#" + $el.id).removeClass('selected');
				potselectedcount = 0;
			}
			else {
				if (potselectedcount === 0) {
					$("#" + $el.id).addClass('selected');
					potselectedcount = 1;
				}
			}
		}
		var startPos = {};
		var pos = {};
		var starttime = Date.now();
		e.preventDefault();
		if (e.type === 'mousedown') {
			startPos.x = pos.x = e.clientX;
			startPos.y = pos.y = e.clientY;
			addListener(window, 'mousemove', onMousemove);
			addListener(window, 'mouseup', onMouseup);
		} else {
			startPos.x = pos.x = e.touches[0].clientX;
			startPos.y = pos.y = e.touches[0].clientY;
			addListener(window, 'touchmove', onMousemove);
			addListener(window, 'touchend', onMouseup);
		}
		if (!isDraggable) {
			return;
		}
		$el.style[transform] = translate(self.x + 'px', self.y + 'px') + (self.rot ? ' rotate(' + self.rot + 'deg)' : '');
		$el.style.zIndex = maxZ++;
		function onMousemove(e) {
			if (!isDraggable) {
				return;
			}
			if (e.type === 'mousemove') {
				pos.x = e.clientX;
				pos.y = e.clientY;
			} else {
				pos.x = e.touches[0].clientX;
				pos.y = e.touches[0].clientY;
			}
			$el.style[transform] = translate(Math.round(self.x + pos.x - startPos.x) + 'px', Math.round(self.y + pos.y - startPos.y) + 'px') + (self.rot ? ' rotate(' + self.rot + 'deg)' : '');
		}
		function onMouseup(e) {
//			console.log("Card: " + self.id + " Index: " + self.index + " Event type: " + e.type);
			if (isFlippable && Date.now() - starttime < 200) {
				self.setSide(self.side === 'front' ? 'back' : 'front');
			}
			if (e.type === 'mouseup') {
				removeListener(window, 'mousemove', onMousemove);
				removeListener(window, 'mouseup', onMouseup);
			} else {
				removeListener(window, 'touchmove', onMousemove);
				removeListener(window, 'touchend', onMouseup);
			}
			if (!isDraggable) {
				return;
			}
			self.x = self.x + pos.x - startPos.x;
			self.y = self.y + pos.y - startPos.y;
		}
	}
	function mount(target) {
		target.appendChild($el);
		self.$root = target;
	}
	function unmount() {
		self.$root && self.$root.removeChild($el);
		self.$root = null;
	}
	function setSide(newSide) {
		if (newSide === 'front') {
			if (self.side === 'back') {
				$el.removeChild($back);
			}
			self.side = 'front';
			$el.appendChild($face);
			self.setRankSuit(self.rank, self.suit);
		} else {
			if (self.side === 'front') {
				$el.removeChild($face);
			}
			self.side = 'back';
			$el.appendChild($back);
			$el.setAttribute('class', 'card');
		}
	}
  }
  function SuitName(suit) {
    return suit === 0 ? 'spades' : suit === 1 ? 'hearts' : suit === 2 ? 'clubs' : suit === 3 ? 'diamonds' : 'joker';
  }
  function addListener(target, name, listener) {
    target.addEventListener(name, listener);
  }
  function removeListener(target, name, listener) {
    target.removeEventListener(name, listener);
  }
  var ease = {
    linear: function linear(t) {
      return t;
    },
    quadIn: function quadIn(t) {
      return t * t;
    },
    quadOut: function quadOut(t) {
      return t * (2 - t);
    },
    quadInOut: function quadInOut(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    cubicIn: function cubicIn(t) {
      return t * t * t;
    },
    cubicOut: function cubicOut(t) {
      return --t * t * t + 1;
    },
    cubicInOut: function cubicInOut(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    quartIn: function quartIn(t) {
      return t * t * t * t;
    },
    quartOut: function quartOut(t) {
      return 1 - --t * t * t * t;
    },
    quartInOut: function quartInOut(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    quintIn: function quintIn(t) {
      return t * t * t * t * t;
    },
    quintOut: function quintOut(t) {
      return 1 + --t * t * t * t * t;
    },
    quintInOut: function quintInOut(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };
  function plusminus(value) {
    var plusminus = Math.round(Math.random()) ? -1 : 1;
    return plusminus * value;
  }
  function fisherYates(array) {
    var rnd, temp;
    for (var i = array.length - 1; i; i--) {
      rnd = Math.random() * i | 0;
      temp = array[i];
      array[i] = array[rnd];
      array[rnd] = temp;
    }
    return array;
  }
  function fontSize() {
    return window.getComputedStyle(document.body).getPropertyValue('font-size').slice(0, -2);
  }
  var ____fontSize;
  var shuffle = {
    deck: function deck(_deck3) {
      _deck3.shuffle = _deck3.queued(shuffle);
      function shuffle(next) {
        var cards = _deck3.cards;
        ____fontSize = fontSize();
        fisherYates(cards);
        cards.forEach(function (card, i) {
		card.pos = i;
		card.disableFlipping();
		card.disableDragging();
		card.shuffle(function (i) {
			if (i === cards.length - 1) {
				next();
			}
		});
        });
        return;
      }
    },
    card: function card(_card3) {
      var $el = _card3.$el;
      _card3.shuffle = function (cb) {
        var i = _card3.pos;
        var z = i / 4;
        var delay = i * 2;
        _card3.animateTo({
          delay: delay,
          duration: 200,
          x: plusminus(Math.random() * 40 + 20) * ____fontSize / 16,
          y: -z,
          rot: 0
        });
        _card3.animateTo({
          delay: 200 + delay,
          duration: 200,
          x: -z,
          y: -z,
          rot: 0,
          onStart: function onStart() {
            $el.style.zIndex = i;
          },
          onComplete: function onComplete() {
            cb(i);
          }
        });
      };
    }
  };
  var __fontSize;
  var EenEnDertigen = {
	deck: function deck(_deck4) {
		_deck4.EenEnDertigen = _deck4.queued(EenEnDertigen);
		function EenEnDertigen(next) {
			speler1.cards = new Array();
			speler2.cards = new Array();
			speler3.cards = new Array();
			speler4.cards = new Array();
			speler0.cards = new Array();
			speler0.state = 0;
			speler1.state = 0;
			speler2.state = 0;
			speler3.state = 0;
			speler4.state = 0;
			$('#chk1one').prop('checked', false);
			$('#chk1two').prop('checked', false);
			$('#chk1three').prop('checked', false);
			$('#chk1four').prop('checked', false);
			switch (startspeler) {
				case 1: $('#chk1one').prop('checked', true);
					break;
				case 2: $('#chk1two').prop('checked', true);
					break;
				case 3: $('#chk1three').prop('checked', true);
					break;
				case 4: $('#chk1four').prop('checked', true);
					break;
			}
			startspeler = startspeler + 1;
			if (startspeler > 4) startspeler = 1;
			$('#chk2one').prop('checked', false);
			$('#chk2two').prop('checked', false);
			$('#chk2three').prop('checked', false);
			$('#chk2four').prop('checked', false);
			$("#scoreone").html('0');
			$("#scoretwo").html('0');
			$("#scorethree").html('0');
			$("#scorefour").html('0');
			wisselmetdepot = true;
			playerselectedcount = 0;
			potselectedcount = 0;
			var cards = _deck4.cards;
			var len = cards.length;
			__fontSize = fontSize();
			cards.slice(-15).reverse().forEach(function (card, i) {
				card.EenEnDertigen(i, len, function (i) {
					var targetElem = document.getElementById(card.$el.id);
					var classlist = JSON.stringify(targetElem.classList);
//					console.log("Id of the card: " + card.$el.id + " classlist of the card: " + classlist);
					card.index = i;
					card.disableDragging();
					card.disableFlipping();
					if (i < 3) {
						card.setSide('front');
						card.player = 1;
						speler1.cards.push(card);
					}
					else
					if (i < 6) {
						if (!speler2.stub) card.setSide('back');
						else card.setSide('front');
						card.player = 2;
						speler2.cards.push(card);
						speler2.bestscore = 0;
					}
					else
					if (i < 9) {
						if (!speler3.stub) card.setSide('back');
						else card.setSide('front');
						card.player = 3;
						speler3.cards.push(card);
						speler3.bestscore = 0;
					}
					else
					if (i < 12) {
						if (!speler3.stub) card.setSide('back');
						else card.setSide('front');
						card.player = 4;
						speler4.cards.push(card);
						speler4.bestscore = 0;
					}
					else
					if (i < 15) {
						card.setSide('front');
						card.player = 0;
						speler0.cards.push(card);
					}
					if (i === 8) {
						next();
					}
				});
			});
		}
	},
	card: function card(_card4) {
		var $el = _card4.$el;
		_card4.EenEnDertigen = function (i, len, cb) {
			var delay = i * 250;
			var pos = cardcoordinates[i];
			var xpos = pos[0];
			var ypos = pos[1];
			_card4.animateTo({
				delay: delay,
				duration: 250,
				x: Math.round(xpos * 70 * __fontSize / 16),
				y: Math.round(ypos * __fontSize / 16),
				rot: 0,
				onStart: function onStart() {
					$el.style.zIndex = len - 1 + i;
				},
				onComplete: function onComplete() {
					cb(i);
				}
			});
		};
	}
  };
  var intro = {
    deck: function deck(_deck5) {
      _deck5.intro = _deck5.queued(intro);
      function intro(next) {
        var cards = _deck5.cards;
        cards.forEach(function (card, i) {
          card.setSide('front');
          card.intro(i, function (i) {
            animationframes(250, 0).start(function () {
              card.setSide('back');
            });
            if (i === cards.length - 1) {
              next();
            }
          });
        });
      }
    },
    card: function card(_card5) {
      var transform = prefix('transform');
      var $el = _card5.$el;
      _card5.intro = function (i, cb) {
        var delay = 500 + i * 10;
        var z = i / 4;
        $el.style[transform] = translate(-z + 'px', '-250px');
        $el.style.opacity = 0;
        _card5.x = -z;
        _card5.y = -250 - z;
        _card5.rot = 0;
        _card5.animateTo({
          delay: delay,
          duration: 1000,
          x: -z,
          y: -z,
          onStart: function onStart() {
            $el.style.zIndex = i;
          },
          onProgress: function onProgress(t) {
            $el.style.opacity = t;
          },
          onComplete: function onComplete() {
            $el.style.opacity = '';
            cb && cb(i);
          }
        });
      };
    }
  };
  function queue(target) {
    var array = Array.prototype;
    var queueing = [];
    target.queue = queue;
    target.queued = queued;
    return target;
    function queued(action) {
      return function () {
        var self = this;
        var args = arguments;

        queue(function (next) {
          action.apply(self, array.concat.apply(next, args));
        });
      };
    }
    function queue(action) {
      if (!action) {
        return;
      }
      queueing.push(action);
      if (queueing.length === 1) {
        next();
      }
    }
    function next() {
      queueing[0](function (err) {
        if (err) {
          throw err;
        }
        queueing = queueing.slice(1);
        if (queueing.length) {
          next();
        }
      });
    }
  }
  function observable(target) {
    target || (target = {});
    var listeners = {};
    target.on = on;
    target.one = one;
    target.off = off;
    target.trigger = trigger;
    return target;
    function on(name, cb, ctx) {
      listeners[name] || (listeners[name] = []);
      listeners[name].push({ cb: cb, ctx: ctx });
    }
    function one(name, cb, ctx) {
      listeners[name] || (listeners[name] = []);
      listeners[name].push({
        cb: cb, ctx: ctx, once: true
      });
    }
    function trigger(name) {
      var self = this;
      var args = Array.prototype.slice(arguments, 1);
      var currentListeners = listeners[name] || [];
      currentListeners.filter(function (listener) {
        listener.cb.apply(self, args);

        return !listener.once;
      });
    }
    function off(name, cb) {
      if (!name) {
        listeners = {};
        return;
      }
      if (!cb) {
        listeners[name] = [];
        return;
      }
      listeners[name] = listeners[name].filter(function (listener) {
        return listener.cb !== cb;
      });
    }
  }
  function Deck(jokers) {
    var cards = new Array(jokers ? 55 : 32);
    var $el = createElement('div');
    var self = observable({ mount: mount, unmount: unmount, cards: cards, $el: $el });
    var $root;
    var modules = Deck.modules;
    var module;
    queue(self);
    for (module in modules) {
      addModule(modules[module]);
    }
    $el.classList.add('deck');
    var card;
    var tempcard;
    for (var i = cards.length; i; i--) {
      tempcard = _card(i - 1);
      card = cards[i - 1] = tempcard;
      card.mount($el);
    }
    return self;
    function mount(root) {
      $root = root;
      $root.appendChild($el);
    }
    function unmount() {
      $root.removeChild($el);
    }
    function addModule(module) {
      module.deck && module.deck(self);
    }
  }
  Deck.animationFrames = animationframes;
  Deck.ease = ease;
  Deck.modules = { intro: intro, EenEnDertigen: EenEnDertigen, shuffle: shuffle };
  Deck.Card = _card;
  Deck.prefix = prefix;
  Deck.translate = translate;
  return Deck;
})();
