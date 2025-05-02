import SearchIcon from "../ui/icons/SearchIcon"

/**
 * Renders the submit button for the search locations form
 * @param {React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>}
 * @returns {React.ReactElement<HTMLButtonElement>}
 */
const SearchButton = ({
	...props
}: React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>): React.ReactElement<HTMLButtonElement> => {
	return (
		<button
			type="submit"
			className="p-[8.67px] md:p-[13px] bg-primary dark:bg-primary-dark h-[40px] md:h-[60px] aspect-square rounded-[8px] md:rounded-[20px] cursor-pointer"
			aria-label="Search locations"
			{...props}
		>
			<SearchIcon className="invert" />
		</button>
	)
}
export default SearchButton
