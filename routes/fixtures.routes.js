import express from "express";
import {
  getEvents,
  getFixtures,
  getHeadToHead,
  getLineUp,
  getPlayerStatistics,
  getRounds,
  getStatistics,
} from "../controllers/fixtures.controller.js";

const router = express.Router();

router.get("/", getFixtures);
router.get("/rounds", getRounds);
router.get("/headtohead", getHeadToHead);
router.get("/statistics", getStatistics);
router.get("/events", getEvents);
router.get("/lineups", getLineUp);
router.get("/players-statistics", getPlayerStatistics);

export default router;
