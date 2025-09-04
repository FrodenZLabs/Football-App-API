import client from "../utils/apiClient.js";
import { errorHandler } from "../utils/error.js";

export const getTeamInformation = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/teams", {
      params: queryParams,
    });

    response.status(200).json({ success: true, data: results.data.response });
  } catch (error) {
    console.error("❌ Error fetching teams:", error);
    next(errorHandler(500, "Error fetching teams."));
  }
};

export const getTeamStatistics = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/teams/statistics", {
      params: queryParams,
    });

    response.status(200).json({ success: true, data: results.data.response });
  } catch (error) {
    console.error("❌ Error fetching teams statistics:", error);
    next(errorHandler(500, "Error fetching teams statistics."));
  }
};

export const getTeamSeasons = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/teams/seasons", {
      params: queryParams,
    });

    response.status(200).json({ success: true, data: results.data.response });
  } catch (error) {
    console.error("❌ Error fetching teams seasons:", error);
    next(errorHandler(500, "Error fetching teams seasons."));
  }
};

export const getTeamCountries = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/teams/countries", {
      params: queryParams,
    });

    response.status(200).json({ success: true, data: results.data.response });
  } catch (error) {
    console.error("❌ Error fetching teams/countries:", error);
    next(errorHandler(500, "Error fetching teams/countries."));
  }
};
