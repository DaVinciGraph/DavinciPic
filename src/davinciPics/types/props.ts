import {
	PicsComplexTokenType,
	PicsContextPositionType,
	PicsContextType,
	PicsLpTokensPositionType,
	PicsSensitivityType,
	PicsShapeType,
	PicsShowAppForTypeType,
	PicsShowPairAppsType,
	PicsTopTokenType,
	PicsType,
} from "./picsCommonTypes";

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
	censor?: string | PicsSensitivityType[];
	dataTitle?: string;
	dataPicUrl?: string;
	dataBgColor?: string;
	placeholder?: DavinciPicsPlaceholderType;
	loadingEffect?: DavinciPicOnLoadingType;
	failureEffect?: DavinciPicOnFailedType;
	delayResponseTime?: number;
	theme?: "light" | "dark";
	noCache?: boolean; // pretty expensive action
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
	complexTokenType?: PicsComplexTokenType;
	context?: PicsContextType;
	contextPosition?: PicsContextPositionType;
	lpTokensPosition?: PicsLpTokensPositionType;
	showAppForType?: PicsShowAppForTypeType;
	showPairApps?: PicsShowPairAppsType;
	topToken?: PicsTopTokenType;
	dataContextTitle?: string;
	dataContextPicUrl?: string;
	dataContextBgColor?: string;
};

export type DavinciPicContractProps = (DavinciPicBasePropsOnline | DavinciPicBasePropsOffline) & {
	type: "contract";
	isPool?: boolean;
	context?: PicsContextType;
	contextPosition?: PicsContextPositionType;
	poolPairPosition?: PicsLpTokensPositionType;
	showPairApps?: PicsShowPairAppsType;
	topToken?: PicsTopTokenType;
	dataContextTitle?: string;
	dataContextPicUrl?: string;
	dataContextBgColor?: string;
};

export type DavinciPicProfileProps = (DavinciPicBasePropsOnline | DavinciPicBasePropsOffline) & {
	type: "profile";
	placeholder?: "default" | "transparent" | "defaultBright" | "defaultDark" | "randomColor" | Omit<string, "default" | "transparent" | "defaultBright" | "defaultDark" | "randomColor">;
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

export type DavinciPicAppProps = (Omit<DavinciPicBasePropsOnline, "address" | "network"> | Omit<DavinciPicBasePropsOffline, "address" | "network">) & {
	type: "app";
	name: string;
};

export type DavinciPicProps = DavinciPicTokenProps | DavinciPicContractProps | DavinciPicProfileProps | DavinciPicBannerProps | DavinciPicNodeProps | DavinciPicNetworkProps | DavinciPicAppProps;

export type DavinciPicPlaceholder = {
	color: string;
	url: string;
};

export type DavinciPicStatus = "loading" | "failed" | "interrupted" | "success";
