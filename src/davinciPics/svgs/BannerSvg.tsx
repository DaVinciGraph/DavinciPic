import { BannerEntity } from "../types/entities";
import { davinciPicsConfig } from "../";
import { mustBeCensored } from "../modules/helpers";
import { DavinciPicBannerProps, DavinciPicStatus } from "../types/props";

const GenerateBannerSVG: React.FC<{
	data: BannerEntity;
	options: DavinciPicBannerProps;
	status: DavinciPicStatus;
}> = ({ data, options, status }): React.ReactElement => {
	const uniqueID = `${++davinciPicsConfig.counter}`;
	const mustPictureBeCensored = mustBeCensored(options.censor, data.sensitivity);

	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 100">
			<defs>
				<clipPath id={`centerCircleClip_${uniqueID}`}>
					<rect x="0" y="0" width="400" height="100" />
				</clipPath>
				{mustPictureBeCensored ? (
					<filter id={`blur-${uniqueID}`}>
						<feGaussianBlur in="SourceGraphic" stdDeviation="7" />
					</filter>
				) : null}
			</defs>
			{status === "failed" && data.banner ? (
				<></>
			) : (
				<rect x="0" y="0" width="400" height="100" fill={data.supportingBackgroundColor || "transparent"} />
			)}
			<image
				x={0}
				y={0}
				width={400}
				height={100}
				clipPath={`url(#centerCircleClip_${uniqueID})`}
				filter={mustPictureBeCensored ? `url(#blur-${uniqueID})` : undefined}
				preserveAspectRatio="xMidYMid slice"
				href={data.banner}
			/>
			<rect x="0" y="0" width="400" height="100" fill="transparent" />
		</svg>
	);
};

export default GenerateBannerSVG;
