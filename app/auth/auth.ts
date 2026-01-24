import { jwtDecode } from "jwt-decode";
import { getCookie } from "cookies-next";

export type JwtPayload = {
	sub: string;
	iat?: number;
	exp?: number;
	[key: string]: any;
};

const API_BASE = "http://localhost:3000/users";

export function authHeaders(): HeadersInit {
	const token = getCookie("accessToken");

	return {
		"Content-Type": "application/json",
		...(typeof token === "string" && token
			? { Authorization: `Bearer ${token}` }
			: {}),
	};
}

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

export function getUserEmail(): string | null {
	try {
		const token = getCookie("accessToken");
		if (!token) return null;

		const decoded = jwtDecode<JwtPayload>(token.toString());
		return decoded.email ?? null;
	} catch (err) {
		console.error("Failed to get user email from token:", err);
		return null;
	}
}

export function isLoggedIn(): boolean {
	return !!getUserId();
}

export async function getUser(): Promise<any | null> {
  const email = getUserEmail();
  if (!email) return null;

  try {
    const res = await fetch(`${API_BASE}/${email}`, {
      headers: authHeaders(),
    });

    if (!res.ok) throw new Error("Failed to fetch user");

    return res.json();
  } catch (err) {
    console.error("Error fetching user:", err);
    return null;
  }
}

export async function updateUser(
	updateData: Partial<Record<string, any>>,
): Promise<any> {
	const email = getUserEmail();
	if (!email) throw new Error("User not logged in");
	delete updateData.otpCode;
	delete updateData.otpExpires;
	delete updateData.isVerified;

	const res = await fetch(`${API_BASE}/${email}`, {
		method: "PATCH",
		headers: authHeaders(),
		body: JSON.stringify(updateData),
	});

	if (!res.ok) {
		const text = await res.text();
		throw new Error(`Failed to update user: ${text}`);
	}

	return res.json();
}
