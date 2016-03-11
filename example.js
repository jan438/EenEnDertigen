
/* global Deck */

var prefix = Deck.prefix

var transform = prefix('transform')

var translate = Deck.translate

var $container = document.getElementById('container')
var $topbar = document.getElementById('topbar')

var $EenEnDertigen = document.createElement('button')

var $player2 = document.createElement('button')
$player2.setAttribute("id", "btn_id2");
var $player3 = document.createElement('button')
$player3.setAttribute("id", "btn_id3");
var $player4 = document.createElement('button')
$player4.setAttribute("id", "btn_id4");

$EenEnDertigen.textContent = 'Een En Dertigen'

$player2.textContent = 'Player2'
$player3.textContent = 'Player3'
$player4.textContent = 'Player4'

$topbar.appendChild($EenEnDertigen)
$topbar.appendChild($player2)
$topbar.appendChild($player3)
$topbar.appendChild($player4)

var deck = Deck()

deck.cards.forEach(function (card, i) {
	card.enableDragging()
	card.enableFlipping()
})

$EenEnDertigen.addEventListener('click', function () {
  deck.queue(function (next) {
	deck.cards.forEach(function (card, i) {
		setTimeout(function () {
				card.setSide('back')
			}, i * 7.5)
		})
		next()
	})
	deck.shuffle()
	deck.shuffle()
	deck.EenEnDertigen()
	doSwap(-2)
})

$player2.addEventListener('click', function () {
	doSwap(2)
})

$player3.addEventListener('click', function () {
	doSwap(3)
})

$player4.addEventListener('click', function () {
	doSwap(4)
})

deck.mount($container)

deck.intro()
