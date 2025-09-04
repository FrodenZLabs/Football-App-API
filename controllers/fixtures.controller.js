import { io } from "../index.js";
import client from "../utils/apiClient.js";
import { errorHandler } from "../utils/error.js";

// Fetching fixtures by live, leagues, id, ids, date etc.
export const getFixtures = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/fixtures", { params: queryParams });

    // ✅ Normal response for non-live queries
    if (!queryParams.live) {
      return response
        .status(200)
        .json({ success: true, data: results.data.response });
    }

    // ✅ For live queries, start pushing updates via socket.io
    response.status(200).json({
      success: true,
      message: "Live updates started. Connect via socket.io",
    });

    // Poll API every 15 seconds (can be tuned)
    const interval = setInterval(async () => {
      try {
        const liveResults = await client.get("/fixtures", {
          params: queryParams,
        });
        io.emit("liveFixtures", liveResults.data.response);
      } catch (err) {
        console.error("❌ Error fetching live fixtures:", err.message);
      }
    }, 15000);

    // Stop polling when no clients are connected
    io.on("disconnect", () => {
      if (io.engine.clientsCount === 0) {
        clearInterval(interval);
        console.log("🛑 Stopped live updates (no clients connected)");
      }
    });
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
