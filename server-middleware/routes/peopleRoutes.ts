import { Router } from "express";
import { getPeopleData, getPersonData } from "../controllers/peopleController";

const router = Router();

router.get('/', getPeopleData);

router.get('/:id', getPersonData);

export default router;