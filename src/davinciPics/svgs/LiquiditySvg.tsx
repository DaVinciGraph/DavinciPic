import { LpTokenEntity } from "../types/entities";
import { davinciPicsConfig } from "../";
import { getContextData, mustBeCensored } from "../modules/helpers";
import { DavinciPicStatus, DavinciPicTokenProps } from "../types/props";
import { DavinciPicsSvgCircle } from "../types/svg";
import GenerateMergedLiquidityTokenSVG from "./MergedLiquiditySvg";

const GenerateLiquidityTokenSVG: React.FC<{
	data: LpTokenEntity;
	options: DavinciPicTokenProps;
	status: DavinciPicStatus;
}> = ({ data, options, status }): React.ReactElement => {
	if (options.lpTokensPosition === "merged") {
		return <GenerateMergedLiquidityTokenSVG data={data} options={options} status={status} />;
	} else {
		const mustPicture0BeCensored = mustBeCensored(options.censor, data.token0.sensitivity);
		const mustPicture1BeCensored = mustBeCensored(options.censor, data.token1.sensitivity);
		const uniqueID = `${++davinciPicsConfig.counter}`;

		const contextData = getContextData(options, data);

		const strokeWidth = options.strokeWidth && status === "success" ? options.strokeWidth : 0;

		const [token0CircleData, token1CircleData] = calculateCircleData(
			contextData.type !== "none",
			options.lpTokensPosition === "intimate",
			strokeWidth
		);

		const contextCircleData = getContextCircleData({ options, token0CircleData, token1CircleData, strokeWidth });

		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				version="1.1"
				width={options.size}
				height={options.size}
				viewBox="0 0 100 100">
				<Defs
					uniqueID={uniqueID}
					token0CircleData={token0CircleData}
					token1CircleData={token1CircleData}
					contextCircleData={contextCircleData}
					mustPicture0BeCensored={mustPicture0BeCensored}
					mustPicture1BeCensored={mustPicture1BeCensored}
				/>

				<Token0
					circleData={token0CircleData}
					data={data}
					uniqueID={uniqueID}
					censor={mustPicture0BeCensored}
					strokeWidth={strokeWidth}
					strokeColor={options.strokeColor}
					status={status}
				/>

				<Token1
					circleData={token1CircleData}
					data={data}
					uniqueID={uniqueID}
					censor={mustPicture1BeCensored}
					strokeWidth={strokeWidth}
					strokeColor={options.strokeColor}
					status={status}
				/>

				<Context
					circleData={contextCircleData}
					data={contextData}
					uniqueID={uniqueID}
					strokeWidth={strokeWidth}
					strokeColor={options.strokeColor}
					status={status}
				/>
			</svg>
		);
	}
};

export default GenerateLiquidityTokenSVG;

const Defs = ({
	uniqueID,
	token0CircleData,
	token1CircleData,
	contextCircleData,
	mustPicture0BeCensored,
	mustPicture1BeCensored,
}: {
	uniqueID: string;
	token0CircleData: DavinciPicsSvgCircle;
	token1CircleData: DavinciPicsSvgCircle;
	contextCircleData: any;
	mustPicture0BeCensored: boolean;
	mustPicture1BeCensored: boolean;
}) => {
	return (
		<defs>
			<clipPath id={`token0-${uniqueID}`}>
				<circle cx={token0CircleData.cx} cy={token0CircleData.cy} r={token0CircleData.r}></circle>
			</clipPath>
			<clipPath id={`token1-${uniqueID}`}>
				<circle cx={token1CircleData.cx} cy={token1CircleData.cy} r={token1CircleData.r}></circle>
			</clipPath>
			<clipPath id={`context-${uniqueID}`}>
				<circle cx={contextCircleData.cx} cy={contextCircleData.cy} r={contextCircleData.r}></circle>
			</clipPath>
			{mustPicture0BeCensored ? (
				<filter id={`blur0-${uniqueID}`}>
					<feGaussianBlur in="SourceGraphic" stdDeviation="7" />
				</filter>
			) : null}
			{mustPicture1BeCensored ? (
				<filter id={`blur1-${uniqueID}`}>
					<feGaussianBlur in="SourceGraphic" stdDeviation="7" />
				</filter>
			) : null}
		</defs>
	);
};

const Token0 = ({
	circleData,
	data,
	uniqueID,
	censor,
	strokeWidth,
	strokeColor,
	status,
}: {
	circleData: DavinciPicsSvgCircle;
	data: LpTokenEntity;
	uniqueID: string;
	censor: boolean;
	strokeWidth: number;
	strokeColor?: string;
	status: DavinciPicStatus;
}) => {
	return (
		<>
			{status === "failed" && data.token0.pic ? (
				<></>
			) : (
				<circle cx={circleData.cx} cy={circleData.cy} r={circleData.r} fill={data.token0.supportingBackgroundColor || "transparent"} />
			)}
			<image
				x={circleData.cx - circleData.r}
				y={circleData.cy - circleData.r}
				width={2 * circleData.r}
				height={2 * circleData.r}
				clipPath={`url(#token0-${uniqueID})`}
				filter={censor ? `url(#blur0-${uniqueID})` : undefined}
				preserveAspectRatio="xMidYMid slice"
				href={data.token0.pic || ""}></image>
			<circle cx={circleData.cx} cy={circleData.cy} r={circleData.r} fill="transparent" stroke={strokeColor || ""} strokeWidth={strokeWidth}>
				{!censor ? <title>{data.token0.title || data.token0.address}</title> : <></>}
			</circle>
		</>
	);
};

const Token1 = ({
	circleData,
	data,
	uniqueID,
	censor,
	strokeWidth,
	strokeColor,
	status,
}: {
	circleData: DavinciPicsSvgCircle;
	data: LpTokenEntity;
	uniqueID: string;
	censor: boolean;
	strokeWidth: number;
	strokeColor?: string;
	status: DavinciPicStatus;
}) => {
	return (
		<>
			{status === "failed" && data.token1.pic ? (
				<></>
			) : (
				<circle cx={circleData.cx} cy={circleData.cy} r={circleData.r} fill={data.token1.supportingBackgroundColor || "transparent"} />
			)}
			<image
				x={circleData.cx - circleData.r}
				y={circleData.cy - circleData.r}
				width={2 * circleData.r}
				height={2 * circleData.r}
				clipPath={`url(#token1-${uniqueID})`}
				filter={censor ? `url(#blur1-${uniqueID})` : undefined}
				preserveAspectRatio="xMidYMid slice"
				href={data.token1.pic || ""}></image>
			<circle cx={circleData.cx} cy={circleData.cy} r={circleData.r} fill="transparent" stroke={strokeColor} strokeWidth={strokeWidth}>
				{!censor ? <title>{data?.token1?.title || data?.token1?.address}</title> : <></>}
			</circle>
		</>
	);
};

const Context = ({
	circleData,
	uniqueID,
	data,
	strokeWidth,
	strokeColor,
	status,
}: {
	circleData: DavinciPicsSvgCircle;
	uniqueID: string;
	data: any;
	strokeWidth: number;
	strokeColor?: string;
	status: DavinciPicStatus;
}) => {
	if (data.type === "none" || (!data.pic && data.supportingBackgroundColor === "transparent")) return <></>;

	return (
		<>
			{status === "failed" && data.pic ? (
				<></>
			) : (
				<circle cx={circleData.cx} cy={circleData.cy} r={circleData.r} fill={data.supportingBackgroundColor} />
			)}
			<image
				x={circleData.cx - circleData.r}
				y={circleData.cy - circleData.r}
				width={2 * circleData.r}
				height={2 * circleData.r}
				clipPath={`url(#context-${uniqueID})`}
				preserveAspectRatio="xMidYMid slice"
				href={data.pic}
			/>
			<circle cx={circleData.cx} cy={circleData.cy} r={circleData.r} fill="transparent" stroke={strokeColor} strokeWidth={strokeWidth}>
				<title>{data.title}</title>
			</circle>
		</>
	);
};

const getContextCircleData = ({
	options,
	token1CircleData,
	token0CircleData,
	strokeWidth,
}: {
	options: DavinciPicTokenProps;
	token1CircleData: DavinciPicsSvgCircle;
	token0CircleData: DavinciPicsSvgCircle;
	strokeWidth: number;
}) => {
	const contextRadius = token1CircleData.r / 2;
	return {
		r: contextRadius,
		cx:
			options.contextPosition === "bottomRight" || options.contextPosition === "topRight"
				? token1CircleData.cx + token1CircleData.r - contextRadius / 2 - strokeWidth / 2
				: token0CircleData.cx - token0CircleData.r + contextRadius / 2 + strokeWidth / 2,
		cy:
			options.contextPosition === "bottomRight" || options.contextPosition === "bottomLeft"
				? token1CircleData.cy + token1CircleData.r - contextRadius / 2 - strokeWidth / 2
				: token0CircleData.cy - token0CircleData.r + contextRadius / 2 + strokeWidth / 2,
	};
};

function calculateCircleData(hasContext: boolean, intimateLp: boolean, strokeWidth: number): [DavinciPicsSvgCircle, DavinciPicsSvgCircle] {
	const token0CircleData: DavinciPicsSvgCircle = { cx: 30, cy: 50, r: 30 };
	const token1CircleData: DavinciPicsSvgCircle = { cx: 70, cy: 50, r: 30 };

	if (hasContext) {
		if (intimateLp) {
			token0CircleData.cx = 36;
			token0CircleData.r = 29;

			token1CircleData.cx = 63;
			token1CircleData.r = 29;
		} else {
			token0CircleData.cx = 32;
			token0CircleData.r = 25;

			token1CircleData.cx = 68;
			token1CircleData.r = 25;
		}
	} else if (intimateLp) {
		token0CircleData.cx = 35;
		token0CircleData.r = 35;

		token1CircleData.cx = 65;
		token1CircleData.r = 35;
	}

	token0CircleData.r = token0CircleData.r - strokeWidth / 2;
	token1CircleData.r = token1CircleData.r - strokeWidth / 2;

	return [token0CircleData, token1CircleData];
}
