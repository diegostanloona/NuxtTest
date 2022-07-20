import { IPerson } from "../model/people";
import { ITableParams } from "../../types";
import constants from "~/constants";

export const getPeopleService = async (
  params: ITableParams,
): Promise<IPerson[]> => {
  const urlParams = `search=${params.search}&page=${params.page}`;
  const data = await fetch(`${constants.API_URL}/api/people/?${urlParams}`);
  return data.json();
};

export const getPersonService = async (
  id: string,
): Promise<IPerson> => {
  const data = await fetch(`${constants.API_URL}/api/people/${id}`);
  return data.json();
};
