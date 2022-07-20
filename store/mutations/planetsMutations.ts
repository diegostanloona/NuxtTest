import { IPlanetState, IPlanet } from "../model/planets";

export default {
  SET_PLANETS_DATA(state: IPlanetState, data: IPlanet[]) {
    state.planetsData = data;
  },
  SET_PLANET_DATA(state: IPlanetState, data: IPlanet) {
    state.planetData = data;
  },
}