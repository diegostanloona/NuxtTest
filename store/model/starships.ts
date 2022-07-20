export interface IStarship {

};

export interface IStarshipsState {
  starshipsData: IStarship[];
  starshipData: IStarship | null;
};

export const initialState: IStarshipsState = {
  starshipsData: [],
  starshipData: null,
};

export const getters = {
  getStarshipsData(state: IStarshipsState) {
    return state.starshipsData;
  },
  getStarshipData(state: IStarshipsState) {
    return state.starshipData;
  },
};

export const actions = {
  SET_STARSHIPS_DATA: 'SET_STARSHIPS_DATA',
  SET_STARSHIP_DATA: 'SET_STARSHIP_DATA',
};