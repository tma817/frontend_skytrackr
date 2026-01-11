import Link from "next/link";

export default function CustomerPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Customer Details</h1>
      <p className="text-gray-600 mt-2">SRS 2.8.4</p>

      <div className="mt-6">
        <Link href="/checkout/payment" className="underline">
          Continue to Payment
        </Link>
      </div>
    </main>
  );
}
