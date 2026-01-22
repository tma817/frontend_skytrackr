"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getFlightById } from "../lib/demoFlights";

type Cabin = "Economy" | "Business";

const UPGRADE_PRICE = 199;

function SeatButton({
  label,
  selected,
  disabled,
  onClick,
}: {
  label: string;
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        "h-8 w-10 rounded-md text-xs font-medium transition",
        disabled
          ? "bg-gray-100 text-gray-300 cursor-not-allowed"
          : "bg-white hover:bg-gray-50 border",
        selected
          ? "bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-600"
          : "border-gray-200 text-gray-700",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

export default function TicketDetails2Page() {
  const router = useRouter();
  const sp = useSearchParams();

  const id = sp.get("id") ?? "";
  const from = sp.get("from") ?? "YYZ";
  const to = sp.get("to") ?? "HNL";
  const date = sp.get("date") ?? "Depart - Return";
  const pax = sp.get("pax") ?? "1 adult";

  const flight = useMemo(() => {
    if (!id) return undefined;
    return getFlightById(id);
  }, [id]);

  const [selectedSeat, setSelectedSeat] = useState("8E");
  const [cabin, setCabin] = useState<Cabin>("Economy");
  const [showUpgrade, setShowUpgrade] = useState(true);

  const basePrice = flight?.price ?? 0;
  const totalPrice = cabin === "Business" ? basePrice + UPGRADE_PRICE : basePrice;

  if (!flight) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h1 className="text-xl font-semibold">Ticket not found</h1>
          <p className="mt-2 text-sm text-gray-500">id: {id || "(empty)"}</p>
          <button
            className="mt-4 rounded-lg border px-4 py-2 hover:bg-gray-50"
            onClick={() =>
              router.push(`/search?from=${from}&to=${to}&date=${date}&pax=${pax}`)
            }
          >
            Back to search
          </button>
        </div>
      </main>
    );
  }

  const backToTicketDetail = () => {
    const qs = new URLSearchParams({ from, to, date, pax });
    router.push(`/ticket/${flight.id}?${qs.toString()}`);
  };

  // ✅ 이제 customer details로 이동
  const confirmToCustomer = () => {
    const qs = new URLSearchParams({
      id: flight.id,
      seat: selectedSeat,
      cabin,
      price: String(totalPrice),
      from,
      to,
      date,
      pax,
    });
    router.push(`/checkout/customer?${qs.toString()}`);
  };

  const rows = Array.from({ length: 12 }, (_, i) => i + 1);
  const cols = ["A", "B", "C", "D", "E", "F"];
  const disabledSeats = new Set(["1C", "1D", "2C", "2D", "8C", "8D", "9C", "9D"]);

  return (
    <main className="min-h-screen bg-white">
      <div className="border-b">
        <div className="mx-auto max-w-6xl px-8 py-6">
          <div className="text-sm text-gray-700">
            <span className="font-medium text-gray-900">{from}</span> →{" "}
            <span className="font-medium text-gray-900">{to}</span>
            <span className="mx-2 text-gray-300">|</span>
            <span>{date}</span>
            <span className="mx-2 text-gray-300">|</span>
            <span>{pax}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-8 py-10">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* LEFT */}
          <div className="col-span-4 rounded-xl border p-6">
            <div className="text-sm font-semibold text-gray-900">Seat map</div>

            <div className="mt-4 rounded-lg bg-indigo-50 p-4">
              <div className="grid grid-cols-6 gap-2">
                {rows.map((r) =>
                  cols.map((c) => {
                    const seat = `${r}${c}`;
                    const isDisabled = disabledSeats.has(seat);
                    const isSelected = selectedSeat === seat;

                    return (
                      <SeatButton
                        key={seat}
                        label={seat}
                        disabled={isDisabled}
                        selected={isSelected}
                        onClick={() => setSelectedSeat(seat)}
                      />
                    );
                  })
                )}
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-600">
              Selected seat:{" "}
              <span className="font-semibold text-gray-900">{selectedSeat}</span>
            </div>
          </div>

          {/* CENTER */}
          <div className="col-span-5 rounded-xl border p-6">
            <div className="text-xs text-gray-500">Ticket</div>

            <div className="mt-1 flex items-start justify-between">
              <div>
                <div className="text-lg font-semibold text-gray-900">
                  {flight.from} → {flight.to}
                </div>
                <div className="text-sm text-gray-600">{flight.airline}</div>
              </div>

              <div className="text-right">
                <div className="text-xs text-gray-500">Price</div>
                <div className="text-xl font-semibold text-gray-900">
                  ${totalPrice.toLocaleString()}
                </div>
                {cabin === "Business" && (
                  <div className="mt-1 text-[11px] text-gray-500">
                    (Base ${basePrice} + ${UPGRADE_PRICE})
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setCabin("Economy")}
                className={[
                  "rounded-xl border p-5 text-left transition",
                  cabin === "Economy"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 hover:border-gray-300",
                ].join(" ")}
              >
                <div className="text-sm font-semibold text-gray-900">Economy</div>
                <div className="mt-1 text-xs text-gray-600">
                  Basic comfort for your flight.
                </div>
                <ul className="mt-3 space-y-1 text-xs text-gray-700 list-disc pl-4">
                  <li>Built-in entertainment</li>
                  <li>Complimentary snacks</li>
                  <li>One free carry-on</li>
                </ul>

                {cabin === "Economy" && (
                  <span className="mt-4 inline-block rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-medium text-white">
                    Selected
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setCabin("Business")}
                className={[
                  "rounded-xl border p-5 text-left transition",
                  cabin === "Business"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 hover:border-gray-300",
                ].join(" ")}
              >
                <div className="text-sm font-semibold text-gray-900">
                  Business class
                </div>
                <div className="mt-1 text-xs text-gray-600">
                  More space and premium perks.
                </div>
                <ul className="mt-3 space-y-1 text-xs text-gray-700 list-disc pl-4">
                  <li>Extended leg room</li>
                  <li>Priority boarding</li>
                  <li>Enhanced food & drink</li>
                </ul>

                {cabin === "Business" && (
                  <span className="mt-4 inline-block rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-medium text-white">
                    Selected
                  </span>
                )}
              </button>
            </div>

            <div className="mt-6 text-sm text-gray-700">
              Seat number:{" "}
              <span className="font-semibold text-gray-900">{selectedSeat}</span>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                className="rounded-lg border px-5 py-2 text-sm hover:bg-gray-50"
                onClick={backToTicketDetail}
              >
                Back
              </button>

              <button
                type="button"
                className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-600/90"
                onClick={confirmToCustomer}
              >
                Confirm
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-3">
            {showUpgrade && cabin !== "Business" && (
              <div className="rounded-xl border p-6">
                <div className="text-sm font-semibold text-gray-900">Upgrade seat</div>
                <p className="mt-2 text-xs text-gray-600">
                  Upgrade your seat for only ${UPGRADE_PRICE} and enjoy more leg
                  room, and seats that recline 40% more than economy.
                </p>

                <div className="mt-4 flex gap-3">
                  <button
                    type="button"
                    className="flex-1 rounded-lg border px-4 py-2 text-sm hover:bg-gray-50"
                    onClick={() => setShowUpgrade(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600/90"
                    onClick={() => {
                      setCabin("Business");
                      setShowUpgrade(false);
                    }}
                  >
                    Upgrade for ${UPGRADE_PRICE}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
