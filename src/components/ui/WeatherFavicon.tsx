import { useEffect } from "react"

/**
 * This component updates the browser's favicon based on the provided weather code.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} [props.weatherCode=800] - The weather condition code. Defaults to 800 (clear sky).
 *
 * @returns {null} This component does not render anything to the DOM.
 *
 * @example
 * <WeatherFavicon weatherCode={802} />
 */
const WeatherFavicon = ({
	weatherCode = 800,
}: {
	weatherCode?: number
}): null => {
	useEffect(() => {
		const link: HTMLLinkElement | null =
			document.querySelector("link[rel*='icon']") ||
			document.createElement("link")

		if (!link) {
			return
		}

		link.type = "image/x-icon"
		link.rel = "shortcut icon"
		link.href = weatherCode === 800 ? "/sun.png" : "/cloud.png"
		document.getElementsByTagName("head")[0].appendChild(link)
	}, [weatherCode])

	return null
}

export default WeatherFavicon
