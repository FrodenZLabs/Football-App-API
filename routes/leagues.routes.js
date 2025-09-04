import express from "express";
import { getLeagues } from "../controllers/leagues.controller.js";

const router = express.Router();

router.get("/", getLeagues);

export default router;
