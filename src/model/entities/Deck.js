import {card, suits, ranks} from "../value_objects/Card";



class Deck {

    constructor(cards) {
        this.cards = cards;
    }
}

// PRIVATE API
const pack_of_card = () => {
    const cards = [];
    ranks.forEach(rank_name => {
        const partial_card = card(rank_name);
        suits.forEach(suit_name => {
            cards.push(partial_card(suit_name));
        })
    })
    return cards;
};

const shuffle_pack_of_card = (pack_of_cards) => {
    for (let i = pack_of_cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pack_of_cards[i], pack_of_cards[j]] = [pack_of_cards[j], pack_of_cards[i]];
    }
    return pack_of_cards;
};

// PUBLIC API

export const its_cards = (deck) => Object.freeze([...deck.cards]);
export const unshuffled_deck = () => Object.freeze(new Deck(pack_of_card()));
export const shuffled_deck = () => Object.freeze(new Deck(shuffle_pack_of_card(pack_of_card())));
export const shuffle_deck = deck => Object.freeze(new Deck(shuffle_pack_of_card(its_cards(deck))));
export const pick_card = (deck, index) => Object.freeze({...its_cards(deck)[index]});


