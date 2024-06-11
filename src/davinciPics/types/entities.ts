import { PicsSensitivityType } from "./picsCommonTypes";

// Base type for all tokens and accounts

export interface BaseEntity {
	address: string;
	title: string;
	sensitivity: PicsSensitivityType;
	bgColor: string;
}
// For common tokens and currencies

export interface TokenEntity extends BaseEntity {
	type: "TOKEN" | "CURRENCY";
	pic: string;
	darkPic?: string;
	darkBgColor?: string;
	network: {
		id: string;
		title: string;
		pic: string;
		darkPic?: string;
		bgColor?: string;
		darkBgColor?: string;
	};
}
interface ChildToken extends BaseEntity {
	pic: string;
	darkPic?: string;
	darkBgColor?: string;
	app?: {
		title: string;
		pic: string;
		darkPic?: string;
		bgColor?: string;
		darkBgColor?: string;
	};
}
// For LP tokens

export interface LpTokenEntity extends BaseEntity {
	type: "LP";
	token0: ChildToken;
	token1: ChildToken;
	app?: {
		title: string;
		pic: string;
		darkPic?: string;
		bgColor?: string;
		darkBgColor?: string;
	};
	network: {
		id: string;
		title: string;
		pic: string;
		darkPic?: string;
		bgColor?: string;
		darkBgColor?: string;
	};
}
// For wrapped tokens

export interface WrappedTokenEntity extends BaseEntity {
	type: "WRAPPED";
	pic: string;
	darkPic?: string;
	darkBgColor?: string;
	app?: {
		title: string;
		pic: string;
		darkPic?: string;
		bgColor?: string;
		darkBgColor?: string;
	};
	network: {
		id: string;
		title: string;
		pic: string;
		darkPic?: string;
		bgColor?: string;
		darkBgColor?: string;
	};
	sensitivity: PicsSensitivityType;
}

export interface BaseContractEntity extends BaseEntity {
	isPool: boolean;
}

export interface ContractEntity extends BaseContractEntity {
	isPool: false;
	pic: string;
	darkPic?: string;
	darkBgColor?: string;
	app?: {
		title: string;
		pic: string;
		darkPic?: string;
		bgColor?: string;
		darkBgColor?: string;
	};
	network: {
		id: string;
		title: string;
		pic: string;
		darkPic?: string;
		bgColor?: string;
		darkBgColor?: string;
	};
}

export interface PoolContractEntity extends BaseContractEntity {
	isPool: true;
	token0: ChildToken;
	token1: ChildToken;
	app?: {
		title: string;
		pic: string;
		darkPic?: string;
		bgColor?: string;
		darkBgColor?: string;
	};
	network: {
		id: string;
		title: string;
		pic: string;
		darkPic?: string;
		bgColor?: string;
		darkBgColor?: string;
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
	darkPic?: string;
	bgColor?: string;
	darkBgColor?: string;
}
// For network entities

export interface NetworkEntity {
	id: string;
	title: string;
	pic: string;
	darkPic?: string;
	bgColor?: string;
	darkBgColor?: string;
}

export interface AppEntity {
	name: string;
	title: string;
	pic: string;
	darkPic?: string;
	bgColor?: string;
	darkBgColor?: string;
}

export type DavinciPicEntity = TokenEntity | LpTokenEntity | WrappedTokenEntity | ContractEntity | PoolContractEntity | ProfileEntity | BannerEntity | NetworkEntity | NodeEntity | AppEntity;

export type EntityType<T> =
	| (T extends "token" ? TokenEntity | LpTokenEntity | WrappedTokenEntity : never)
	| (T extends "contract" ? ContractEntity | PoolContractEntity : never)
	| (T extends "profile" ? ProfileEntity : never)
	| (T extends "banner" ? BannerEntity : never)
	| (T extends "node" ? NodeEntity : never)
	| (T extends "network" ? NetworkEntity : never)
	| (T extends "app" ? AppEntity : never);

export type EntityResponseType<T> = EntityType<T> | "";
