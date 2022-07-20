import axios from "axios";
import { NextFunction, Request, Response } from "express";

export const getPlanetsData = async (req: Request, res: Response, next: NextFunction) => {
  const urlParams = new URLSearchParams(Object(req.query)).toString();
  const response: any = await axios.get(`https://swapi.dev/api/planets?${urlParams}`);
  const planetsData = response.data.results.map((item: any) => {
    let url = item.url.split('/');
    url = `planets/${url[url.length - 2]}`;
    return {
      ...item,
      url,
  }});
  return res.status(200).json(planetsData);
};

export const getPlanetData = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const response: any = await axios.get(`https://swapi.dev/api/planets/${id}`);
  const planetData = response.data;
  return res.status(200).json(planetData);
}