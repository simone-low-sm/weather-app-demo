import SearchRecordCard, { SearchRecord } from "./SearchRecord/SearchRecordCard"

/**
 * This component renders the search history card. It takes an array of search records as well as functions to delete from this list and to search based on record locations.
 * @param {Object} props
 * @param {SearchRecord[]} [props.history] - The list of the user's search records to display.
 * @param {(index: number) => void} props.deleteHistory - A function that deletes a search record from a list based on its index.
 * @param {(lat: string, lon: string) => void} props.handleSearch - A function that searches weather locations given latitude and longitude.
 * @returns {React.ReactElement}
 */
const SearchHistory = ({
	history = [],
	deleteHistory,
	handleSearch,
}: {
	history?: SearchRecord[]
	deleteHistory: (index: number) => void
	handleSearch: (lat: string, lon: string) => void
}): React.ReactElement => {
	return (
		<div className="bg-white/20 dark:bg-[rgba(26,26,26,0.3)] rounded-[24px] pt-[22px] md:pt-[23px] px-[15px] md:px-[20px] p-5 flex flex-col gap-4.5">
			<p className="mb-2">Search History</p>
			<div className="flex flex-col gap-4.5 overflow-auto">
				{history.length > 0 ? (
					history.map((r, i) => (
						<SearchRecordCard
							key={i}
							record={r}
							handleSearch={() => handleSearch(r.lat, r.lon)}
							handleDelete={() => deleteHistory(i)}
						/>
					))
				) : (
					<div className="bg-white/20 rounded-[16px] pt-[22px] p-5 text-center">
						No Record
					</div>
				)}
			</div>
		</div>
	)
}
export default SearchHistory
