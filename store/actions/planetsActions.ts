import { actions } from "../model/planets"
import { getPlanetsService, getPlanetService } from "../services/planetsServices";
import { ITableParams } from "../../types";

export default {
  async getPlanetsData (
    { commit }: any,
    { search, page }: ITableParams,
  ) {
    const data = await getPlanetsService({ search, page });
    commit(actions.SET_PLANETS_DATA, data);
  },
  async getPlanetData({ commit }: any, id: string) {
    const data = await getPlanetService(id);
    commit(actions.SET_PLANET_DATA, data);
  },
};
