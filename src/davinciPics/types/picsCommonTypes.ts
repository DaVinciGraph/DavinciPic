export type PicsType = "token" | "profile" | "banner" | "node" | "network" | "app" | "contract";
export const picsTypes = ["token", "profile", "banner", "node", "network", "app", "contract"];

export type PicsTokenType = "token" | "lp" | "wrapped" | "currency";
export const picsTokenTypes = ["token", "lp", "wrapped", "currency"];

export type PicsContextType = "none" | "app" | "network";
export const picsContextTypes = ["none", "app", "network"];

export type PicsComplexTokenType = "lp" | "wrapped";
export const picsComplexTokenTypes = ["lp", "wrapped"];

export type PicsShowPairAppsType = true | false | "when_identical";
export const picsShowPairAppsTypes = ["when_identical", true, false];

export type PicsTopTokenType = "zero" | "one";
export const picsTopTokenTypes = ["zero", "one"];

export type PicsContextPositionType = "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
export const picsContextPositionTypes = ["topRight", "topLeft", "bottomRight", "bottomLeft"];

export type PicsShowAppForTypeType = "all" | "lp" | "wrapped";
export const picsShowAppForTypeTypes = ["all", "lp", "wrapped"];

export type PicsLpTokensPositionType = "intersected" | "intimate" | "merged";
export const picsLpTokensPositionTypes = ["intersected", "intimate", "merged"];

export type PicsShapeType = "circle" | "square" | "smoothSquare";
export const picsShapeTypes = ["circle", "square", "smoothSquare"];

export type PicsSensitivityType = "safe" | "uncategorized" | "sensitive" | "inappropriate" | "copyright-violated";
export const picsSensitivityTypes = ["safe", "uncategorized", "sensitive", "inappropriate", "copyright-violated"];
