import { createStore } from "vuex";

import coachesModule from './modules/coaches/index';

const store = createStore({
  modules: {
    // used namespaced in coachesModule
    coaches: coachesModule
  }
});

export default store;