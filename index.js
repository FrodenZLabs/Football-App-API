import express from "express";
import dotenv from "dotenv";
import fixturesRoutes from "./routes/fixtures.routes.js";
import standingsRoutes from "./routes/standings.routes.js";
import leaguesRoutes from "./routes/leagues.routes.js";
import countriesRoutes from "./routes/countries.routes.js";
import transferRoutes from "./routes/transfers.routes.js";
import teamsRoutes from "./routes/teams.routes.js";
import injuriesRoutes from "./routes/injuries.routes.js";
import statusRoutes from "./routes/status.routes.js";
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Routes
app.use("/api/fixtures", fixturesRoutes);
app.use("/api/standings", standingsRoutes);
app.use("/api/leagues", leaguesRoutes);
app.use("/api/countries", countriesRoutes);
app.use("/api/transfers", transferRoutes);
app.use("/api/teams", teamsRoutes);
app.use("/api/injuries", injuriesRoutes);
app.use("/api/status", statusRoutes);

// Middleware for handling errors
app.use((error, request, response, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";

  response.status(statusCode).json({ success: false, statusCode, message });
});
