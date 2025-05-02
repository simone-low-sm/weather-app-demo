# 🌤️ Weather Search App

A simple React + Vite demo app to search and display real-time weather using the OpenWeather API. It features a dynamic favicon based on current weather, a persistent search history, and a dark mode toggle.

---

## 🚀 Features

-   🔍 **Search by city name** using OpenWeather's Geocoding API
-   📍 **Uses latitude & longitude** from geolocation results to fetch current weather
-   🖼️ **Dynamic favicon** changes (e.g., ☀️ for clear, ☁️ for cloudy)
-   🕑 **Search history** saved in `localStorage`
-   🌓 **Dark mode toggle** with persistent preference
-   ♻️ **Auto-loads last searched location** on app start
-   ⚡ **Built with Vite**, **React**, **TypeScript**, and **Tailwind CSS**

---

## 🛠️ Tech Stack

-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [OpenWeather API](https://openweathermap.org/api)
-   LocalStorage (for persistence)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/weather-search-app.git
cd weather-search-app

# Install dependencies
npm install
# or
yarn install
```

---

## 🔐 Environment Variables

1. Create a `.env` file in the root of the project:

    ```env
    VITE_OPENWEATHER_API_KEY=
    ```

2. Get your free API key from [OpenWeather](https://openweathermap.org/api) and paste it after the `=`.

---

## ▶️ Running the App

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📂 Project Structure

```
weather-app-demo/
├── public/                 # Static assets like index.html and favicon
├── src/                    # React components and application logic
│   ├── components/         # Reusable UI components
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Entry point of the application
├── .env                    # Environment variables (e.g., API keys)
├── .gitignore              # Specifies files to ignore in Git
├── eslint.config.js        # ESLint configuration
├── index.html              # Main HTML file
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Exact versions of installed dependencies
├── tsconfig.json           # TypeScript compiler configuration
├── tsconfig.app.json       # TypeScript config specific to the app
├── tsconfig.node.json      # TypeScript config for Node.js
├── vite.config.ts          # Vite build tool configuration
└── README.md               # Project documentation

```

---

## 🧪 Try It Out

-   Search a city like **"Tokyo"** — the favicon and display will update based on the weather.
-   Toggle **dark mode**, refresh — your preference is saved.
-   Search **another city**, then reload — your last result is auto-loaded.

---

## 📜 License

[MIT](LICENSE)

---

## 👨‍💻 Author

Created by [Your Name](https://github.com/your-username) — feel free to fork, star, and contribute!
