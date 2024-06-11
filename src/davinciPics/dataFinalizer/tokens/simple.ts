import { getThemedBgColor, getThemedPictureUrl } from "../../modules/helpers";
import { ContractEntity, TokenEntity } from "../../types/entities";
import { DavinciPicContractProps, DavinciPicTokenProps } from "../../types/props";
import { finalFailedBgColor, finalFailedPictureUrl, finalSuccessfulBgColor, finalSuccessfulPictureUrl } from "../helpers";

export const finalizeFailedSimpleTokenData = (
	options: DavinciPicTokenProps | DavinciPicContractProps,
	initialData: TokenEntity | ContractEntity,
	failedPlaceholderColor: string,
	failedPlaceholderPicture: string
) => {
	initialData.pic = finalFailedPictureUrl(options.dataPicUrl, failedPlaceholderPicture);
	initialData.bgColor = finalFailedBgColor(initialData.pic, failedPlaceholderColor, options.dataBgColor || "");

	initialData.network.pic = options.dataContextPicUrl || "";
	initialData.network.bgColor = options.dataContextBgColor || "none";

	return initialData;
};

export const finalizeSuccessfulSimpleTokenData = (
	options: DavinciPicTokenProps | DavinciPicContractProps,
	remoteData: TokenEntity | ContractEntity,
	failedPlaceholderColor: string,
	failedPlaceholderPicture: string
) => {
	remoteData.title = remoteData.title || options.dataTitle || "";
	remoteData.pic = finalSuccessfulPictureUrl(getThemedPictureUrl(remoteData, options.theme!), options.dataPicUrl, failedPlaceholderPicture);
	remoteData.bgColor = finalSuccessfulBgColor(getThemedBgColor(remoteData, options.theme!), getThemedPictureUrl(remoteData, options.theme!), failedPlaceholderColor, options.dataBgColor || "");

	if (typeof remoteData?.network === "string") {
		remoteData.network = {
			id: remoteData.network,
			title: remoteData.network || options?.dataContextTitle || "",
			pic: "",
			bgColor: options?.dataContextBgColor || "none",
		};
	} else {
		remoteData.network.title = remoteData.network.title || options.dataContextTitle || "";
		remoteData.network.pic = getThemedPictureUrl(remoteData.network, options.theme!) || failedPlaceholderPicture;
		remoteData.network.bgColor = getThemedBgColor(remoteData?.network, options.theme!) || options.dataContextBgColor || "none";
	}
	return remoteData;
};
