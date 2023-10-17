import { davinciPicsConfig } from "..";
import { PicsType } from "../types/picsCommonTypes";
import { DavinciPicPlaceholder, DavinciPicProps, DavinciPicTokenProps } from "../types/props";
import {
	AppEntity,
	BannerEntity,
	DavinciPicEntity,
	LpTokenEntity,
	NetworkEntity,
	NodeEntity,
	ProfileEntity,
	TokenEntity,
	WrappedTokenEntity,
} from "../types/entities";
import { getMissingURL, getRandomColor } from "./helpers";

const initializeData = (options: DavinciPicProps, placeholders: DavinciPicPlaceholder): DavinciPicEntity => {
	switch (options.type) {
		case "token":
			let initialData = {
				type: "TOKEN",
				address: options.address,
				supportingBackgroundColor: getPlaceholderBgColor(placeholders),
				network: {
					id: options.network,
					title: options.context === "network" ? options.dataContextTitle || "" : "",
					pic: "",
					supportingBackgroundColor: placeholders.color,
				},
			};

			const urlContainsLpSign = options.dataPicUrl?.includes("|");
			const titleContainsLpSign = options.dataTitle?.includes("|");

			// send back an lp token entity
			if (options.complexTokenType === "lp" || urlContainsLpSign || titleContainsLpSign) {
				let token0Pic = placeholders.url,
					token1Pic = placeholders.url,
					token0Title = "",
					token1Title = "";

				if (titleContainsLpSign && options.dataTitle) {
					const titles = options.dataTitle.split("|");
					token0Title = titles[0];
					token1Title = titles[1];
				}

				return {
					...initialData,
					type: "LP",
					title: "",
					sensitivity: "safe",
					token0: {
						network: options.network,
						address: options.address,
						sensitivity: "safe",
						pic: token0Pic,
						supportingBackgroundColor: getPlaceholderBgColor(placeholders),
						title: token0Title,
					},
					token1: {
						network: options.network,
						address: options.address,
						sensitivity: "safe",
						pic: token1Pic,
						supportingBackgroundColor: getPlaceholderBgColor(placeholders),
						title: token1Title,
					},
					app: getInitialAppData(options, placeholders),
				} as LpTokenEntity;
			}

			// send back a wrapped token entity
			if (options.complexTokenType === "wrapped") {
				return {
					...initialData,
					type: "WRAPPED",
					title: "",
					sensitivity: "safe",
					originalToken: {
						network: options.network,
						address: options.address,
						sensitivity: "safe",
						pic: placeholders.url,
						supportingBackgroundColor: getPlaceholderBgColor(placeholders),
						title: options.dataTitle || "",
					},
					app: getInitialAppData(options, placeholders),
				} as WrappedTokenEntity;
			}

			// send back a normal token entity
			return {
				...initialData,
				title: options.dataTitle || "",
				pic: placeholders.url,
				supportingBackgroundColor: getPlaceholderBgColor(placeholders),
			} as TokenEntity;
		case "profile":
			return {
				network: options.network,
				address: options.address,
				title: options.dataTitle || "",
				sensitivity: "safe",
				pic: placeholders.url,
				supportingBackgroundColor: getPlaceholderBgColor(placeholders),
			} as ProfileEntity;
		case "banner":
			return {
				network: options.network,
				address: options.address,
				title: options.dataTitle || "",
				sensitivity: "safe",
				banner: placeholders.url,
				supportingBackgroundColor: getPlaceholderBgColor(placeholders),
			} as BannerEntity;
		case "node":
			return {
				network: options.network,
				address: options.address,
				title: options.dataTitle || "",
				supportingBackgroundColor: getPlaceholderBgColor(placeholders),
				pic: placeholders.url,
			} as NodeEntity;
		case "network":
			return {
				id: options.network,
				title: options.dataTitle || "",
				pic: placeholders.url,
				supportingBackgroundColor: getPlaceholderBgColor(placeholders),
			} as NetworkEntity;
		case "app":
			return {
				name: " ",
				title: options.dataTitle || "",
				pic: placeholders.url,
				supportingBackgroundColor: getPlaceholderBgColor(placeholders),
			} as AppEntity;
	}
};

export default initializeData;

export const getPlaceholders = (text: string, type: PicsType) => {
	const placeholders = { color: "transparent", url: "" };
	if (text === "transparent") {
		return placeholders;
	}

	if (text.endsWith("randomColor")) {
		placeholders.color = getRandomColor();
		return placeholders;
	}

	let possbileBgColor = text.match(davinciPicsConfig.colorRegex);
	if (possbileBgColor) {
		placeholders.color = possbileBgColor[0];
		return placeholders;
	}

	placeholders.url = getMissingURL(type, text);
	return placeholders;
};

const getInitialAppData = (options: DavinciPicTokenProps, placeholders: DavinciPicPlaceholder) => {
	return {
		title: options.dataContextTitle || "",
		pic: "",
		supportingBackgroundColor: placeholders.color,
	};
};

const getPlaceholderBgColor = (placeholders: DavinciPicPlaceholder) => {
	return !placeholders.url ? placeholders.color : "transparent";
};
