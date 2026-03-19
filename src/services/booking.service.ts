type TravelerPayload = {
  id: string;
  dateOfBirth: string;
  name: { firstName: string; lastName: string };
  gender: "MALE" | "FEMALE";
  contact: {
    emailAddress: string;
    phones: { deviceType: string; countryCallingCode: string; number: string }[];
  };
};

type SeatingPayload = {
  segmentId: string;
  travelerId: string;
  seatNumber: string;
};

export type CreateOrderPayload = {
  flightId: string;
  searchId: string;
  travelers: TravelerPayload[];
  seatings?: SeatingPayload[];
};

export type CreateOrderResponse = {
  bookingId: string;
  status: string;
  pnr?: string;
};

import { API_BASE } from "@/utils/api";

export const bookingService = {
  async createOrder(payload: CreateOrderPayload): Promise<CreateOrderResponse> {
    console.log(payload)
    const response = await fetch(`${API_BASE}/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(`Booking failed (${response.status}) ${text}`);
    }

    return response.json();
  },
};
