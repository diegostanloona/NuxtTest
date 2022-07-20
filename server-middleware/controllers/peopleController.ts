import axios from "axios";
import { NextFunction, Request, Response } from "express";

export const getPeopleData = async (req: Request, res: Response, next: NextFunction) => {
  const urlParams = new URLSearchParams(Object(req.query)).toString();
  const response: any = await axios.get(`https://swapi.dev/api/people?${urlParams}`);
  const peopleData = response.data.results.map((item: any) => {
    let url = item.url.split('/');
    url = `people/${url[url.length - 2]}`;
    return {
      ...item,
      films: item.films.length,
      vehicles: item.vehicles.length,
      starships: item.starships.length,
      url,
  }});
  return res.status(200).json(peopleData);
};

export const getPersonData = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const response: any = await axios.get(`https://swapi.dev/api/people/${id}`);
  const personData = response.data;
  return res.status(200).json(personData);
}