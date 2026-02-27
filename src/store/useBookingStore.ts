import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BookingStore {
  selectedFlight: any | null;

  travelers: any[];
  contact: any;
  
  selectedSeats: Record<string, any>;

  setFlight: (flight: any) => void;
  setTravelersInfo: (travelers: any[], contact: any) => void;
  updateSeatSelection: (travelerId: string, seat: any) => void;
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

        updateSeatSelection: (travelerId, seat) => set((state) => ({
            selectedSeats: { 
                ...state.selectedSeats, 
                [travelerId]: seat 
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