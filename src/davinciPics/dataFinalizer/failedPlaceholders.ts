import { davinciPicsConfig } from "..";
import { getMissingURL, getRandomColor } from "../modules/helpers";
import { DavinciPicPlaceholder, DavinciPicProps } from "../types/props";

const getFailedPlaceholders = (options: DavinciPicProps, initialPlaceholder: DavinciPicPlaceholder): { color: string; url: string } => {
	const placeholders = { color: "transparent", url: "" };
	if (options.failureEffect === "transparent") {
		return placeholders;
	}

	if (options.placeholder === "randomColor") {
		if (initialPlaceholder.color && options.loadingEffect === "randomColor") {
			placeholders.color = initialPlaceholder.color;
			return placeholders;
		}

		placeholders.color = getRandomColor();
		return placeholders;
	}

	let possbileBgColor = options.placeholder?.match(davinciPicsConfig.colorRegex);
	if (possbileBgColor) {
		placeholders.color = possbileBgColor[0];
		return placeholders;
	}

	placeholders.url = getMissingURL(options.type, options.placeholder);
	return placeholders;
};

export default getFailedPlaceholders;
