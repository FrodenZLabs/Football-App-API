import client from "../utils/apiClient.js";
import { errorHandler } from "../utils/error.js";

export const getStandings = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/standings", {
      params: queryParams,
    });

    response.status(200).json({ success: true, data: results.data.response });
  } catch (error) {
    console.error("❌ Error fetching standings:", error);
    next(errorHandler(500, "Error fetching standings."));
  }
};
