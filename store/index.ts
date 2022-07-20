import Vue from 'vue';
import Vuex from 'vuex';
import {
  initialState as peopleInitialState,
  getters as peopleGetters,
} from './model/people';
import {
  initialState as planetsInitialState,
  getters as planetsGetters,
} from './model/planets';
import {
  initialState as starshipsInitialState,
  getters as starshipsGetters,
} from './model/starships';

import peopleMutations from './mutations/peopleMutations';
import planetsMutations from './mutations/planetsMutations';
import starshipsMutations from './mutations/starshipsMutations';

import peopleActions from './actions/peopleActions';
import planetsActions from './actions/planetsActions';
import starshipsActions from './actions/starshipsActions';

Vue.use(Vuex);

const initialState = {
  ...peopleInitialState,
  ...planetsInitialState,
  ...starshipsInitialState,
};

export default () => new Vuex.Store({
  strict: true,
  state: initialState,
  mutations: {
    ...peopleMutations,
    ...planetsMutations,
    ...starshipsMutations,
    CLEAR_DATA(state) {
      state = initialState;
    },
  },
  actions: {
    ...peopleActions,
    ...planetsActions,
    ...starshipsActions,
  },
  getters: {
    ...peopleGetters,
    ...planetsGetters,
    ...starshipsGetters,
  },
})
