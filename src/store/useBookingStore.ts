import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BookingStore {
  selectedFlight: any | null;
  travelers: any[];
  contact: any;
  
  selectedSeats: Record<string, Record<string, any>>;

  setFlight: (flight: any) => void;
  setTravelersInfo: (travelers: any[], contact: any) => void;
  updateSeatSelection: (segmentId: string, travelerId: string, seat: any) => void;
  clearBooking: () => void;
}

export const useBookingStore = create<BookingStore>()(
  persist(
    (set) => ({
        selectedFlight: null,
        travelers: [],
        contact: null,
        selectedSeats: {},

        setFlight: (flight) => set({ 
            selectedFlight: flight,
            travelers: [],
            contact: null,
            selectedSeats: {} 
        }),

        setTravelersInfo: (travelers, contact) => set({ 
            travelers, 
            contact 
        }),

        updateSeatSelection: (segmentId, travelerId, seat) => set((state) => ({
            selectedSeats: { 
                ...state.selectedSeats, 
                [segmentId]: {
                    ...(state.selectedSeats[segmentId] || {}),
                    [travelerId]: seat 
                }
            }
        })),

        clearBooking: () => set({ 
            selectedFlight: null, 
            travelers: [], 
            contact: null, 
            selectedSeats: {} 
        }),
    }),
    {
      name: 'booking-storage',
    }
  )
);