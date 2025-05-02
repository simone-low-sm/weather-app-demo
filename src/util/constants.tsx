/**
 * API key used to authenticate requests to the OpenWeather API.
 * Loaded from the environment variable `VITE_OPENWEATHER_API_KEY`.
 *
 * @constant {string}
 */
export const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

/**
 * Local storage key used to persist the search history in the weather app.
 *
 * @constant {string}
 */
export const HISTORY_LOCAL_STORAGE_KEY = "weather-app-demo"

/**
 * Local storage key used to persist the dark mode preference in the weather app.
 *
 * @constant {string}
 */
export const DARK_MODE_LOCAL_STORAGE_KEY = "weather-app-demo-isDarkMode"
