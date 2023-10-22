import { PicsShapeType, PicsType } from "../types/picsCommonTypes";
import { DavinciPicTokenProps } from "../types/props";
import { LpTokenEntity, WrappedTokenEntity } from "../types/entities";

const notFoundClasses: { [key: string]: { [key: string]: string } } = {
	token: {
		defaultBright: "https://arweave.net/ZAMK4tuU1MZ9TkNl2ARV2QDRumGT5Yxw13uCpW3kX6w",
		default: "https://arweave.net/wW4bp6129XobnasaZbDB4RxdnpipGR8XyK0tUXGiVL0",
		defaultDark: "https://arweave.net/j5B7_CYAOdrk6YJNVeJMeOHn4HbySsgkObUSfpvUuDA",
		questionMarkBright: "https://arweave.net/z-5G9bNj_gisiQhVECwaUdSzuXMxl9Gi9UxYqrwUrq4",
		questionMark: "https://arweave.net/u9t3--97iFNeFB4XaX7auIdcJWjNWF090BFcJdnBmiQ",
		questionMarkDark: "https://arweave.net/HDVERv0ghkA91qhI2ud7qVUU_FFtAIyYELHHxQ9t2BQ",
		exclamationMarkBight: "https://arweave.net/HS0RGj5YSKgcNch2US1E8saZKdM8RGlQWpxwhk5eKrk",
		exclamationMark: "https://arweave.net/KwbKX4FOOM59KmFrAvtRhr5U-8MqWsSzU0rSA3Z7Z4A",
		exclamationMarkDark: "https://arweave.net/A3Ja0tV3kU6EhVvN1EQejG-kmtY_yEcbgQ6pShYRXHo",
	},
	profile: {
		defaultBright: "https://arweave.net/WxLlax6NBCapLUuKcuy-wvLlKLBTqxTV40yJt7Yc26Q",
		default: "https://arweave.net/qsn_zIlG_7_Ob4_qS6Bpc8vLEc5bPScw6JMly_shxlk",
		defaultDark: "https://arweave.net/ZHWeQz5R6VHBHOg6eOGekMsudTyy7uNBdnrul5gIIu0",
	},
};

const colors = [
	"#ef4444",
	"#f97316",
	"#f59e0b",
	"#eab308",
	"#84cc16",
	"#22c55e",
	"#10b981",
	"#14b8a6",
	"#06b6d4",
	"#0ea5e9",
	"#3b82f6",
	"#6366f1",
	"#8b5cf6",
	"#a855f7",
	"#d946ef",
	"#ec4899",
	"#f43f5e",
];

export function getMissingURL(type: PicsType, placeholder?: any): string {
	placeholder = placeholder || "defaultBright";

	// Check if it's a URL in the format url() or url('')
	const urlMatch = placeholder.match(/url\(['"]?(.*?)['"]?\)/);
	if (urlMatch) {
		return urlMatch[1]; // Return the extracted URL
	}

	// banners has no default pictures
	if (type === "banner") return "";

	// Check if it's one of the known classes
	const knownURL = notFoundClasses[type === "profile" ? "profile" : "token"][placeholder];
	if (knownURL) {
		return knownURL; // Return the known URL
	}

	// Default to 'defaultBright'
	return notFoundClasses[type === "profile" ? "profile" : "token"]["defaultBright"];
}

export const mustBeCensored = (censoredType: string | undefined, checkingType: string | undefined): boolean => {
	if (checkingType === undefined || censoredType === undefined) return false;

	censoredType = censoredType?.toUpperCase();
	checkingType = checkingType?.toUpperCase();

	if (checkingType === "SAFE") return false;

	if (checkingType === "SENSITIVE" && (censoredType === "INAPPROPRIATE" || censoredType === "COPYRIGHT-VIOLATED")) return false;
	if (checkingType === "INAPPROPRIATE" && censoredType === "COPYRIGHT-VIOLATED") return false;

	return true;
};

export function getRandomColor() {
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}

export function getShapeRadius(shape?: PicsShapeType, size: number = 100) {
	if (!shape) shape = "circle";
	return String(shape === "circle" ? size / 2 : shape === "smoothSquare" ? size * (15 / 100) : 0);
}

export const getContextData = (options: DavinciPicTokenProps, data: LpTokenEntity | WrappedTokenEntity) => {
	if (options.context === "app" && data?.app) {
		return {
			type: "app",
			pic: data.app.pic || "",
			title: data.app.title ? `Originated by ${data.app.title}` : "",
			supportingBackgroundColor: data.app.supportingBackgroundColor || "transparent",
		};
	}

	if (options.context === "network" && data?.network) {
		return {
			type: "network",
			pic: data.network.pic || "",
			title: data.network.title ? `Originated on ${data.network.title}` : "",
			supportingBackgroundColor: data.network.supportingBackgroundColor || "transparent",
		};
	}

	return { type: "none", pic: "", title: "", supportingBackgroundColor: "transparent" };
};
