import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const client = axios.create({
  baseURL: process.env.API_FOOTBALL_BASE_URL,
  headers: {
    "x-apisports-key": process.env.API_FOOTBALL_KEY,
  },
  timeout: 10000,
});

export default client;
