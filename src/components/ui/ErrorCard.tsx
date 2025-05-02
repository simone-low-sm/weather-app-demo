/**
 * A card that conditionally displays when there is an error.
 * If there is no error, this component is visually hidden but remains accessible to screen readers.
 *
 * @param {Object} props
 * @param {string} [props.error] - Optional error message to display. If not provided, component is visually hidden.
 * @returns {React.ReactElement}
 *
 * @accessibility
 * Uses `aria-live="polite"` to allow screen readers to announce errors without disrupting user flow.
 */
const ErrorCard = ({ error }: { error?: string }): React.ReactElement => {
	return (
		<div className={"w-full " + (error ? "" : "sr-only")}>
			<p
				aria-live="polite"
				className="h-8 mt-2 bg-red-500/50 text-center content-center rounded-[8px] md:rounded-[20px] border-1 border-red-600"
			>
				{error}
			</p>
		</div>
	)
}
export default ErrorCard
