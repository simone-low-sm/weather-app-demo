import Input from "../ui/forms/Input"
import SearchButton from "./SearchButton"

/**
 * Renders the search locations form
 * @param {Object} props
 * @param {() => void} props.handleSearch - A function that handles search form submission
 * @returns {React.ReactElement<HTMLFormElement>}
 */
const SearchForm = ({
	handleSearch,
}: {
	handleSearch: (e: React.FormEvent<HTMLFormElement>) => void
}): React.ReactElement<HTMLFormElement> => {
	return (
		<form
			onSubmit={handleSearch}
			className="flex gap-2.5 w-full md:w-[700px]"
		>
			<Input label="City" name="city" />
			<Input label="Country" name="country" />
			<SearchButton />
		</form>
	)
}
export default SearchForm
