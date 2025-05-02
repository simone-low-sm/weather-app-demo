import CircleButton from "../ui/CircleButton"
import SearchIcon from "../ui/icons/SearchIcon"

/**
 * Renders a round button with a magnifying glass icon. Has styling for dark mode.
 * @param {Object} props
 * @param {() => void} props.handleClick - A function that handles clicks on this component
 * @returns {React.ReactElement<HTMLButtonElement>}
 */
const SearchButton = ({
	handleClick,
}: {
	handleClick: () => void
}): React.ReactElement<HTMLButtonElement> => {
	return (
		<CircleButton onClick={handleClick} aria-label="Search">
			<SearchIcon />
		</CircleButton>
	)
}
export default SearchButton
