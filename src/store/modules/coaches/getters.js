export default {
  coachesList(state) {
    return state.coachesList;
  },
  // whether render coaches list or not
  hasCoach(state) {
    return state.coachesList && state.coachesList.length > 0;
  }
};