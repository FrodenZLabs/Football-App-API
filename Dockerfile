# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.16.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package.json .

RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 8000

# Run the application.
CMD [ "node", "index.js"]