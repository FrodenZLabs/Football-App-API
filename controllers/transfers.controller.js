import client from "../utils/apiClient.js";
import { errorHandler } from "../utils/error.js";

export const getTransfers = async (request, response, next) => {
  const queryParams = request.query;

  try {
    const results = await client.get("/transfers", {
      params: queryParams,
    });

    response.status(200).json({ success: true, data: results.data.response });
  } catch (error) {
    console.error("❌ Error fetching transfers:", error);
    next(errorHandler(500, "Error fetching transfers."));
  }
};
