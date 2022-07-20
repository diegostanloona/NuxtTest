import { IPeopleState, IPerson } from "../model/people";

export default {
  SET_PEOPLE_DATA(state: IPeopleState, data: IPerson[]) {
    state.peopleData = data;
  },
  SET_PERSON_DATA(state: IPeopleState, data: IPerson) {
    state.personData = data;
  },
}