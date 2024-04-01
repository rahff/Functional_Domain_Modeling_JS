class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
}
class Rank {
    constructor(numeric_value, name) {
        this.numeric_value = numeric_value;
        this.name = name;
    }
}
class Suit {
    constructor(value) {
        this.value = value;
    }
}
// type CARD_RANK = ACE | KING | QUEEN | JACK
const card_rank = {
    ACE: Object.freeze(new Rank(11, "ACE")),
    KING: Object.freeze(new Rank(10, "KING")),
    QUEEN: Object.freeze(new Rank( 10, "QUEEN")),
    JACK: Object.freeze(new Rank( 10, "JACK")),
}
const a_rank = rank_name => card_rank[rank_name];
const its_rank_name = rank => rank.name;
// type CARD_SUIT = SPADE | CLUB | HEART | DIAMOND
const card_suit = {
    SPADE: Object.freeze(new Suit("SPADE")),
    CLUB: Object.freeze(new Suit("CLUB")),
    HEART: Object.freeze(new Suit("HEART")),
    DIAMOND: Object.freeze(new Suit("DIAMOND"))
}
const a_suit = suit_name => card_suit[suit_name];
const its_suit_name = suit => suit.value;

// PUBLIC API

export const ranks = Object.keys(card_rank);
export const suits = Object.keys(card_suit);
export const its_face = (card) => Object.freeze({
    rank: its_rank_name(card.rank),
    suit: its_suit_name(card.suit)
});
// constructor for partial application
export const card = rank_name => suit_name => Object.freeze(new Card(a_rank(rank_name), a_suit(suit_name)));
// constructor
export const a_card = (rank_name, suit_name) => Object.freeze(new Card(a_rank(rank_name), a_suit(suit_name)));