import { DavinciPicTokenProps } from "../types/props";
import { DavinciPicEntity, EntityResponseType } from "../types/entities";
import { isLpTokenEntity, isTokenEntity, isWrappedTokenEntity } from "../types/guards";
import { finalizeFailedLpData, finalizeSuccessfulLpData } from "./tokens/lp";
import { finalizeFailedWrappedData, finalizeSuccessfulWrappedData } from "./tokens/wrapped";
import { finalizeFailedSimpleTokenData, finalizeSuccessfulSimpleTokenData } from "./tokens/simple";

const finalizeTokenData = (
	options: DavinciPicTokenProps,
	initialData: DavinciPicEntity,
	remoteData: EntityResponseType<"token">,
	failedPlaceholderPicture: string,
	failedPlaceholderColor: string
): DavinciPicEntity => {
	if (!(remoteData as any)?.type) {
		// no remote data
		if (isLpTokenEntity(initialData)) {
			return finalizeFailedLpData(options, initialData, failedPlaceholderColor, failedPlaceholderPicture);
		}

		if (isWrappedTokenEntity(initialData)) {
			return finalizeFailedWrappedData(options, initialData, failedPlaceholderColor, failedPlaceholderPicture);
		}

		if (isTokenEntity(initialData)) {
			return finalizeFailedSimpleTokenData(options, initialData, failedPlaceholderColor, failedPlaceholderPicture);
		}
	}

	if (isLpTokenEntity(remoteData)) {
		return finalizeSuccessfulLpData(options, remoteData, failedPlaceholderColor, failedPlaceholderPicture);
	}

	if (isWrappedTokenEntity(remoteData)) {
		return finalizeSuccessfulWrappedData(options, remoteData, failedPlaceholderColor, failedPlaceholderPicture);
	}

	if (isTokenEntity(remoteData)) {
		return finalizeSuccessfulSimpleTokenData(options, remoteData, failedPlaceholderColor, failedPlaceholderPicture);
	}

	throw new Error(`Data couldn't be finalized for the token, failed to combine data.`);
};

export default finalizeTokenData;
