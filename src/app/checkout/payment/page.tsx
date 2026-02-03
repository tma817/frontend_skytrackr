import Link from "next/link";

export default function PaymentPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Payment Page</h1>
      <p className="text-gray-600 mt-2">SRS 2.8.5</p>

      <div className="mt-6">
        <Link href="/" className="underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
