import { LpTokenEntity } from "../types/entities";
import { davinciPicsConfig } from "../";
import { getContextData, mustBeSensored } from "../modules/helpers";
import { DavinciPicStatus, DavinciPicTokenProps } from "../types/props";
import { ContextualContextShapes, getContextualContextCircleData } from "./contextualSvg";

const GenerateMergedLiquidityTokenSVG: React.FC<{
	data: LpTokenEntity;
	options: DavinciPicTokenProps;
	status: DavinciPicStatus;
}> = ({ data, options, status }): React.ReactElement => {
	const mustPicture0BeSensored = mustBeSensored(options.censor, data.token0.sensitivity);
	const mustPicture1BeSensored = mustBeSensored(options.censor, data.token1.sensitivity);
	const uniqueID = `${++davinciPicsConfig.counter}`;

	const contextData = getContextData(options, data);

	const strokeWidth = options.strokeWidth && status === "success" ? options.strokeWidth : 0;

	const tokenCircleData = {
		cx: 50,
		cy: 50,
		r: (contextData.type === "none" ? 50 : 40) - strokeWidth / 2,
	};

	const contextCircleData = getContextualContextCircleData(options, tokenCircleData);

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.1"
			width={options.size}
			height={options.size}
			viewBox="0 0 100 100">
			<defs>
				<clipPath id={`half0-${uniqueID}`}>
					<rect x="0" y="0" width={tokenCircleData.cx} height={tokenCircleData.cy * 2} />
				</clipPath>
				<clipPath id={`half1-${uniqueID}`}>
					<rect x="50" y="0" width={tokenCircleData.cx} height={tokenCircleData.cy * 2} />
				</clipPath>
				<clipPath id={`context-shape-${uniqueID}`}>
					<circle cx={contextCircleData.cx} cy={contextCircleData.cy} r={contextCircleData.r}></circle>
				</clipPath>
				{/* Blur filters */}
				{mustPicture0BeSensored ? (
					<filter id={`blur0-${uniqueID}`}>
						<feGaussianBlur in="SourceGraphic" stdDeviation="3" />
					</filter>
				) : (
					<></>
				)}
				{mustPicture1BeSensored ? (
					<filter id={`blur1-${uniqueID}`}>
						<feGaussianBlur in="SourceGraphic" stdDeviation="3" />
					</filter>
				) : (
					<></>
				)}
				<pattern id={`image0-${uniqueID}`} patternUnits="objectBoundingBox" width="1" height="1">
					<image
						href={data.token0.pic}
						x="0"
						y="0"
						width={tokenCircleData.r * 2}
						height={tokenCircleData.r * 2}
						filter={mustPicture0BeSensored ? `url(#blur0-${uniqueID})` : ""}
					/>
				</pattern>
				<pattern id={`image1-${uniqueID}`} patternUnits="objectBoundingBox" width="1" height="1">
					<image
						href={data.token1.pic}
						x="0"
						y="0"
						width={tokenCircleData.r * 2}
						height={tokenCircleData.r * 2}
						filter={mustPicture1BeSensored ? `url(#blur1-${uniqueID})` : ""}
					/>
				</pattern>
			</defs>
			{/* Backgroun colors */}
			<circle
				cx={tokenCircleData.cx}
				cy={tokenCircleData.cy}
				r={tokenCircleData.r}
				clipPath={`url(#half0-${uniqueID})`}
				fill={data.token0.supportingBackgroundColor || "transparent"}
			/>
			<circle
				cx={tokenCircleData.cx}
				cy={tokenCircleData.cy}
				r={tokenCircleData.r}
				clipPath={`url(#half1-${uniqueID})`}
				fill={data.token1.supportingBackgroundColor || "transparent"}
			/>
			{/* Images */}
			<circle
				cx={tokenCircleData.cx}
				cy={tokenCircleData.cy}
				r={tokenCircleData.r}
				stroke={options.strokeColor}
				strokeWidth={strokeWidth}
				clipPath={`url(#half0-${uniqueID})`}
				fill={`url(#image0-${uniqueID})`}>
				{!mustPicture0BeSensored ? <title>{data.token0.title || data.token0.address}</title> : <></>}
			</circle>
			<circle
				cx={tokenCircleData.cx}
				cy={tokenCircleData.cy}
				r={tokenCircleData.r}
				stroke={options.strokeColor}
				strokeWidth={strokeWidth}
				clipPath={`url(#half1-${uniqueID})`}
				fill={`url(#image1-${uniqueID})`}>
				{!mustPicture1BeSensored ? <title>{data.token1.title || data.token1.address}</title> : <></>}
			</circle>
			<ContextualContextShapes
				options={options}
				contextCircle={contextCircleData}
				title={contextData.title}
				pic={contextData.pic}
				bgColor={contextData.supportingBackgroundColor}
				strokeWidth={strokeWidth}
				uniqueID={uniqueID}
				status={status}
			/>
		</svg>
	);
};

export default GenerateMergedLiquidityTokenSVG;
