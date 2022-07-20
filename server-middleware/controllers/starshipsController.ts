import axios from "axios";
import { NextFunction, Request, Response } from "express";

export const getStarshipsData = async (req: Request, res: Response, next: NextFunction) => {
  const urlParams = new URLSearchParams(Object(req.query)).toString();
  const response: any = await axios.get(`https://swapi.dev/api/starships?${urlParams}`);
  const starshipsData = response.data.results.map((item: any) => {
    let url = item.url.split('/');
    url = `starships/${url[url.length - 2]}`;
    return {
      ...item,
      url,
  }});
  return res.status(200).json(starshipsData);
};

export const getStarshipData = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const response: any = await axios.get(`https://swapi.dev/api/starships/${id}`);
  const starshipData = response.data;
  return res.status(200).json(starshipData);
}