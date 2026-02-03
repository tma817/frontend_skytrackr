import { authHeaders, getDecodedToken } from "@/utils/auth-helpers";

const API_BASE = "http://localhost:3000/users";

export const authService = {
    isLoggedIn(): boolean {
        return !!getDecodedToken()?.sub;
    },

    async getUser() {
        const email = getDecodedToken()?.email;
        if (!email) return null;

        const res = await fetch(`${API_BASE}/${email}`, {
            headers: authHeaders(),
        });
        return res.ok ? res.json() : null;
    },

    async updateUser(updateData: any) {
        const email = getDecodedToken()?.email;
        if (!email) throw new Error("User not logged in");
        const { otpCode, otpExpires, isVerified, ...payload } = updateData;

        const res = await fetch(`${API_BASE}/${email}`, {
            method: "PATCH",
            headers: authHeaders(),
            body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Update failed");
        return res.json();
    }
};