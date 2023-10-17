export type PicsType = "token" | "profile" | "banner" | "node" | "network" | "app";
export const picsTypes = ["token", "profile", "banner", "node", "network", "app"];

export type PicsTokenType = "token" | "lp" | "wrapped" | "currency";
export const picsTokenTypes = ["token", "lp", "wrapped", "currency"];

export type PicsContextType = "none" | "app" | "network";
export const picsContextTypes = ["none", "app", "network"];

export type PicsContextPositionType = "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
export const picsContextPositionTypes = ["topRight", "topLeft", "bottomRight", "bottomLeft"];

export type PicsShapeType = "circle" | "square" | "smoothSquare";
export const picsShapeTypes = ["circle", "square", "smoothSquare"];

export type PicsSensitivityType = "safe" | "sensitive" | "inappropriate" | "copyright-violated";
export const picsSensitivityTypes = ["safe", "sensitive", "inappropriate", "copyright-violated"];
