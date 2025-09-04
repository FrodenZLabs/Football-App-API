import client from "../utils/apiClient.js";
import { errorHandler } from "../utils/error.js";

// Fetching fixtures by live, leagues, id, ids, date etc.
export const getFixtures = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/fixtures", {
      params: queryParams,
    });

    response.status(200).json({ success: true, data: results.data.response });
  } catch (error) {
    console.error("❌ Error fetching fixtures:", error);
    next(errorHandler(500, "Error fetching fixtures."));
  }
};

export const getRounds = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/fixtures/rounds", {
      params: queryParams,
    });

    response.status(200).json({ success: true, data: results.data.response });
  } catch (error) {
    console.error("❌ Error fetching rounds:", error);
    next(errorHandler(500, "Error fetching rounds."));
  }
};

export const getHeadToHead = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/fixtures/headtohead", {
      params: queryParams,
    });

    response.status(200).json({ success: true, data: results.data.response });
  } catch (error) {
    console.error("❌ Error fetching head to head:", error);
    next(errorHandler(500, "Error fetching head to head."));
  }
};

export const getStatistics = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/fixtures/statistics", {
      params: queryParams,
    });

    response.status(200).json({ success: true, data: results.data.response });
  } catch (error) {
    console.error("❌ Error fetching statistics:", error);
    next(errorHandler(500, "Error fetching statistics."));
  }
};

export const getEvents = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/fixtures/events", {
      params: queryParams,
    });

    response.status(200).json({ success: true, data: results.data.response });
  } catch (error) {
    console.error("❌ Error fetching events:", error);
    next(errorHandler(500, "Error fetching events."));
  }
};

export const getLineUp = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/fixtures/lineups", {
      params: queryParams,
    });

    response.status(200).json({ success: true, data: results.data.response });
  } catch (error) {
    console.error("❌ Error fetching lineups:", error);
    next(errorHandler(500, "Error fetching lineups."));
  }
};

export const getPlayerStatistics = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/fixtures/players", {
      params: queryParams,
    });

    response.status(200).json({ success: true, data: results.data.response });
  } catch (error) {
    console.error("❌ Error fetching players statistics:", error);
    next(errorHandler(500, "Error fetching players statistics."));
  }
};
