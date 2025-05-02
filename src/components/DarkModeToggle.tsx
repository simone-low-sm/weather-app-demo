import { ChangeEvent, useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import Toggle from "react-toggle"
import { DARK_MODE_LOCAL_STORAGE_KEY } from "../util/constants"

/**
 * This component renders a toggle switch that allows the user to change between light and dark modes.
 * On toggling to dark mode, "dark" is added as a class attribute to the html element
 * @returns {React.ReactElement}
 */
const DarkModeToggle = (): React.ReactElement => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

	// load previous state from local storage
	useEffect(() => {
		const oldMode = JSON.parse(
			localStorage.getItem(DARK_MODE_LOCAL_STORAGE_KEY) || "false"
		)
		setIsDarkMode(oldMode)
		document.documentElement.className = oldMode ? "dark" : ""
	}, [])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIsDarkMode(e.target.checked)
		document.documentElement.className = e.target.checked ? "dark" : ""
		localStorage.setItem(
			DARK_MODE_LOCAL_STORAGE_KEY,
			JSON.stringify(e.target.checked)
		)
	}

	return (
		<label
			aria-label="Dark mode toggle"
			className="flex items-center gap-2"
		>
			<Toggle
				icons={{
					checked: <FaMoon size={10} color="white" />,
					unchecked: <FaSun size={12} />,
				}}
				className="dark-mode-toggle"
				checked={isDarkMode}
				onChange={handleChange}
			/>
			<span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
		</label>
	)
}
export default DarkModeToggle
