import { davinciPicsConfig } from "../";
import { getShapeRadius, mustBeSensored } from "../modules/helpers";
import { PicsSensitivityType } from "../types/picsCommonTypes";
import { DavinciPicBannerProps, DavinciPicProps, DavinciPicStatus } from "../types/props";

const GenerateBaseSVG: React.FC<{
	title: string;
	pictureUrl: string;
	sensitivity: PicsSensitivityType;
	supportingBackgroundColor?: string;
	options: Exclude<DavinciPicProps, DavinciPicBannerProps>;
	status: DavinciPicStatus;
}> = ({ title, pictureUrl, sensitivity, supportingBackgroundColor, options, status }): React.ReactElement => {
	const uniqueID = `${++davinciPicsConfig.counter}`;
	const mustPictureBeSensored = mustBeSensored(options.censor, sensitivity);
	const strokeWidth = options.strokeWidth && status === "success" ? options.strokeWidth : 0;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 100 100"
			width={options.size}
			height={options.size}>
			<defs>
				<clipPath id={`centerCircleClip_${uniqueID}`}>
					<rect
						x={strokeWidth / 2}
						y={strokeWidth / 2}
						width={100 - strokeWidth}
						height={100 - strokeWidth}
						rx={getShapeRadius(options.shape, 100)}
						ry={getShapeRadius(options.shape, 100)}></rect>
				</clipPath>
				{mustPictureBeSensored ? (
					<filter id={`blur-${uniqueID}`}>
						<feGaussianBlur in="SourceGraphic" stdDeviation="7" />
					</filter>
				) : (
					<></>
				)}
			</defs>
			<rect
				x={strokeWidth / 2}
				y={strokeWidth / 2}
				width={100 - strokeWidth}
				height={100 - strokeWidth}
				rx={getShapeRadius(options.shape, 100)}
				ry={getShapeRadius(options.shape, 100)}
				fill={supportingBackgroundColor || "transparent"}
			/>
			<image
				x={strokeWidth / 2}
				y={strokeWidth / 2}
				width={100 - strokeWidth}
				height={100 - strokeWidth}
				clipPath={`url(#centerCircleClip_${uniqueID})`}
				filter={mustPictureBeSensored ? `url(#blur-${uniqueID})` : ""}
				preserveAspectRatio="xMidYMid slice"
				href={pictureUrl}
			/>
			<rect
				x={strokeWidth / 2}
				y={strokeWidth / 2}
				width={100 - strokeWidth}
				height={100 - strokeWidth}
				rx={getShapeRadius(options.shape, 100)}
				ry={getShapeRadius(options.shape, 100)}
				fill="transparent"
				stroke={options.strokeColor}
				strokeWidth={strokeWidth}>
				{!mustBeSensored ? <title>{title || ""}</title> : <></>}
			</rect>
		</svg>
	);
};

export default GenerateBaseSVG;
