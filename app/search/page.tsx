import Link from "next/link";

export default function SearchPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Search Page</h1>
      <p className="text-gray-600 mt-2">SRS 2.8.2</p>

      <div className="mt-6">
        <Link href="/ticket/123" className="underline">
          Go to Ticket Details (demo)
        </Link>
      </div>
    </main>
  );
}
