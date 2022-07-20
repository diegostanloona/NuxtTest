import { IPlanet } from "../model/planets";
import { ITableParams } from "../../types";
import constants from "~/constants";

export const getPlanetsService = async (
  params: ITableParams,
): Promise<IPlanet[]> => {
  const urlParams = `search=${params.search}&page=${params.page}`;
  const data = await fetch(`${constants.API_URL}/api/planets/?${urlParams}`);
  return data.json();
};

export const getPlanetService = async (
  id: string,
): Promise<IPlanet> => {
  const data = await fetch(`${constants.API_URL}/api/planets/${id}`);
  return data.json();
};
