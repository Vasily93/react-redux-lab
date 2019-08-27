import { LOAD_WORDS } from '';
import Dictionary from '../fixtures/words.json';

export default function reducer(state = { Dictionary }, action) {
  switch(action.type) {
    case LOAD_WORDS:
      return [...state, action.payload];
    default:
      return state;
  }
}
