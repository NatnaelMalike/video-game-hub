# 🎮 Video Game Hub

**Video Game Hub** is a web application that fetches and displays a list of video games using the [RAWG API](https://rawg.io/apidocs). 

## Features

- **Game Browsing**: Fetches and displays a list of popular games from the RAWG API.
- **Filtering**: Users can filter games by:
  - Genre (Action, Adventure, RPG, etc.)
  - Platform (PC, PlayStation, Xbox, etc.)
  - Order by Release Date, Relevance, Popularity.
- **Search**: Search for games by name.
- **Game Details**: Each game has a detailed page that includes:
  - Game description and attributes (release date, rating, etc.)
  - Game trailer
  - Screenshots of the game.

## Live Demo

You can view a live demo of the application [here](https://v-game-hub.vercel.app/).

---

## 🛠️ Tech Stack

- **Frontend**: React + Typescript, Chakra Ui
- **API**: [RAWG API](https://rawg.io/apidocs)
- **State Management**: zustand, ReactQuery(tanstack)
- **Routing**: React Router v6
---

## 🗃️ Project Setup

### Prerequisites

- Node.js installed on your local machine.
- RAWG API key. You can get one from the [RAWG API website](https://rawg.io/apidocs).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NatnaelMalike/video-game-hub.git
   cd video-game-hub
2. install dependencies

   ```bash
   npm install
3. Create an .env file in the root of the project and add your RAWG API key:
   ```bash
   VITE_API_KEY = your_rawg_api_key_here
4. start the development server:
   ```bash
   npm run dev




