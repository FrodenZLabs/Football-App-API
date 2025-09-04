import express from "express";
import {
  getTeamCountries,
  getTeamInformation,
  getTeamSeasons,
  getTeamStatistics,
} from "../controllers/teams.controller.js";

const router = express.Router();

router.get("/team-info", getTeamInformation);
router.get("/team-statistics", getTeamStatistics);
router.get("/team-seasons", getTeamSeasons);
router.get("/team-countries", getTeamCountries);

export default router;
