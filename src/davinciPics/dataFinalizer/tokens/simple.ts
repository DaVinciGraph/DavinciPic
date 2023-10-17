import { TokenEntity } from "../../types/entities";
import { DavinciPicTokenProps } from "../../types/props";
import { finalFailedPictureUrl, finalSuccessfulBgColor, finalSuccessfulPictureUrl } from "../helpers";

export const finalizeFailedSimpleTokenData = (
	options: DavinciPicTokenProps,
	initialData: TokenEntity,
	failedPlaceholderColor: string,
	failedPlaceholderPicture: string
) => {
	initialData.pic = finalFailedPictureUrl(options.dataPicUrl, failedPlaceholderPicture);
	initialData.supportingBackgroundColor = !initialData.pic ? failedPlaceholderColor : "transparent";

	initialData.network.pic = options.dataContextPicUrl || "";
	initialData.network.supportingBackgroundColor = "";

	return initialData;
};

export const finalizeSuccessfulSimpleTokenData = (
	options: DavinciPicTokenProps,
	remoteData: TokenEntity,
	failedPlaceholderColor: string,
	failedPlaceholderPicture: string
) => {
	remoteData.title = remoteData.title || options.dataTitle || "";
	remoteData.pic = finalSuccessfulPictureUrl(remoteData.pic, options.dataPicUrl, failedPlaceholderPicture);
	remoteData.supportingBackgroundColor = finalSuccessfulBgColor(remoteData.supportingBackgroundColor, failedPlaceholderColor);

	remoteData.network.title = remoteData.network.title || options.dataContextTitle || "";
	remoteData.network.pic = remoteData.network.pic || failedPlaceholderPicture;
	remoteData.network.supportingBackgroundColor = remoteData.network.supportingBackgroundColor || failedPlaceholderColor;

	return remoteData;
};

// export const finalizeMismatchedSimpleTokenData = (
// 	options: DavinciPicTokenProps,
// 	remoteData: TokenEntity,
// 	failedPlaceholderColor: string,
// 	failedPlaceholderPicture: string
// ) => {
// 	remoteData.pic = remoteData.pic || options.dataPicUrl || failedPlaceholderPicture;
// 	remoteData.supportingBackgroundColor = remoteData.supportingBackgroundColor || remoteData.pic ? "transparent" : failedPlaceholderColor;

// 	return remoteData;
// };
