"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { isLoggedIn } from "../auth/auth";

export function useAuthGuard(
	openLoginModal: () => void,
	protectedRoutes: string[] = ["/profile"],
) {
	const pathname = usePathname();

	useEffect(() => {
		if (protectedRoutes.includes(pathname)) {
			if (!isLoggedIn()) {
				openLoginModal();
			}
		}
	}, [pathname, openLoginModal, protectedRoutes]);
}
