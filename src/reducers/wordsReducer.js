import { LOAD_WORDS } from '../actions/wordsActions';
import dictionary from '../fixtures/words.json';

export default function reducer(state = { dictionary }, action) {
  switch(action.type) {
    case LOAD_WORDS:
      return [...state, action.payload];
    default:
      return state;
  }
}
