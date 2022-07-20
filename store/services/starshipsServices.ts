import { IStarship } from "../model/starships";
import { ITableParams } from "../../types";
import constants from "~/constants";

export const getStarshipsService = async (
  params: ITableParams,
): Promise<IStarship[]> => {
  const urlParams = `search=${params.search}&page=${params.page}`;
  const data = await fetch(`${constants.API_URL}/api/starships/?${urlParams}`);
  return data.json();
};

export const getStarshipService = async (
  id: string,
): Promise<IStarship> => {
  const data = await fetch(`${constants.API_URL}/api/starships/${id}`);
  return data.json();
};
