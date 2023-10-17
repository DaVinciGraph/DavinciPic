import { DavinciPicProps } from "../types/props";
import { davinciPicsConfig } from "..";
import { EntityResponseType } from "../types/entities";

const davinciPicsLoad = async <T extends DavinciPicProps>(props: T): Promise<EntityResponseType<T["type"]>> => {
	if (props.offlineMode !== true) {
		let url =
			props.type === "network"
				? `${davinciPicsConfig.apiUrl}/networks/${props.network}`
				: props.type === "app"
				? `${davinciPicsConfig.apiUrl}/apps/${props.name}`
				: `${davinciPicsConfig.apiUrl}/${props.type === "banner" || props.type === "profile" ? "account" : props.type}s/${props.network}/${
						props.address
				  }`;

		try {
			const response = await fetch(url);

			// Check for HTTP errors
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			// Parse JSON response
			const data = (await response.json()) as EntityResponseType<T>;
			return data;
		} catch (error: any) {
			console.error(`DavinciPic Fetch Error: ${error.message}`);
		}
	}

	return {};
};

export default davinciPicsLoad;
