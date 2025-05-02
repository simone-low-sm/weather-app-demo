import CircleButton from "../ui/CircleButton"
import TrashCanIcon from "../ui/icons/TrashCanIcon"

/**
 * Renders a round button with a trash can icon. Has styling for dark mode.
 * @param {Object} props
 * @param {() => void} props.handleClick - A function that handles clicks on this component
 * @returns {React.ReactElement<HTMLButtonElement>}
 */
const DeleteButton = ({
	handleClick,
}: {
	handleClick: () => void
}): React.ReactElement<HTMLButtonElement> => {
	return (
		<CircleButton onClick={handleClick} aria-label="Delete">
			<TrashCanIcon />
		</CircleButton>
	)
}
export default DeleteButton
