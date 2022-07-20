import { actions } from "../model/people"
import { getPeopleService, getPersonService } from "../services/peopleServices";
import { ITableParams } from "../../types";

export default {
  async getPeopleData (
    { commit }: any,
    { search, page }: ITableParams,
  ) {
    const data = await getPeopleService({ search, page });
    commit(actions.SET_PEOPLE_DATA, data);
  },
  async getPersonData({ commit }: any, id: string) {
    const data = await getPersonService(id);
    commit(actions.SET_PERSON_DATA, data);
  },
};
