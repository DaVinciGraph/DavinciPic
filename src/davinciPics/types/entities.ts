import { PicsSensitivityType } from "./picsCommonTypes";

// Base type for all tokens and accounts

export interface BaseEntity {
	address: string;
	title: string;
	sensitivity: PicsSensitivityType;
	supportingBackgroundColor: string;
}
// For common tokens and currencies

export interface TokenEntity extends BaseEntity {
	type: "TOKEN" | "CURRENCY";
	pic: string;
	network: {
		id: string;
		title: string;
		pic: string;
		supportingBackgroundColor: string;
	};
}
interface ChildToken extends BaseEntity {
	pic: string;
	supportingBackgroundColor: string;
	network: string;
}
// For LP tokens

export interface LpTokenEntity extends BaseEntity {
	type: "LP";
	token0: ChildToken;
	token1: ChildToken;
	app?: {
		title: string;
		pic: string;
		supportingBackgroundColor: string;
	};
	network: {
		id: string;
		title: string;
		pic: string;
		supportingBackgroundColor: string;
	};
}
// For wrapped tokens

export interface WrappedTokenEntity extends BaseEntity {
	type: "WRAPPED";
	originalToken: ChildToken;
	app?: {
		title: string;
		pic: string;
		supportingBackgroundColor: string;
	};
	network: {
		id: string;
		title: string;
		pic: string;
		supportingBackgroundColor: string;
	};
}
// For profile pictures

export interface ProfileEntity extends BaseEntity {
	network: string;
	pic: string;
}
// For banners

export interface BannerEntity extends BaseEntity {
	network: string;
	banner: string;
}
// For Node entities

export interface NodeEntity {
	network: string;
	address: string;
	title: string;
	pic: string;
	supportingBackgroundColor: string;
}
// For network entities

export interface NetworkEntity {
	id: string;
	title: string;
	pic: string;
	supportingBackgroundColor: string;
}

export interface AppEntity {
	name: string;
	title: string;
	pic: string;
	supportingBackgroundColor: string;
}

export type DavinciPicEntity =
	| TokenEntity
	| LpTokenEntity
	| WrappedTokenEntity
	| ProfileEntity
	| BannerEntity
	| NetworkEntity
	| NodeEntity
	| AppEntity;

export type EntityType<T> =
	| (T extends "token" ? TokenEntity | LpTokenEntity | WrappedTokenEntity : never)
	| (T extends "profile" ? ProfileEntity : never)
	| (T extends "banner" ? BannerEntity : never)
	| (T extends "node" ? NodeEntity : never)
	| (T extends "network" ? NetworkEntity : never)
	| (T extends "app" ? AppEntity : never);

export type EntityResponseType<T> = EntityType<T> | {};
