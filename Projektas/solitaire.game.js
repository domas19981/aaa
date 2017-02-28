
$.widget("Solitaire.game", {
    options: {
        cards: []
    },
    _create: function () {
        var game = this;
        game.createDeck();
    },
    createDeck: function () {
        var game = this;
        var signs = ["hearts", "clubs", "spades", "diamonds"];
        var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
        for (signIndex in signs) {

            for (valueIndex in values) {
                var card = {
                    sign: signs[signIndex],
                    value: values[valueIndex]
                }
                game.options.cards.push(card);
            }
        }

}
});