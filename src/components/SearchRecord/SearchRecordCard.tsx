import SearchButton from "./SearchButton"
import DeleteButton from "./DeleteButton"

/**
 * Represents a record of a weather search, including time and location data.
 * Extends the `SearchWeatherParams` interface to include additional fields.
 *
 * @interface SearchRecord
 *
 * @property {string} city - The city name of the location searched.
 * @property {string} country - The country of the location searched.
 * @property {string} time - The time when the search was made in unix UTC.
 * @property {string} lat - The latitude of the location searched.
 * @property {string} lon - The longitude of the location searched.
 */
export interface SearchRecord {
	city: string
	country: string
	time: string
	lat: string
	lon: string
}

/**
 * Renders a card containing search record information as well as buttons to search the same location again or delete this record.
 * @param {Object} props
 * @param {SearchRecord} props.record - The search record data to display in this card.
 * @param {() => void} props.handleSearch - A function that handles clicks on the search button.
 * @param {() => void} props.handleDelete - A function that handles clicks on the delete button.
 * @returns
 */
const SearchRecordCard = ({
	record,
	handleSearch,
	handleDelete,
}: {
	record: SearchRecord
	handleSearch: () => void
	handleDelete: () => void
}) => {
	return (
		<div className="bg-white/40 dark:bg-[rgba(26,26,26,0.5)] rounded-2xl py-3.25 px-2.75 flex gap-2.5">
			<div className="grow md:flex justify-between items-center">
				<p>{`${record.city}, ${record.country}`}</p>
				<p className="text-[10px] md:text-[14px] dark:opacity-50">{`${record.time}`}</p>
			</div>
			<SearchButton handleClick={handleSearch} />
			<DeleteButton handleClick={handleDelete} />
		</div>
	)
}
export default SearchRecordCard
