import React from "react";
import {
	isAppEntity,
	isBannerEntity,
	isContractEntity,
	isLpTokenEntity,
	isNetworkEntity,
	isNodeEntity,
	isPoolContractEntity,
	isProfileEntity,
	isTokenEntity,
	isWrappedTokenEntity,
} from "../types/guards";
import { DavinciPicProps, DavinciPicStatus } from "../types/props";
import { BannerEntity, ContractEntity, LpTokenEntity, NetworkEntity, NodeEntity, PoolContractEntity, ProfileEntity, TokenEntity, WrappedTokenEntity } from "../types/entities";
import GenerateBaseSVG from "../svgs/BaseSvg";
import GenerateWrappedTokenSVG from "../svgs/WrappedSvg";
import GenerateLiquidityTokenSVG from "../svgs/LiquiditySvg";
import GenerateBannerSVG from "../svgs/BannerSvg";
import GenerateContextualTokenSVG from "../svgs/contextualSvg";

const PicsSvgGenerator: React.FC<{
	data: TokenEntity | LpTokenEntity | WrappedTokenEntity | ContractEntity | PoolContractEntity | ProfileEntity | BannerEntity | NetworkEntity | NodeEntity | {};
	options: DavinciPicProps;
	status: DavinciPicStatus;
}> = ({ data, options, status }): React.ReactElement => {
	if (options.type === "token") {
		if (isLpTokenEntity(data)) {
			return <GenerateLiquidityTokenSVG data={data} options={options} status={status} />;
		} else if (isWrappedTokenEntity(data)) {
			return <GenerateWrappedTokenSVG data={data} options={options} status={status} />;
		} else if (isTokenEntity(data)) {
			// normal token
			if (options.context === "network") {
				return (
					<GenerateContextualTokenSVG
						title={data.title}
						pictureUrl={data?.pic}
						sensitivity={data.sensitivity}
						contextTitle={data.network.title}
						contextPictureUrl={data.network?.pic}
						bgColor={data.bgColor}
						contextSupportingBackgroundColor={data.network.bgColor}
						options={options}
						status={status}
					/>
				);
			}

			return <GenerateBaseSVG title={data.title || ""} pictureUrl={data?.pic} bgColor={data.bgColor} sensitivity={data.sensitivity} options={options} status={status} />;
		}
	} else if (options.type === "contract") {
		if (isPoolContractEntity(data)) {
			return <GenerateLiquidityTokenSVG data={data} options={options} status={status} />;
		} else if (isContractEntity(data)) {
			// normal contract
			if (options.context === "network") {
				return (
					<GenerateContextualTokenSVG
						title={data.title}
						pictureUrl={data?.pic}
						sensitivity={data.sensitivity}
						contextTitle={data.network.title}
						contextPictureUrl={data.network?.pic}
						bgColor={data.bgColor}
						contextSupportingBackgroundColor={data.network.bgColor}
						options={options}
						status={status}
					/>
				);
			}

			if (options.context === "app" && data?.app) {
				return (
					<GenerateContextualTokenSVG
						title={data.title}
						pictureUrl={data?.pic}
						sensitivity={data.sensitivity}
						contextTitle={data.app.title}
						contextPictureUrl={data.app?.pic}
						bgColor={data.bgColor}
						contextSupportingBackgroundColor={data.app.bgColor}
						options={options}
						status={status}
					/>
				);
			}

			return <GenerateBaseSVG title={data.title || ""} pictureUrl={data?.pic} bgColor={data.bgColor} sensitivity={data.sensitivity} options={options} status={status} />;
		}
	} else if (options.type === "profile" && isProfileEntity(data)) {
		return <GenerateBaseSVG title={data.title} pictureUrl={data?.pic} bgColor={"none"} sensitivity={data.sensitivity} options={options} status={status} />;
	} else if (options.type === "banner" && isBannerEntity(data)) {
		return <GenerateBannerSVG data={data} options={options} status={status} />;
	} else if (options.type === "node" && isNodeEntity(data)) {
		return <GenerateBaseSVG title={data.title} pictureUrl={data?.pic} bgColor={data.bgColor} sensitivity="safe" options={options} status={status} />;
	} else if (options.type === "network" && isNetworkEntity(data)) {
		return <GenerateBaseSVG title={data.title || data.id} pictureUrl={data?.pic} bgColor={data.bgColor} sensitivity="safe" options={options} status={status} />;
	} else if (options.type === "app" && isAppEntity(data)) {
		return <GenerateBaseSVG title={data.title || data.name} pictureUrl={data?.pic} bgColor={data.bgColor} sensitivity="safe" options={options} status={status} />;
	}

	return <></>;
};

export default PicsSvgGenerator;
