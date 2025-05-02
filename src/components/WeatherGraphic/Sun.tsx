import sun from "../../resources/images/sun.png"

/**
 * Renders a sun graphic
 * @returns {React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>}
 */
const Sun = (
	props: React.DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>
): React.ReactElement<HTMLImageElement> => {
	return <img src={sun} className="w-max" alt="Sun" {...props} />
}
export default Sun
