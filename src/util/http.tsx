import axios from "axios"
import { API_KEY } from "./constants"

export type FetchWeatherResult = {
	coord: { lat: string; lon: string }
	weather: { id: number; main: string }[]
	main: {
		temp: number
		temp_min: number
		temp_max: number
		humidity: number
	}
	dt: number
	sys: { country: string }
	name: string
}

/**
 * Fetches current weather data from the OpenWeather API based on latitude and longitude.
 *
 * @async
 * @function fetchWeather
 * @param {string} lat - The latitude of the location to retrieve weather data for.
 * @param {string} lon - The longitude of the location to retrieve weather data for.
 * @returns {Promise<FetchWeatherResult>} A promise that resolves to the weather data response from the API.
 *
 * @remarks
 * The returned data is in metric units (Celsius) and matches the structure of OpenWeatherMap's `/weather` endpoint.
 *
 * @throws {AxiosError} If the API request fails.
 */
export const fetchWeather = async (
	lat: string,
	lon: string
): Promise<FetchWeatherResult> => {
	const res = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${encodeURIComponent(
			lat
		)}&lon=${encodeURIComponent(lon)}&appid=${API_KEY}`
	)

	return res?.data
}

/**
 * Represents the parameters used to search for weather data.
 *
 * @interface SearchWeatherParams
 * @property {string} city - The name of the city to search for.
 * @property {string} country - The country code (e.g., 'US', 'GB') associated with the city.
 */
export interface SearchWeatherParams {
	city: string
	country: string
}

/**
 * Searches for weather data based on a city and country by first resolving geographic coordinates
 * using the OpenWeather Geocoding API, then fetching the weather data for those coordinates.
 *
 * @async
 * @function searchWeather
 * @param {SearchWeatherParams} [params] - An optional object containing `city` and `country` to search weather for.
 * @returns {Promise<FetchWeatherResult | undefined>} A promise that resolves to the weather data if found, or `undefined` if no matching location is found.
 *
 * @throws {Error} Throws an error if the API request fails.
 *
 * @remarks
 * - Uses OpenWeather's geocoding API to convert location name to latitude and longitude.
 * - Relies on `fetchWeather` to retrieve the actual weather data after coordinates are resolved.
 * - Ensure `API_KEY` is set and valid in the environment variables.
 */
export const searchWeather = async (
	params?: SearchWeatherParams
): Promise<FetchWeatherResult | undefined> => {
	if (!params?.city && !params?.country) return undefined

	try {
		const geoRes = await axios.get(
			`http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
				[params.city, params.country].filter(Boolean).join(",")
			)}&limit=1&appid=${API_KEY}`
		)

		if (geoRes.data?.length > 0) {
			const weatherRes = await fetchWeather(
				geoRes.data[0]?.lat,
				geoRes.data[0]?.lon
			)

			return weatherRes
		}
	} catch (error) {
		console.log("error", error)
		throw new Error("Error loading data")
	}
	return
}
