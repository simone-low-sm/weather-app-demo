/**
 * Formats a Unix timestamp (in seconds) into a localized date and time string.
 *
 * @function formatDate
 * @param {number} timestamp - A Unix timestamp in seconds.
 * @returns {string} A formatted string in the format `MM-DD-YYYY HH:MM AM/PM`, all lowercase.
 *
 * @example
 * formatDate(1714660800); // "05-02-2024 02:00 pm"
 *
 * @remarks
 * - The result uses U.S. English locale (`en-US`).
 * - The format replaces slashes (`/`) with hyphens (`-`) and strips commas.
 * - Output is converted to lowercase for display purposes.
 */
export const formatDate = (timestamp: number): string => {
	const date = new Date(+timestamp * 1000)
	return date
		.toLocaleString("en-US", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour12: true,
			hour: "2-digit",
			minute: "2-digit",
		})
		?.replace(",", "")
		?.toLowerCase()
		?.replaceAll("/", "-")
}
