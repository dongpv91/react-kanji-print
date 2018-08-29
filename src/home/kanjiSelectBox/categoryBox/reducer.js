import {SELECT_KANJI, SELECT_LEVEL} from './actionTypes'

const initialState = 5;
export const selectedLevel = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LEVEL:
      return action.level;
    default:
      return state;
  }
};

export const selectedKanji = (state = [], action) => {
  switch (action.type) {
    case SELECT_KANJI:
      let index = state.indexOf(action.kanji);
      if (index >= 0) {
        return [...state.slice(0, index), ...state.slice(index + 1)]
      }
      return [...state, action.kanji];
    default:
      return state;
  }
};