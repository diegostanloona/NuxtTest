import { Router } from "express";
import { getPlanetsData, getPlanetData } from "../controllers/planetsController";

const router = Router();

router.get('/', getPlanetsData);

router.get('/:id', getPlanetData);

export default router;