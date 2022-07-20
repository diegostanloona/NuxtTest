import { IStarshipsState, IStarship } from "../model/starships";

export default {
  SET_STARSHIPS_DATA(state: IStarshipsState, data: IStarship[]) {
    state.starshipsData = data;
  },
  SET_STARSHIP_DATA(state: IStarshipsState, data: IStarship) {
    state.starshipData = data;
  },
}