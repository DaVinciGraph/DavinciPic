import { DavinciPicContractProps } from "../types/props";
import { ContractEntity, DavinciPicEntity, EntityResponseType } from "../types/entities";
import { isContractEntity, isPoolContractEntity } from "../types/guards";
import { finalizeFailedLpData, finalizeSuccessfulLpData } from "./tokens/lp";
import { finalFailedBgColor, finalFailedPictureUrl, finalSuccessfulBgColor, finalSuccessfulPictureUrl } from "./helpers";
import { getThemedBgColor, getThemedPictureUrl } from "../modules/helpers";

const finalizeContractData = (
	options: DavinciPicContractProps,
	initialData: DavinciPicEntity,
	remoteData: EntityResponseType<"contract">,
	failedPlaceholderPicture: string,
	failedPlaceholderColor: string
): DavinciPicEntity => {
	if (!(remoteData as any)?.address) {
		// no remote data
		if (isPoolContractEntity(initialData)) {
			return finalizeFailedLpData(options, initialData, failedPlaceholderColor, failedPlaceholderPicture);
		}

		if (isContractEntity(initialData)) {
			return finalizeFailedContractData(options, initialData, failedPlaceholderColor, failedPlaceholderPicture);
		}
	}

	if (isPoolContractEntity(remoteData)) {
		return finalizeSuccessfulLpData(options, remoteData, failedPlaceholderColor, failedPlaceholderPicture);
	}

	if (isContractEntity(remoteData)) {
		return finalizeSuccessfulContractData(options, remoteData, failedPlaceholderColor, failedPlaceholderPicture);
	}

	throw new Error(`Data couldn't be finalized for the contract, failed to combine data.`);
};

export default finalizeContractData;

export const finalizeSuccessfulContractData = (options: DavinciPicContractProps, remoteData: ContractEntity, failedPlaceholderColor: string, failedPlaceholderPicture: string) => {
	remoteData.title = remoteData.title || options.dataTitle || "";
	remoteData.pic = finalSuccessfulPictureUrl(getThemedPictureUrl(remoteData, options.theme!), options.dataPicUrl, failedPlaceholderPicture);
	remoteData.bgColor = finalSuccessfulBgColor(getThemedBgColor(remoteData, options.theme!), getThemedPictureUrl(remoteData, options.theme!), failedPlaceholderColor, options.dataBgColor || "");

	if (remoteData.app) {
		remoteData.app.title = remoteData?.app?.title || options.dataContextTitle || "";
		remoteData.app.pic = getThemedPictureUrl(remoteData?.app, options.theme!) || options.dataContextPicUrl || "";
		remoteData.app.bgColor = getThemedBgColor(remoteData?.app, options.theme!) || options.dataContextBgColor || "none";
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
		remoteData.network.pic = getThemedPictureUrl(remoteData.network, options.theme!) || failedPlaceholderPicture;
		remoteData.network.bgColor = getThemedBgColor(remoteData.network, options.theme!) || options.dataContextBgColor || "none";
	}
	return remoteData;
};

export const finalizeFailedContractData = (options: DavinciPicContractProps, initialData: ContractEntity, failedPlaceholderColor: string, failedPlaceholderPicture: string) => {
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
