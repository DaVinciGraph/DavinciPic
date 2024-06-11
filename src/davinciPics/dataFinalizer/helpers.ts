export const finalSuccessfulPictureUrl = (remotePictureUrl: string, localPictureUrl: string = "", failedPlaceholderPicture: string) => {
	return remotePictureUrl || localPictureUrl || failedPlaceholderPicture;
};

export const finalFailedPictureUrl = (localPictureUrl: string = "", failedPlaceholderPicture: string) => {
	return localPictureUrl || failedPlaceholderPicture || "";
};

export const finalSuccessfulBgColor = (remoteColor: string, remotePictureUrl: string, placeholderColor: string, localBgColor: string) => {
	return remoteColor ? remoteColor : localBgColor || (!remotePictureUrl ? placeholderColor : "none");
};

export const finalFailedBgColor = (finalPictureUrl: string, placeholderColor: string, localBgColor: string) => {
	if (localBgColor) return localBgColor;
	return !finalPictureUrl ? placeholderColor : "none";
};
