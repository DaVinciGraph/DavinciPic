import { LpTokenEntity } from "../../types/entities";
import { DavinciPicTokenProps } from "../../types/props";
import { finalFailedBgColor, finalFailedPictureUrl, finalSuccessfulBgColor, finalSuccessfulPictureUrl } from "../helpers";

export const finalizeFailedLpData = (
	options: DavinciPicTokenProps,
	initialData: LpTokenEntity,
	failedPlaceholderColor: string,
	failedPlaceholderPicture: string
) => {
	const { token0Pic, token1Pic } = getLocalLpData(options);

	initialData.token0.pic = finalFailedPictureUrl(token0Pic, failedPlaceholderPicture);
	initialData.token0.supportingBackgroundColor = finalFailedBgColor(initialData.token0.pic, failedPlaceholderColor);

	initialData.token1.pic = finalFailedPictureUrl(token1Pic, failedPlaceholderPicture);
	initialData.token1.supportingBackgroundColor = finalFailedBgColor(initialData.token1.pic, failedPlaceholderColor);

	if (initialData.app && options.context === "app") {
		initialData.app.pic = options.dataContextPicUrl || "";
		initialData.app.supportingBackgroundColor = "";
	}

	initialData.network.pic = options.dataContextPicUrl || "";
	initialData.network.supportingBackgroundColor = "";

	return initialData;
};

export const finalizeSuccessfulLpData = (
	options: DavinciPicTokenProps,
	remoteData: LpTokenEntity,
	failedPlaceholderColor: string,
	failedPlaceholderPicture: string
) => {
	const { token0Title, token1Title, token0Pic, token1Pic } = getLocalLpData(options);

	remoteData.token0.title = remoteData.token0.title || token0Title;
	remoteData.token0.pic = finalSuccessfulPictureUrl(remoteData.token0.pic, token0Pic, failedPlaceholderPicture);
	remoteData.token0.supportingBackgroundColor = finalSuccessfulBgColor(remoteData.token0.supportingBackgroundColor, failedPlaceholderColor);

	remoteData.token1.title = remoteData.token1.title || token1Title;
	remoteData.token1.pic = finalSuccessfulPictureUrl(remoteData.token1.pic, token1Pic, failedPlaceholderPicture);
	remoteData.token1.supportingBackgroundColor = finalSuccessfulBgColor(remoteData.token1.supportingBackgroundColor, failedPlaceholderColor);

	if (remoteData.app) {
		remoteData.app.title = remoteData.app?.title || options.dataContextTitle || "";
		remoteData.app.pic = remoteData.app?.pic || options.dataContextPicUrl || "";
		remoteData.app.supportingBackgroundColor = remoteData.app?.supportingBackgroundColor || "";
	}

	remoteData.network.title = remoteData.network.title || options.dataContextTitle || "";
	remoteData.network.pic = remoteData.network.pic || options.dataContextPicUrl || failedPlaceholderPicture;
	remoteData.network.supportingBackgroundColor = remoteData.network.supportingBackgroundColor || "";

	return remoteData;
};

// export const finalizeMismatchedLpData = (
// 	options: DavinciPicTokenProps,
// 	remoteData: LpTokenEntity,
// 	failedPlaceholderColor: string,
// 	failedPlaceholderPicture: string
// ) => {
// 	const { token0Pic, token1Pic } = getLocalLpData(options);
// 	remoteData.token0.pic = finalSuccessfulPictureUrl(remoteData.token0.pic, token0Pic, failedPlaceholderPicture);
// 	remoteData.token0.supportingBackgroundColor = finalSuccessfulBgColor(
// 		remoteData.token0.supportingBackgroundColor,
// 		remoteData.token0.pic,
// 		failedPlaceholderColor
// 	);

// 	remoteData.token1.pic = finalSuccessfulPictureUrl(remoteData.token1.pic, token1Pic, failedPlaceholderPicture);
// 	remoteData.token1.supportingBackgroundColor = finalSuccessfulBgColor(
// 		remoteData.token1.supportingBackgroundColor,
// 		remoteData.token1.pic,
// 		failedPlaceholderColor
// 	);
// 	return remoteData;
// };

const getLocalLpData = (options: DavinciPicTokenProps) => {
	let token0Pic = "",
		token1Pic = "",
		token0Title = "",
		token1Title = "";
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

	return { token0Pic, token1Pic, token0Title, token1Title };
};
