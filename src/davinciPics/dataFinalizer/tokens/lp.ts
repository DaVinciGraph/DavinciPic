import { isTokenAllowedToHaveContext } from "../../modules/helpers";
import { getThemedBgColor, getThemedPictureUrl } from "../../modules/helpers";
import { LpTokenEntity, PoolContractEntity } from "../../types/entities";
import { DavinciPicContractProps, DavinciPicTokenProps } from "../../types/props";
import { finalFailedBgColor, finalFailedPictureUrl, finalSuccessfulBgColor, finalSuccessfulPictureUrl } from "../helpers";

export const finalizeFailedLpData = (
	options: DavinciPicTokenProps | DavinciPicContractProps,
	initialData: LpTokenEntity | PoolContractEntity,
	failedPlaceholderColor: string,
	failedPlaceholderPicture: string
) => {
	const { token0Pic, token1Pic, token0BgColor, token1BgColor } = getLocalLpData(options);

	initialData.token0.pic = finalFailedPictureUrl(token0Pic, failedPlaceholderPicture);
	initialData.token0.bgColor = finalFailedBgColor(initialData.token0.pic, failedPlaceholderColor, token0BgColor);

	initialData.token1.pic = finalFailedPictureUrl(token1Pic, failedPlaceholderPicture);
	initialData.token1.bgColor = finalFailedBgColor(initialData.token1.pic, failedPlaceholderColor, token1BgColor);

	if (initialData.app && options.context === "app") {
		initialData.app.pic = options.dataContextPicUrl || "";
		initialData.app.bgColor = options.dataContextBgColor || "none";
	}

	initialData.network.pic = options.dataContextPicUrl || "";
	initialData.network.bgColor = options.dataContextBgColor || "none";

	return initialData;
};

export const finalizeSuccessfulLpData = (
	options: DavinciPicTokenProps | DavinciPicContractProps,
	remoteData: LpTokenEntity | PoolContractEntity,
	failedPlaceholderColor: string,
	failedPlaceholderPicture: string
) => {
	const { token0Title, token1Title, token0Pic, token1Pic, token0BgColor, token1BgColor } = getLocalLpData(options);

	remoteData.token0.title = remoteData.token0.title || token0Title;
	remoteData.token0.pic = finalSuccessfulPictureUrl(getThemedPictureUrl(remoteData.token0, options.theme!), token0Pic, failedPlaceholderPicture);
	remoteData.token0.bgColor = finalSuccessfulBgColor(
		getThemedBgColor(remoteData.token0, options.theme!),
		getThemedPictureUrl(remoteData.token0, options.theme!),
		failedPlaceholderColor,
		token0BgColor
	);

	remoteData.token1.title = remoteData.token1.title || token1Title;
	remoteData.token1.pic = finalSuccessfulPictureUrl(getThemedPictureUrl(remoteData.token1, options.theme!), token1Pic, failedPlaceholderPicture);
	remoteData.token1.bgColor = finalSuccessfulBgColor(
		getThemedBgColor(remoteData.token1, options.theme!),
		getThemedPictureUrl(remoteData.token1, options.theme!),
		failedPlaceholderColor,
		token1BgColor
	);

	if (remoteData?.app) {
		if (isTokenAllowedToHaveContext("lp", options)) {
			remoteData.app.title = remoteData.app?.title || options.dataContextTitle || "";
			remoteData.app.pic = getThemedPictureUrl(remoteData.app, options.theme!) || options.dataContextPicUrl || "";
			remoteData.app.bgColor = getThemedBgColor(remoteData.app, options.theme!) || options.dataContextBgColor || "none";
		} else {
			remoteData.app.title = "";
			remoteData.app.pic = "";
			remoteData.app.bgColor = "none";
		}
	}

	if (remoteData?.token0?.app) {
		remoteData.token0.app.pic = getThemedPictureUrl(remoteData.token0.app, options.theme!);
		remoteData.token0.app.bgColor = getThemedBgColor(remoteData.token0.app, options.theme!) || "none";
	}

	if (remoteData?.token1?.app) {
		remoteData.token1.app.pic = getThemedPictureUrl(remoteData.token1.app, options.theme!);
		remoteData.token1.app.bgColor = getThemedBgColor(remoteData.token1.app, options.theme!) || "none";
	}

	if (typeof remoteData?.network === "string") {
		remoteData.network = {
			id: remoteData.network,
			title: remoteData.network || options?.dataContextTitle || "",
			pic: "",
			bgColor: options?.dataContextBgColor || "none",
		};
	} else {
		remoteData.network.title = remoteData?.network?.title || options.dataContextTitle || "";
		remoteData.network.pic = getThemedPictureUrl(remoteData?.network, options.theme!) || options.dataContextPicUrl || failedPlaceholderPicture;
		remoteData.network.bgColor = getThemedBgColor(remoteData?.network, options.theme!) || options.dataContextBgColor || "none";
	}

	return remoteData;
};

const getLocalLpData = (options: DavinciPicTokenProps | DavinciPicContractProps) => {
	let token0Pic = "",
		token1Pic = "",
		token0Title = "",
		token1Title = "",
		token0BgColor = "",
		token1BgColor = "";
	if (options.dataPicUrl?.includes("|")) {
		const lpUrls = options.dataPicUrl.split("|");
		token0Pic = lpUrls[0];
		token1Pic = lpUrls[1];
	}
	if (options.dataTitle?.includes("|")) {
		const lpTitles = options.dataTitle.split("|");
		token0Title = lpTitles[0];
		token1Title = lpTitles[1];
	}
	if (options.dataBgColor?.includes("|")) {
		const lpBgColors = options.dataBgColor.split("|");
		token0BgColor = lpBgColors[0];
		token1BgColor = lpBgColors[1];
	}

	return { token0Pic, token1Pic, token0Title, token1Title, token0BgColor, token1BgColor };
};
