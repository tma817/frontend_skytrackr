import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const protectedRoutes = ["/profile"];

	const isProtected = protectedRoutes.some((path) =>
		req.nextUrl.pathname.startsWith(path)
	);

	const token = req.cookies.get("accessToken");

	if (isProtected && !token) {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/profile/:path*"],
};
