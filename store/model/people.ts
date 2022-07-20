export interface IPerson {

};

export interface IPeopleState {
  peopleData: IPerson[];
  personData: IPerson | null;
};

export const initialState: IPeopleState = {
  peopleData: [],
  personData: null,
};

export const getters = {
  getPeopleData(state: IPeopleState) {
    return state.peopleData;
  },
  getPersonData(state: IPeopleState) {
    return state.personData;
  },
};

export const actions = {
  SET_PEOPLE_DATA: 'SET_PEOPLE_DATA',
  SET_PERSON_DATA: 'SET_PERSON_DATA',
};