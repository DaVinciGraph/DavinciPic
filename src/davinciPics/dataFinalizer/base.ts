import { getThemedBgColor, getThemedPictureUrl } from "../modules/helpers";
import { AppEntity, DavinciPicEntity, EntityResponseType, NetworkEntity, NodeEntity, ProfileEntity } from "../types/entities";
import { isAppEntity, isNetworkEntity, isNodeEntity, isProfileEntity } from "../types/guards";
import { PicsType } from "../types/picsCommonTypes";
import { DavinciPicProps } from "../types/props";
import { finalFailedBgColor, finalFailedPictureUrl, finalSuccessfulBgColor, finalSuccessfulPictureUrl } from "./helpers";

const finalizeProfileData = <T extends PicsType>(
	options: DavinciPicProps,
	remoteData: EntityResponseType<T>,
	initialData: NetworkEntity | NodeEntity | ProfileEntity | AppEntity,
	failedPlaceholderColor: string,
	failedPlaceholderPicture: string
): DavinciPicEntity => {
	if (isProfileEntity(remoteData) || isNetworkEntity(remoteData) || isNodeEntity(remoteData) || isAppEntity(remoteData)) {
		remoteData.title = remoteData.title || initialData.title;
		remoteData.pic = finalSuccessfulPictureUrl(getThemedPictureUrl(remoteData, options.theme!), options.dataPicUrl, failedPlaceholderPicture);
		remoteData.bgColor = finalSuccessfulBgColor(getThemedBgColor(remoteData, options.theme!), getThemedPictureUrl(remoteData, options.theme!), failedPlaceholderColor, options.dataBgColor || "");

		return remoteData;
	}

	initialData.pic = finalFailedPictureUrl(options.dataPicUrl, failedPlaceholderPicture);
	initialData.bgColor = finalFailedBgColor(initialData.pic, failedPlaceholderColor, options.dataBgColor || "");

	return initialData;
};

export default finalizeProfileData;
