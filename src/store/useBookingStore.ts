import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ConfirmedPrice = {
  id: string;
  confirmed: boolean;
  price: {
    grandTotal: number;
    base: number;
    taxTotal: number;
    currency: string;
    taxes: { code: string; amount: number }[];
    fees: { type: string; amount: number }[];
  };
  travelerPricings: {
    travelerId: string;
    travelerType: string;
    fareOption: string;
    cabin: string;
    fareBasis?: string;
    price: { base: number; total: number; currency: string };
    includedCheckedBags: { quantity: number } | null;
  }[];
};

interface BookingStore {
  selectedFlight: any | null;
  confirmedPrice: ConfirmedPrice | null;
  travelers: any[];
  contact: any;
  selectedSeats: Record<string, Record<string, any>>;

  setFlight: (flight: any) => void;
  setConfirmedPrice: (price: ConfirmedPrice | null) => void;
  setTravelersInfo: (travelers: any[], contact: any) => void;
  updateSeatSelection: (segmentId: string, travelerId: string, seat: any) => void;
  clearBooking: () => void;
}

export const useBookingStore = create<BookingStore>()(
  persist(
    (set) => ({
      selectedFlight: null,
      confirmedPrice: null,
      travelers: [],
      contact: null,
      selectedSeats: {},

      setFlight: (flight) => set({
        selectedFlight: flight,
        confirmedPrice: null,
        travelers: [],
        contact: null,
        selectedSeats: {},
      }),

      setConfirmedPrice: (price) => set({ confirmedPrice: price }),

      setTravelersInfo: (travelers, contact) => set({ travelers, contact }),

      updateSeatSelection: (segmentId, travelerId, seat) => set((state) => ({
        selectedSeats: {
          ...state.selectedSeats,
          [segmentId]: {
            ...(state.selectedSeats[segmentId] || {}),
            [travelerId]: seat,
          },
        },
      })),

      clearBooking: () => set({
        selectedFlight: null,
        confirmedPrice: null,
        travelers: [],
        contact: null,
        selectedSeats: {},
      }),
    }),
    { name: 'booking-storage' }
  )
);
