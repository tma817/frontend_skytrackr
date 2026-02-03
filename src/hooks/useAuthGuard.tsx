"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { authService } from "@/services/auth.service";

export function useAuthGuard(
	openLoginModal: () => void,
	protectedRoutes: string[] = ["/profile"],
) {
	const pathname = usePathname();

	useEffect(() => {
		if (protectedRoutes.includes(pathname)) {
			if (!authService.isLoggedIn()) {
				openLoginModal();
			}
		}
	}, [pathname, openLoginModal, protectedRoutes]);
}
