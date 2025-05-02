/**
 * Renders a div containing a label and input element. Has styling for light and dark mode.
 * @param {Object} props
 * @param {string} props.label - The label for the input element.
 * @param {string} props.name - The name attribute for the input element. Is also used as the id attribute for labelling purposes.
 * @returns {React.ReactElement}
 */
const Input = ({
	label,
	name,
}: {
	label: string
	name: string
}): React.ReactElement => {
	return (
		<div className="w-fit bg-white/20 dark:bg-[rgba(26,26,26,0.5)] flex flex-col ps-[11px] md:ps-[22px] pt-[3px] h-[40px] md:h-[60px] rounded-[8px] md:rounded-[20px] grow">
			<label
				htmlFor={name}
				className="opacity-40 text-[8px] md:text-[10px] pb-[1/3px] md:pb-[2px] flex flex-col align-middle"
			>
				{label}
			</label>
			<input
				id={name}
				name={name}
				className="text-[12px] md:text-[16px] w-full"
			/>
		</div>
	)
}
export default Input
