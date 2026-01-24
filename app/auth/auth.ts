import { jwtDecode } from "jwt-decode";
import { getCookie } from "cookies-next";

export type JwtPayload = {
  sub: string;
  iat?: number;
  exp?: number;
  [key: string]: any;
};


export function getUserId(): string | null {
  try {
    const token = getCookie("accessToken");
    if (!token) return null;

    const decoded = jwtDecode<JwtPayload>(token.toString());
    return decoded.sub ?? null;
  } catch (err) {
    console.error("Failed to get userId from token:", err);
    return null;
  }
}


export function isLoggedIn(): boolean {
  return !!getUserId();
}
