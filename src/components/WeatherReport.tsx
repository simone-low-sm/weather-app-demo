import { FetchWeatherResult } from "../util/http"
import { formatDate } from "../util/tools"
import WeatherGraphic from "./WeatherGraphic/WeatherGraphic"

/**
 * A component that displays a styled weather report, including temperature, humidity,
 * location, date, and a visual weather graphic. Data is rendered responsively
 * for different screen sizes and is announced politely to screen readers when updated.
 *
 * @component
 * @param {Object} props
 * @param {FetchWeatherResult} props.weather - Weather data object, expected to contain fields like `main.temp`, `main.humidity`,
 * `sys.country`, `name`, `dt`, and `weather`. The structure aligns with OpenWeatherMap API responses.
 * @returns {React.ReactElement} The rendered weather report.
 *
 * @accessibility
 * Uses `aria-live="polite"` to allow screen readers to announce updates without disrupting user flow.
 */
const WeatherReport = ({
	weather,
}: {
	weather: FetchWeatherResult
}): React.ReactElement => {
	return (
		<div
			className="p-2 flex justify-between relative flex-col"
			aria-live="polite"
		>
			<p>Today's Weather</p>
			<div className="flex md:flex-col gap-2 grow justify-between">
				<div className="flex flex-col gap-1 md:gap-1">
					<p className="text-primary dark:text-white font-bold text-6xl md:text-8xl">
						{Math.round(weather?.main?.temp)}
						{`\u00B0`}
					</p>
					<p>{`H: ${Math.round(
						weather?.main?.temp_max
					)}\u00B0 L: ${Math.round(
						weather?.main?.temp_min
					)}\u00B0`}</p>
					<p className="font-bold md:hidden text-[#666666] dark:text-white">{`${weather?.sys?.country}, ${weather?.name}`}</p>
				</div>
				<div className="flex flex-col-reverse gap-1.5 justify-start text-right md:flex-row md:justify-between text-[#666666] dark:text-white">
					<p className="font-bold hidden md:block">{`${weather?.sys?.country}, ${weather?.name}`}</p>
					<p>{`${formatDate(weather?.dt)}`}</p>
					<p>{`Humidity: ${weather?.main?.humidity}%`}</p>
					<p>{`${weather?.weather?.[0]?.main}`}</p>
				</div>
			</div>
			<div className="aria-hidden absolute top-[-90px] right-[-10px] md:top-[-138px] w-[150px] md:w-[300px]">
				<WeatherGraphic weatherCode={weather?.weather?.[0]?.id} />
			</div>
		</div>
	)
}
export default WeatherReport
