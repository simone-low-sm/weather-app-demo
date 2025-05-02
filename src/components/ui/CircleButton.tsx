/**
 * A circular button component that wraps its children in a styled button element. Has light and dark mode styling.
 * Accepts all standard HTML button attributes.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {React.ReactElement<HTMLButtonElement>}
 *
 * @remarks
 * Additional props (like `onClick`, `disabled`, `aria-label`, etc.) are spread onto the native button element.
 */
const CircleButton = ({
	children,
	...props
}: React.PropsWithChildren &
	React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>): React.ReactElement<HTMLButtonElement> => {
	return (
		<button
			className="cursor-pointer p-1.75 dark:invert bg-white dark:bg-transparent dark:border-2 border-black/50 w-[34px] aspect-square rounded-full drop-shadow-[0_4px_12px_black]/10"
			{...props}
		>
			<div className="opacity-50">{children}</div>
		</button>
	)
}
export default CircleButton
