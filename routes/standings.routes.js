import express from "express";
import { getStandings } from "../controllers/standings.controller.js";

const router = express.Router();

router.get("/", getStandings);

export default router;
