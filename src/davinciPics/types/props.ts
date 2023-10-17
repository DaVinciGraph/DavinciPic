import { PicsContextPositionType, PicsContextType, PicsSensitivityType, PicsShapeType, PicsType } from "./picsCommonTypes";

export type DavinciPicsPlaceholderType =
	| "transparent"
	| "default"
	| "defaultBright"
	| "defaultDark"
	| "questionMarkBright"
	| "questionMark"
	| "questionMarkDark"
	| "exclamationMarkBight"
	| "exclamationMark"
	| "exclamationMarkDark"
	| "randomColor"
	| Omit<
			string,
			| "transparent"
			| "default"
			| "defaultBright"
			| "defaultDark"
			| "questionMarkBright"
			| "questionMark"
			| "questionMarkDark"
			| "exclamationMarkBight"
			| "exclamationMark"
			| "exclamationMarkDark"
			| "randomColor"
	  >;

export type DavinciPicOnLoadingType =
	| "hide"
	| "transparent"
	| "placeholder"
	| "pulse:placeholder"
	| "randomColor"
	| "pulse:randomColor"
	| Omit<string, "hide" | "transparent" | "placeholder" | "pulse:placeholder" | "randomColor" | "pulse:randomColor">;

export type DavinciPicOnFailedType = "hide" | "transparent" | "placeholder" | Omit<string, "hide" | "transparent" | "placeholder">;

export type DavinciPicBaseProps = {
	type: PicsType;
	network: string;
	address: string;
	offlineMode?: boolean;
	shape?: PicsShapeType;
	size?: number;
	strokeWidth?: number;
	strokeColor?: string;
	censor?: PicsSensitivityType;
	dataTitle?: string;
	dataPicUrl?: string;
	placeholder?: DavinciPicsPlaceholderType;
	loadingEffect?: DavinciPicOnLoadingType;
	failureEffect?: DavinciPicOnFailedType;
	delayResponseTime?: number;
};

type DavinciPicBasePropsOnline = DavinciPicBaseProps & {
	offlineMode?: false;
	dataPicUrl?: string;
};

type DavinciPicBasePropsOffline = DavinciPicBaseProps & {
	offlineMode?: true;
	dataPicUrl: string;
};

/*  Davinci Pics Token Type  */
export type DavinciPicTokenProps = (DavinciPicBasePropsOnline | DavinciPicBasePropsOffline) & {
	type: "token";
	complexTokenType?: "lp" | "wrapped";
	context?: PicsContextType;
	contextPosition?: PicsContextPositionType;
	dataContextTitle?: string;
	dataContextPicUrl?: string;
};

export type DavinciPicProfileProps = (DavinciPicBasePropsOnline | DavinciPicBasePropsOffline) & {
	type: "profile";
	placeholder?:
		| "default"
		| "transparent"
		| "defaultBright"
		| "defaultDark"
		| "randomColor"
		| Omit<string, "default" | "transparent" | "defaultBright" | "defaultDark" | "randomColor">;
};

export type DavinciPicBannerProps = (
	| Omit<DavinciPicBasePropsOnline, "size" | "shape" | "strokeWidth" | "strokeColor">
	| Omit<DavinciPicBasePropsOffline, "size" | "shape" | "strokeWidth" | "strokeColor">
) & {
	type: "banner";
	placeholder?: "randomColor" | "transparent" | Omit<string, "randomColor" | "transparent">;
};

export type DavinciPicNodeProps = (DavinciPicBasePropsOnline | DavinciPicBasePropsOffline) & {
	type: "node";
};

export type DavinciPicNetworkProps = (Omit<DavinciPicBasePropsOnline, "address"> | Omit<DavinciPicBasePropsOffline, "address">) & {
	type: "network";
};

export type DavinciPicAppProps = (
	| Omit<DavinciPicBasePropsOnline, "address" | "network">
	| Omit<DavinciPicBasePropsOffline, "address" | "network">
) & {
	type: "app";
	name: string;
};

export type DavinciPicProps =
	| DavinciPicTokenProps
	| DavinciPicProfileProps
	| DavinciPicBannerProps
	| DavinciPicNodeProps
	| DavinciPicNetworkProps
	| DavinciPicAppProps;

export type DavinciPicPlaceholder = {
	color: string;
	url: string;
};

export type DavinciPicStatus = "loading" | "failed" | "interrupted" | "success";
