import { Router } from "express";
import { getStarshipsData, getStarshipData } from "../controllers/starshipsController";

const router = Router();

router.get('/', getStarshipsData);

router.get('/:id', getStarshipData);

export default router;