export interface IPlanet {

};

export interface IPlanetState {
  planetsData: IPlanet[];
  planetData: IPlanet | null;
};

export const initialState: IPlanetState = {
  planetsData: [],
  planetData: null,
};

export const getters = {
  getPlanetsData(state: IPlanetState) {
    return state.planetsData;
  },
  getPlanetData(state: IPlanetState) {
    return state.planetData;
  },
};

export const actions = {
  SET_PLANETS_DATA: 'SET_PLANETS_DATA',
  SET_PLANET_DATA: 'SET_PLANET_DATA',
};
