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
		remoteData.pic = finalSuccessfulPictureUrl(remoteData.pic, options.dataPicUrl, failedPlaceholderPicture);
		remoteData.supportingBackgroundColor = finalSuccessfulBgColor(remoteData.supportingBackgroundColor, remoteData.pic, failedPlaceholderColor);

		return remoteData;
	}

	initialData.pic = finalFailedPictureUrl(options.dataPicUrl, failedPlaceholderPicture);
	initialData.supportingBackgroundColor = finalFailedBgColor(initialData.pic, failedPlaceholderColor);

	return initialData;
};

export default finalizeProfileData;
