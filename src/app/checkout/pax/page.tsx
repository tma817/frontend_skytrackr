"use client"
import { useSearchParams } from "next/navigation";
import PassengerForm from "@/components/PassengerForm";
import BookingSummary from "@/components/BookingSummary";
import { useRouter } from "next/navigation";
import { useBookingStore } from "@/store/useBookingStore";

export default function BookingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const paxCount = Number(searchParams.get("pax")) || 1;
  console.log(paxCount)
  
  const setTravelersInfo = useBookingStore((state) => state.setTravelersInfo);
  const { travelers, contact } = useBookingStore();
  const existingData = travelers.length > 0 ? {
    travelers: travelers,
    contact: contact
  } : undefined;
  const handlePassengerSubmit = (data: any) => {
    setTravelersInfo(data.travelers, data.contact);
    const searchId = searchParams.get("searchId")
    const flightId = searchParams.get("flightId")

    router.push(`/checkout/seat?searchId=${searchId}&pax=${paxCount}&flightId=${flightId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-12 gap-8">
        
        <div className="col-span-12 lg:col-span-8 border rounded-2xl">          
          <PassengerForm 
            adultCount={paxCount}
            onSubmit={handlePassengerSubmit} 
            initialData={existingData}
          />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="sticky top-8">
             <BookingSummary /> 
          </div>
        </div>

      </div>
    </div>
  );
}