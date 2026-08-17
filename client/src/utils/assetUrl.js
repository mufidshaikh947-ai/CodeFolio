import { API_BASE_URL } from "../constants/api";

export function getAssetUrl(value) {
    const asset = String(value || "").trim();
    if (!asset) return "";
    if (/^(https?:|data:|blob:)?\/\//i.test(asset) || /^(data:|blob:)/i.test(asset)) {
        return asset;
    }

    return `${String(API_BASE_URL || "").replace(/\/$/, "")}/${asset.replace(/^\/+/, "")}`;
}
