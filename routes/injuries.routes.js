import express from "express";
import { getInjuries } from "../controllers/injuries.controller.js";

const router = express.Router();

router.get("/", getInjuries);

export default router;
