export default {
  coachesList(state) {
    return state.coachesList;
  },
  // whether render coaches list or not
  hasCoach(state) {
    return state.coachesList && state.coachesList.length > 0;
  },
  // identify the coach has registered or not
  // isCoach(state, getters, rootState, rootGetters) {...} -> doesn't use state and rootState, replace to _
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coachesList;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  }
};