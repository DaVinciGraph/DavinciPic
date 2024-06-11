import { isTokenAllowedToHaveContext } from "../../modules/helpers";
import { getThemedBgColor, getThemedPictureUrl } from "../../modules/helpers";
import { WrappedTokenEntity } from "../../types/entities";
import { DavinciPicTokenProps } from "../../types/props";
import { finalFailedBgColor, finalFailedPictureUrl, finalSuccessfulBgColor, finalSuccessfulPictureUrl } from "../helpers";

export const finalizeFailedWrappedData = (options: DavinciPicTokenProps, initialData: WrappedTokenEntity, failedPlaceholderColor: string, failedPlaceholderPicture: string) => {
	initialData.pic = finalFailedPictureUrl(options.dataPicUrl, failedPlaceholderPicture);
	initialData.bgColor = finalFailedBgColor(initialData.pic, failedPlaceholderColor, options.dataBgColor || "");

	if (initialData.app && options.context === "app") {
		initialData.app.pic = options.dataContextPicUrl || "";
		initialData.app.bgColor = options.dataContextBgColor || "none";
	}

	initialData.network.pic = options.dataContextPicUrl || "";
	initialData.network.bgColor = options.dataContextBgColor || "none";

	return initialData;
};

export const finalizeSuccessfulWrappedData = (options: DavinciPicTokenProps, remoteData: WrappedTokenEntity, failedPlaceholderColor: string, failedPlaceholderPicture: string) => {
	remoteData.title = remoteData.title || options.dataTitle || "";
	remoteData.pic = finalSuccessfulPictureUrl(getThemedPictureUrl(remoteData, options.theme!), options.dataContextPicUrl, failedPlaceholderPicture);
	remoteData.bgColor = finalSuccessfulBgColor(getThemedBgColor(remoteData, options.theme!) || "", getThemedPictureUrl(remoteData, options.theme!), failedPlaceholderColor, options.dataBgColor || "");

	if (remoteData.app && options.context === "app") {
		if (isTokenAllowedToHaveContext("wrapped", options)) {
			remoteData.app.title = remoteData?.app?.title || options.dataContextTitle || "";
			remoteData.app.pic = getThemedPictureUrl(remoteData?.app, options.theme!) || options.dataContextPicUrl || "";
			remoteData.app.bgColor = getThemedBgColor(remoteData?.app, options.theme!) || options.dataContextBgColor || "none";
		} else {
			remoteData.app.title = "";
			remoteData.app.pic = "";
			remoteData.app.bgColor = "none";
		}
	}

	if (typeof remoteData?.network === "string") {
		remoteData.network = {
			id: remoteData.network,
			title: remoteData.network || options?.dataContextTitle || "",
			pic: "",
			bgColor: options?.dataContextBgColor || "none",
		};
	} else {
		remoteData.network.title = remoteData.network.title || options.dataContextTitle || "";
		remoteData.network.pic = getThemedPictureUrl(remoteData.network, options.theme!) || options.dataContextTitle || failedPlaceholderPicture;
		remoteData.network.bgColor = getThemedBgColor(remoteData.network, options.theme!) || options.dataContextBgColor || "none";
	}

	return remoteData;
};
