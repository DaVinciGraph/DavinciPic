import { AppEntity, BannerEntity, ContractEntity, LpTokenEntity, NetworkEntity, NodeEntity, PoolContractEntity, ProfileEntity, TokenEntity, WrappedTokenEntity } from "./entities";
import {
	PicsContextPositionType,
	PicsContextType,
	PicsSensitivityType,
	PicsShapeType,
	PicsTokenType,
	PicsType,
	picsContextPositionTypes,
	picsContextTypes,
	picsSensitivityTypes,
	picsShapeTypes,
	picsTokenTypes,
	picsTypes,
} from "./picsCommonTypes";

export function isPicsType(value: string | null): value is PicsType {
	// Assuming PicsType is an enum or a union type
	return value !== null && picsTypes.includes(value as any);
}

export function isPicsTokenType(value: string | null): value is PicsTokenType {
	return value !== null && picsTokenTypes.includes(value as any);
}

export function isPicsContextType(value: string | null): value is PicsContextType {
	return value !== null && picsContextTypes.includes(value as any);
}

export function isPicsContextPositionType(value: string | null): value is PicsContextPositionType {
	return value !== null && picsContextPositionTypes.includes(value as any);
}

export function isPicsShapeType(value: string | null): value is PicsShapeType {
	return value !== null && picsShapeTypes.includes(value as any);
}

export function isPicsSensitivityType(value: string | null): value is PicsSensitivityType {
	return value !== null && picsSensitivityTypes.includes(value as any);
}

// data
export function isTokenEntity(value: any): value is TokenEntity {
	return value && (value?.type === "TOKEN" || value?.type === "CURRENCY");
}

export function isLpTokenEntity(value: any): value is LpTokenEntity {
	return value && value?.type === "LP" && value?.token0 && value?.token1;
}

export function isWrappedTokenEntity(value: any): value is WrappedTokenEntity {
	return value && value?.type === "WRAPPED";
}

export function isContractEntity(value: any): value is ContractEntity {
	return value && value?.address;
}
export function isPoolContractEntity(value: any): value is PoolContractEntity {
	return value && value?.isPool && value?.token0 && value?.token1;
}

export function isProfileEntity(value: any): value is ProfileEntity {
	return value && value?.address;
}

export function isBannerEntity(value: any): value is BannerEntity {
	return value && value?.address;
}

export function isNodeEntity(value: any): value is NodeEntity {
	return value && value?.address;
}

export function isNetworkEntity(value: any): value is NetworkEntity {
	return value && value?.id;
}

export function isAppEntity(value: any): value is AppEntity {
	return value && value?.name;
}

export function isEntityResponseEmpty(obj: any): obj is "" {
	return !obj || Object.keys(obj).length === 0;
}
