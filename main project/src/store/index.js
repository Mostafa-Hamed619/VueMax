import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule,
  },
  getters: {
    isAuthenticated(state) {
      return !!state.auth.token;
    },
  },
  actions: {
    logout(context) {
      context.commit('auth/setUser', {
        token: null,
        userId: null,
        tokenExpiration: null,
        email: null,
      });
    },
  },
});

export default store;
