import {its_cards, pick_card, shuffled_deck} from "./model/entities/Deck";
import {a_card, its_face} from "./model/value_objects/Card";
import {if_present_return, optional} from "./model/utils/Optional";

const deck = shuffled_deck();
const picked_card = pick_card(deck, 0);
const maybe_card = optional(picked_card);
const default_card_face = its_face(a_card("KING","SPADE"));
const card_present = if_present_return(maybe_card, default_card_face);
const face = card_present(its_face);

console.log(face);

