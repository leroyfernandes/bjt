var deck = function(numberOfDecks){
	var symbols = {
		'heart': '&hearts;',
		'diamond': '&diams;',
		'spade': '&spades;',
		'club': '&clubs;'
	};

	var standardDeck = [
		{ 'display': '2'+symbols.heart, 'value': 2 },
		{ 'display': '3'+symbols.heart, 'value': 3 },
		{ 'display': '4'+symbols.heart, 'value': 4 },
		{ 'display': '5'+symbols.heart, 'value': 5 },
		{ 'display': '6'+symbols.heart, 'value': 6 },
		{ 'display': '7'+symbols.heart, 'value': 7 },
		{ 'display': '8'+symbols.heart, 'value': 8 },
		{ 'display': '9'+symbols.heart, 'value': 9 },
		{ 'display': '10'+symbols.heart, 'value': 10 },
		{ 'display': 'J'+symbols.heart, 'value': 10 },
		{ 'display': 'Q'+symbols.heart, 'value': 10 },
		{ 'display': 'K'+symbols.heart, 'value': 10 },
		{ 'display': 'A'+symbols.heart, 'value': 11 },
		
		{ 'display': '2'+symbols.diamond, 'value': 2 },
		{ 'display': '3'+symbols.diamond, 'value': 3 },
		{ 'display': '4'+symbols.diamond, 'value': 4 },
		{ 'display': '5'+symbols.diamond, 'value': 5 },
		{ 'display': '6'+symbols.diamond, 'value': 6 },
		{ 'display': '7'+symbols.diamond, 'value': 7 },
		{ 'display': '8'+symbols.diamond, 'value': 8 },
		{ 'display': '9'+symbols.diamond, 'value': 9 },
		{ 'display': '10'+symbols.diamond, 'value': 10 },
		{ 'display': 'J'+symbols.diamond, 'value': 10 },
		{ 'display': 'Q'+symbols.diamond, 'value': 10 },
		{ 'display': 'K'+symbols.diamond, 'value': 10 },
		{ 'display': 'A'+symbols.diamond, 'value': 11 },

		{ 'display': '2'+symbols.spade, 'value': 2 },
		{ 'display': '3'+symbols.spade, 'value': 3 },
		{ 'display': '4'+symbols.spade, 'value': 4 },
		{ 'display': '5'+symbols.spade, 'value': 5 },
		{ 'display': '6'+symbols.spade, 'value': 6 },
		{ 'display': '7'+symbols.spade, 'value': 7 },
		{ 'display': '8'+symbols.spade, 'value': 8 },
		{ 'display': '9'+symbols.spade, 'value': 9 },
		{ 'display': '10'+symbols.spade, 'value': 10 },
		{ 'display': 'J'+symbols.spade, 'value': 10 },
		{ 'display': 'Q'+symbols.spade, 'value': 10 },
		{ 'display': 'K'+symbols.spade, 'value': 10 },
		{ 'display': 'A'+symbols.spade, 'value': 11 },

		{ 'display': '2'+symbols.club, 'value': 2 },
		{ 'display': '3'+symbols.club, 'value': 3 },
		{ 'display': '4'+symbols.club, 'value': 4 },
		{ 'display': '5'+symbols.club, 'value': 5 },
		{ 'display': '6'+symbols.club, 'value': 6 },
		{ 'display': '7'+symbols.club, 'value': 7 },
		{ 'display': '8'+symbols.club, 'value': 8 },
		{ 'display': '9'+symbols.club, 'value': 9 },
		{ 'display': '10'+symbols.club, 'value': 10 },
		{ 'display': 'J'+symbols.club, 'value': 10 },
		{ 'display': 'Q'+symbols.club, 'value': 10 },
		{ 'display': 'K'+symbols.club, 'value': 10 },
		{ 'display': 'A'+symbols.club, 'value': 11 },
	];

	var shuffledDeck = [];

	return {
		'standardDeck': standardDeck,
		'shuffleDeck': function(input){
			for (var i = input.length-1; i >=0; i--) {
		        var randomIndex = Math.floor(Math.random()*(i+1)); 
		        var itemAtIndex = input[randomIndex]; 
		         
		        input[randomIndex] = input[i]; 
		        input[i] = itemAtIndex;
		    }

		    return input;
		},
		'displayDeck': function(input){
			for(var i=0; i<input.length; i++){
				$('body').append( input[i]['display'] );
			}
			$('body').append('<br>');
		}
	}
	
}

$(function(){
	var d = deck();
	d.displayDeck(d.standardDeck);
	var sixDeck = [];
	sixDeck = sixDeck.concat(d.standardDeck);
	sixDeck = sixDeck.concat(d.standardDeck);
	var shuffledDeck = d.shuffleDeck( sixDeck );
	d.displayDeck(shuffledDeck);
});

