import client from "../utils/apiClient.js";
import { errorHandler } from "../utils/error.js";

export const getInjuries = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/injuries", {
      params: queryParams,
    });

    response.status(200).json({ success: true, data: results.data.response });
  } catch (error) {
    console.error("❌ Error fetching injuries:", error);
    next(errorHandler(500, "Error fetching injuries."));
  }
};
