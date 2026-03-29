"use client"
import { useSearchParams, useRouter } from "next/navigation";
import PassengerForm from "@/components/PassengerForm";
import BookingSummary from "@/components/BookingSummary";
import { useBookingStore } from "@/store/useBookingStore";

export default function BookingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const paxCount = Number(searchParams.get("pax")) || 1;

  const setTravelersInfo = useBookingStore((state) => state.setTravelersInfo);
  const { travelers, contact } = useBookingStore();

  const existingData =
    travelers.length > 0
      ? { travelers, contact }
      : undefined;

  const handlePassengerSubmit = (data: any) => {
    setTravelersInfo(data.travelers, data.contact);

    const searchId = searchParams.get("searchId");
    const flightId = searchParams.get("flightId");

    router.push(
      `/checkout/seat?searchId=${searchId}&pax=${paxCount}&flightId=${flightId}`
    );
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        
        {/* Passenger Form */}
        <div className="lg:col-span-8 border rounded-2xl p-4 sm:p-6 bg-white">
          <PassengerForm
            adultCount={paxCount}
            onSubmit={handlePassengerSubmit}
            initialData={existingData}
          />
        </div>

        {/* Booking Summary */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-8 space-y-4">
            <BookingSummary />
          </div>
        </div>

      </div>
    </div>
  );
}