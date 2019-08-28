export const getWords = state => state.words.dictionary;

export const getFirstWords = (state, count = 20) => {
  return getWords(state)
    .slice(0, count);
};

export const getSearchByTerm = state => state.words.searchTerm;
