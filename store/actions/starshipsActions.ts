import { actions } from "../model/starships"
import { getStarshipsService, getStarshipService } from "../services/starshipsServices";
import { ITableParams } from "../../types";

export default {
  async getStarshipsData (
    { commit }: any,
    { search, page }: ITableParams,
  ) {
    const data = await getStarshipsService({ search, page });
    commit(actions.SET_STARSHIPS_DATA, data);
  },
  async getStarshipData({ commit }: any, id: string) {
    const data = await getStarshipService(id);
    commit(actions.SET_STARSHIP_DATA, data);
  },
};
