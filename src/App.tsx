import { FormEvent, useEffect, useState } from "react"
import "./App.css"
import WeatherReport from "./components/WeatherReport"
import SearchHistory from "./components/SearchHistory"
import SearchForm from "./components/SearchForm/SearchForm"
import ErrorCard from "./components/ui/ErrorCard"
import { fetchWeather, FetchWeatherResult, searchWeather } from "./util/http"
import { formatDate } from "./util/tools"
import { HISTORY_LOCAL_STORAGE_KEY } from "./util/constants"
import { SearchRecord } from "./components/SearchRecord/SearchRecordCard"
import DarkModeToggle from "./components/DarkModeToggle"
import WeatherFavicon from "./components/ui/WeatherFavicon"
// import backgroundImage from "./assets/bg-light.png"
// import backgroundImageDark from "./assets/bg-dark.png"

/**
 * This app allows user to search for weather using city and country fields.
 * Search history is stored in local storage and can be deleted or used to search again.
 * There is a toggle for light or dark mode and the setting is saved to local storage.
 *
 * @returns {React.ReactElement}
 */
function App(): React.ReactElement {
	// since it is a simple app, no need to use redux
	// history records and search result are stored in state in top level of the app
	const [weather, setWeather] = useState<FetchWeatherResult>(
		{} as FetchWeatherResult
	)
	const [history, setHistory] = useState<SearchRecord[]>([])
	const [error, setError] = useState<string>()

	const addHistory = (record: SearchRecord) => {
		setHistory((history) => {
			localStorage.setItem(
				HISTORY_LOCAL_STORAGE_KEY,
				JSON.stringify([record].concat(history))
			)
			return [record].concat(history)
		})
	}
	const deleteHistory = (index: number) => {
		setHistory((history) => {
			const arr = [...history]
			arr.splice(index, 1)
			localStorage.setItem(HISTORY_LOCAL_STORAGE_KEY, JSON.stringify(arr))
			return arr
		})
	}

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const city = formData.get("city")?.toString() || ""
		const country = formData.get("country")?.toString() || ""

		if (city || country) {
			searchWeather({ city, country })
				.then((res) => {
					if (res) {
						setError(undefined)
						setWeather(res)
						console.log("res", res)
						addHistory({
							city: res?.name,
							country: res?.sys?.country,
							lat: res?.coord?.lat,
							lon: res?.coord?.lon,
							time: formatDate(res?.dt),
						})
					} else {
						setError("Not Found")
					}
				})
				.catch(() => setError("Error loading data"))
		}
	}

	const handleSearchAgain = (
		lat: string,
		lon: string,
		isUserAction = true
	) => {
		fetchWeather(lat, lon)
			.then((res) => {
				if (res) {
					setError(undefined)
					setWeather(res)
					if (isUserAction)
						addHistory({
							city: res?.name,
							country: res?.sys?.country,
							lat: res?.coord?.lat,
							lon: res?.coord?.lon,
							time: formatDate(res?.dt),
						})
				} else {
					setError("Not Found")
				}
			})
			.catch(() => setError("Error loading data"))
	}

	// on app load, check local storage for history
	useEffect(() => {
		const oldHistory = JSON.parse(
			localStorage.getItem(HISTORY_LOCAL_STORAGE_KEY) || "[]"
		)
		setHistory(oldHistory)

		let lat = "1.2903",
			lon = "103.852" // default coords for singapore
		if (oldHistory?.[0]) {
			// load most recent weather coords
			lat = oldHistory[0].lat
			lon = oldHistory[0].lon
		}
		handleSearchAgain(lat, lon, false)

		// ignore warning as this only runs once on mount
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="bg-cover bg-[url('resources/images/bg-light.png')] dark:bg-[url('resources/images/bg-dark.png')] bg-opacity-60 bg-blend-soft-light min-h-screen min-w-screen text-black dark:text-white p-5 flex flex-col items-center text-sm md:text-base">
			<div className="md:w-[700px]">
				<SearchForm handleSearch={handleSearch} />
				<ErrorCard error={error} />
				<div className="pt-[139px] md:pt-[112px]">
					<div className="backdrop-blur-[20px] bg-white/20 dark:bg-[rgba(26,26,26,0.3)] rounded-[20px] md:rounded-[40px] border-1 border-white/50 dark:border-0 p-[20px] md:p-[40px] flex flex-col gap-5 md:gap-6.5">
						<WeatherReport weather={weather} />
						<SearchHistory
							history={history}
							deleteHistory={deleteHistory}
							handleSearch={handleSearchAgain}
						/>
					</div>
				</div>
				<div className="w-full flex pt-2">
					<DarkModeToggle />
				</div>
			</div>
			<WeatherFavicon weatherCode={weather?.weather?.[0]?.id} />
		</div>
	)
}

export default App
