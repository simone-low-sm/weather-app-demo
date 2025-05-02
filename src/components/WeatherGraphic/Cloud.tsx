/**
 * Renders a cloud graphic
 * @returns {React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>}
 */
const Cloud = (
	props: React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>
): React.ReactElement<HTMLImageElement> => {
	return (
		<img
			src="/src/assets/cloud.png"
			className="w-max"
			alt="Cloud"
			{...props}
		/>
	)
}
export default Cloud
