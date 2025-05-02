import Sun from "./Sun"
import Cloud from "./Cloud"

/**
 * This function renders the weather graphic based on the weather code. The weather code information is here at https://openweathermap.org/weather-conditions
 * @param props
 * @param {number} props.weatherCode - A code used to indicate weather. Weather types are grouped by code ranges. For example, 5xx is rain.
 * @returns {React.ReactElement}
 */
const WeatherGraphic = ({
	weatherCode,
}: {
	weatherCode: number
}): React.ReactElement => {
	switch (true) {
		case weatherCode == 800: // clear weather
			return <Sun />
		default:
			// since no other graphic provided, use cloud for all non clear weather
			return <Cloud />
	}
}
export default WeatherGraphic
