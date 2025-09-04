# ⚽ FOOTBALL BACKEND API

A backend system built with Node.js, Express.js, MongoDB, and Socket.IO, powered by the API-Football service. This backend exposes RESTful endpoints to fetch football data (fixtures, leagues, teams, players, transfers, etc.) and supports real-time live scores updates through WebSockets.

## 🚀 Features

- Fixtures API <br/>
→ Fetch fixtures by ID, league, date, team, season, or custom filters. <br/>
→ Live fixtures streaming with Socket.IO.

- Leagues & Standings <br/>
→ Retrieve league and cup information. <br/>
→ Get updated standings by season.

- Teams & Players <br/>
→ Access team and player details. <br/>
→ Get line-ups, statistics, and injuries.

- Transfers & Status <br/>
→ Track player transfers. <br/>
→ Check server and API status.

- Real-Time Updates <br/>
→ Live fixtures delivered via WebSockets. <br/>
→ Ideal for dashboards, live score apps, or fantasy football.

## 🛠️ Tech Stack 
**Node.js + Express.js** – REST API framework <br/>
**MongoDB** – Data persistence <br/>
**Socket.IO** – Real-time communication <br/>
**Axios** – API requests to API-Football <br/>
**Dotenv** – Environment configuration

## 📦 Installation
Clone the repository
```
git clone https://github.com/FrodenZLabs/Football-App-API.git
cd football-backend
```

Install dependencies
```
npm install
```

Configure environment variables
Create a .env file in the root directory:
```
PORT=8000
API_FOOTBALL_BASE_URL=https://v3.football.api-sports.io
API_FOOTBALL_KEY=your_api_football_key
```

Run the server
```
npm run dev
```

Server will start on:
```
http://localhost:8000
```
## 🧪 Testing
- **Insomnia / Postman** → For testing REST endpoints. <br/>
- **Socket.IO Test Client (Chrome Extension)** → For testing real-time events.

## 📌 Future Improvements
- Add caching (Redis) for better performance. <br/>
- User authentication & custom data subscriptions. <br/>
- Admin dashboard for managing queries. <br/>
- CI/CD integration for deployments.

## 📄 License
MIT License © 2025
