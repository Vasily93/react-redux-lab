export const getWords = state => state.words.dictionary;

export const getFirstWords = state => {
  return getWords(state)
    .slice(0, 1000);
};
