import finalizeBannerData from "./banner";
import getFailedPlaceholders from "./failedPlaceholders";
import { isAppEntity, isBannerEntity, isNetworkEntity, isNodeEntity, isProfileEntity } from "../types/guards";
import { PicsType } from "../types/picsCommonTypes";
import { DavinciPicPlaceholder, DavinciPicProps } from "../types/props";
import { DavinciPicEntity, EntityResponseType } from "../types/entities";
import finalizeTokenData from "./token";
import finalizeBaseData from "./base";

const finalizeData = <T extends PicsType>(
	initialData: DavinciPicEntity,
	remoteData: EntityResponseType<T>,
	options: DavinciPicProps,
	placeholders: DavinciPicPlaceholder
): DavinciPicEntity => {
	const { color: failedPlaceholderColor, url: failedPlaceholderPicture } = getFailedPlaceholders(options, placeholders);

	if (options.type === "token") {
		return finalizeTokenData(options, initialData, remoteData, failedPlaceholderPicture, failedPlaceholderColor);
	}

	if (options.type === "profile" && isProfileEntity(initialData)) {
		return finalizeBaseData(options, remoteData, initialData, failedPlaceholderColor, failedPlaceholderPicture);
	}

	if (options.type === "banner" && isBannerEntity(initialData)) {
		return finalizeBannerData(options, remoteData, initialData, failedPlaceholderColor, failedPlaceholderPicture);
	}

	if (options.type === "node" && isNodeEntity(initialData)) {
		return finalizeBaseData(options, remoteData, initialData, failedPlaceholderColor, failedPlaceholderPicture);
	}

	if (options.type === "network" && isNetworkEntity(initialData)) {
		return finalizeBaseData(options, remoteData, initialData, failedPlaceholderColor, failedPlaceholderPicture);
	}

	if (options.type === "app" && isAppEntity(initialData)) {
		return finalizeBaseData(options, remoteData, initialData, failedPlaceholderColor, failedPlaceholderPicture);
	}

	throw new Error(`Data couldn't be finalized, missing type. ${options?.type}`);
};

export default finalizeData;
