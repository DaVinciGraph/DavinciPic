import { BannerEntity, EntityResponseType } from "../types/entities";
import { isBannerEntity } from "../types/guards";
import { DavinciPicBannerProps } from "../types/props";
import { finalFailedBgColor, finalFailedPictureUrl, finalSuccessfulBgColor, finalSuccessfulPictureUrl } from "./helpers";

const finalizeBannerData = (options: DavinciPicBannerProps, remoteData: EntityResponseType<"banner">, initialData: BannerEntity, failedPlaceholderColor: string, failedPlaceholderPicture: string) => {
	if (isBannerEntity(remoteData)) {
		remoteData.title = remoteData.title || initialData.title;
		remoteData.banner = finalSuccessfulPictureUrl(remoteData.banner, options.dataPicUrl, failedPlaceholderPicture);
		remoteData.bgColor = finalSuccessfulBgColor(remoteData.bgColor, remoteData.banner, failedPlaceholderColor, options.dataBgColor || "");
		return remoteData;
	}

	initialData.banner = finalFailedPictureUrl(options.dataPicUrl, failedPlaceholderPicture);
	initialData.bgColor = finalFailedBgColor(initialData.banner, failedPlaceholderColor, options.dataBgColor || "");

	return initialData;
};

export default finalizeBannerData;
