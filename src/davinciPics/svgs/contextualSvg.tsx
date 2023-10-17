import { davinciPicsConfig } from "../";
import { mustBeSensored } from "../modules/helpers";
import { DavinciPicStatus, DavinciPicTokenProps } from "../types/props";
import { PicsSensitivityType } from "../types/picsCommonTypes";
import { DavinciPicsSvgCircle } from "../types/svg";

const GenerateContextualTokenSVG: React.FC<{
	title?: string;
	pictureUrl?: string;
	contextTitle?: string;
	contextPictureUrl?: string;
	sensitivity: PicsSensitivityType;
	supportingBackgroundColor?: string;
	contextSupportingBackgroundColor?: string;
	options: DavinciPicTokenProps;
	status: DavinciPicStatus;
}> = ({
	title,
	pictureUrl,
	sensitivity,
	contextTitle,
	contextPictureUrl,
	supportingBackgroundColor,
	contextSupportingBackgroundColor,
	options,
	status,
}): React.ReactElement => {
	const uniqueID = `clip-${++davinciPicsConfig.counter}`;
	const mustPictureBeSensored = mustBeSensored(options.censor, sensitivity);
	const tokenCircle: DavinciPicsSvgCircle = { cx: 50, cy: 50, r: 40 };
	const contextCircle = getContextCircleData(options, tokenCircle);
	const strokeWidth = options.strokeWidth && status === "success" ? options.strokeWidth : 0;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 100 100"
			width={options.size}
			height={options.size}>
			<Defs uniqueID={uniqueID} tokenCircle={tokenCircle} contextCircle={contextCircle} censor={mustPictureBeSensored} />

			<Token
				circle={tokenCircle}
				uniqueID={uniqueID}
				mustPictureBeSensored={mustPictureBeSensored}
				pictureUrl={pictureUrl}
				title={title}
				supportingBackgroundColor={supportingBackgroundColor}
				strokeColor={options.strokeColor}
				strokeWidth={strokeWidth}
				status={status}
			/>

			<Context
				options={options}
				contextCircle={contextCircle}
				uniqueID={uniqueID}
				pic={contextPictureUrl}
				title={contextTitle}
				bgColor={contextSupportingBackgroundColor}
				strokeWidth={strokeWidth}
				status={status}
			/>
		</svg>
	);
};

export default GenerateContextualTokenSVG;

const Defs = ({
	uniqueID,
	tokenCircle,
	contextCircle,
	censor,
}: {
	uniqueID: string;
	tokenCircle: DavinciPicsSvgCircle;
	contextCircle: DavinciPicsSvgCircle;
	censor: boolean;
}) => {
	return (
		<defs>
			<clipPath id={`token-shape-${uniqueID}`}>
				<circle cx={tokenCircle.cx} cy={tokenCircle.cy} r={tokenCircle.r}></circle>
			</clipPath>
			<clipPath id={`context-shape-${uniqueID}`}>
				<circle cx={contextCircle.cx} cy={contextCircle.cy} r={contextCircle.r}></circle>
			</clipPath>

			{censor ? (
				<filter id={`blur-${uniqueID}`}>
					<feGaussianBlur in="SourceGraphic" stdDeviation="7" />
				</filter>
			) : null}
		</defs>
	);
};

const Token = ({
	circle,
	uniqueID,
	mustPictureBeSensored,
	pictureUrl,
	title,
	supportingBackgroundColor,
	strokeColor,
	strokeWidth,
	status,
}: {
	circle: DavinciPicsSvgCircle;
	uniqueID: string;
	mustPictureBeSensored: boolean;
	pictureUrl?: string;
	title?: string;
	supportingBackgroundColor?: string;
	strokeColor?: string;
	strokeWidth: number;
	status: DavinciPicStatus;
}) => {
	return (
		<>
			{status === "failed" && pictureUrl ? (
				<></>
			) : (
				<circle cx={circle.cx} cy={circle.cy} r={circle.r - strokeWidth / 2} fill={supportingBackgroundColor} />
			)}
			<image
				x={circle.cx - circle.r}
				y={circle.cy - circle.r}
				width={2 * circle.r}
				height={2 * circle.r}
				clipPath={`url(#token-shape-${uniqueID})`}
				filter={mustPictureBeSensored ? `url(#blur-${uniqueID})` : undefined}
				preserveAspectRatio="xMidYMid slice"
				href={pictureUrl || ""}
			/>
			<circle cx={circle.cx} cy={circle.cy} r={circle.r} fill="transparent" stroke={strokeColor} strokeWidth={strokeWidth}>
				<title>{title}</title>
			</circle>
		</>
	);
};

const Context = ({
	options,
	contextCircle,
	uniqueID,
	pic,
	bgColor,
	title,
	strokeWidth,
	status,
}: {
	options: DavinciPicTokenProps;
	contextCircle: DavinciPicsSvgCircle;
	uniqueID: string;
	pic?: string;
	bgColor?: string;
	title?: string;
	strokeWidth: number;
	status: DavinciPicStatus;
}) => {
	return options.context !== "none" ? (
		<>
			{status === "failed" && pic ? (
				<></>
			) : (
				<circle cx={contextCircle.cx} cy={contextCircle.cy} r={contextCircle.r - strokeWidth / 2} fill={bgColor || "transparent"} />
			)}
			<image
				x={contextCircle.cx - contextCircle.r}
				y={contextCircle.cy - contextCircle.r}
				width={2 * contextCircle.r}
				height={2 * contextCircle.r}
				clipPath={`url(#context-shape-${uniqueID})`}
				preserveAspectRatio="xMidYMid slice"
				href={pic}></image>
			<circle
				cx={contextCircle.cx}
				cy={contextCircle.cy}
				r={contextCircle.r}
				fill="transparent"
				stroke={options.strokeColor}
				strokeWidth={strokeWidth}>
				<title>{title}</title>
			</circle>
		</>
	) : (
		<></>
	);
};

const getContextCircleData = (options: DavinciPicTokenProps, tokenCircle: DavinciPicsSvgCircle) => {
	const strokeWidth = options.strokeWidth || 0;
	const contextCircleRadius = 20;
	return {
		cx:
			options.contextPosition === "bottomRight" || options.contextPosition === "topRight"
				? tokenCircle.cx! + tokenCircle.r - contextCircleRadius / 2 - strokeWidth / 2
				: tokenCircle.cx! - tokenCircle.r! + contextCircleRadius / 2 + strokeWidth / 2,
		cy:
			options.contextPosition === "bottomRight" || options.contextPosition === "bottomLeft"
				? tokenCircle.cy! + tokenCircle.r! - contextCircleRadius / 2 - strokeWidth / 2
				: tokenCircle.cy! - tokenCircle.r! + contextCircleRadius / 2 + strokeWidth / 2,
		r: contextCircleRadius,
	};
};
