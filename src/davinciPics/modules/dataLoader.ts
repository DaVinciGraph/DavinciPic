import { DavinciPicProps } from "../types/props";
import { davinciPicsConfig } from "..";
import { EntityResponseType } from "../types/entities";

const davinciPicsLoad = async <T extends DavinciPicProps>(props: T): Promise<EntityResponseType<T["type"]>> => {
	if (props.offlineMode !== true) {
		const showContext = (props.type === "token" || props.type === "contract") && (props.context !== "none" || props.showPairApps !== false);
		const noCache = props.noCache ? `&t=${Date.now()}` : "";

		const getUrl = (apiUrl: string) => {
			const query = `?scope=supplementary&noMissingError=true&includeBgColor=true${noCache}`;
			if (props.type === "network") {
				return `${apiUrl}/networks/${props.network}${query}`;
			} else if (props.type === "app") {
				return `${apiUrl}/apps/${props.name}${query}`;
			} else {
				return `${apiUrl}/${props.type === "banner" || props.type === "profile" ? "account" : props.type}s/${props.network}/${props.address}${query}&context=${showContext}`;
			}
		};

		let retriedForBackup = false;

		const fetchData = async (url: string): Promise<EntityResponseType<T["type"]>> => {
			try {
				const response = await fetch(url, { method: "GET" });

				if (!response.ok) {
					// If other errors occur, and it's not 404, try with the backup API URL
					if (response.status !== 404 && !retriedForBackup) {
						const backupUrl = getUrl(davinciPicsConfig.backupApiUrl);
						retriedForBackup = true;
						return fetchData(backupUrl);
					}
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const contentType = response.headers.get("content-type");

				if (contentType && contentType.includes("application/json")) {
					return (await response.json()) as EntityResponseType<T["type"]>;
				} else {
					return (await response.text()) as unknown as EntityResponseType<T["type"]>;
				}
			} catch (error: any) {
				console.error(`DavinciPic Fetch Error: ${error.message}`);
				throw error;
			}
		};

		// Start the fetch process with the primary API URL
		return fetchData(getUrl(davinciPicsConfig.apiUrl));
	}

	return "" as EntityResponseType<T["type"]>;
};

export default davinciPicsLoad;
