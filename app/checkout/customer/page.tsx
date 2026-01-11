import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">SkyTrackR</h1>
      <p className="mt-2 text-gray-600">Home Page (SRS 2.8.1)</p>

      <div className="mt-6 flex gap-4">
        <Link className="underline" href="/search">
          Go to Search
        </Link>
        <Link className="underline" href="/ticket/123">
          Go to Ticket Details (demo)
        </Link>
      </div>
    </main>
  );
}
