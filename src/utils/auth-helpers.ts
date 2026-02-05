import { jwtDecode } from "jwt-decode";
import { getCookie } from "cookies-next";

export type JwtPayload = {
    sub: string;
    email?: string;
    iat?: number;
    exp?: number;
};

export const getAccessToken = () => getCookie("accessToken");

export function authHeaders(): HeadersInit {
    const token = getAccessToken();
    return {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
}

export function getDecodedToken(): JwtPayload | null {
    const token = getAccessToken();
    if (!token) return null;
    try {
        return jwtDecode<JwtPayload>(token.toString());
    } catch {
        return null;
    }
}