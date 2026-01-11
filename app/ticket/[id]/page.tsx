import Link from "next/link";

type Props = {
  params: { id: string };
};

export default function TicketDetailsPage({ params }: Props) {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Ticket Details</h1>
      <p className="text-gray-600 mt-2">
        Ticket ID: {params.id} (SRS 2.8.3)
      </p>

      <div className="mt-6 flex gap-4">
        <Link href="/checkout/customer" className="underline">
          Start Booking
        </Link>
        <Link href="/search" className="underline">
          Back to Search
        </Link>
      </div>
    </main>
  );
}
