"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Passenger = {
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  dob: string; // MM/DD/YY
  email: string;
  phone: string;
  redressNumber: string;
  knownTravelerNumber: string;
};

type EmergencyContact = {
  sameAsPassenger: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export default function CustomerPage() {
  const router = useRouter();
  const sp = useSearchParams();

  // ticket-details2에서 넘어온 query 유지
  const preservedQuery = useMemo(() => {
    const q = new URLSearchParams(sp.toString());
    return q.toString();
  }, [sp]);

  const [passenger, setPassenger] = useState<Passenger>({
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    dob: "",
    email: "",
    phone: "",
    redressNumber: "",
    knownTravelerNumber: "",
  });

  const [emergency, setEmergency] = useState<EmergencyContact>({
    sameAsPassenger: false,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [checkedBags, setCheckedBags] = useState<number>(1);

  // ✅ Bag info 표시용 이름 (띄어쓰기 포함)
  const passengerFullName = useMemo(() => {
    const fn = passenger.firstName.trim();
    const ln = passenger.lastName.trim();
    const full = [fn, ln].filter(Boolean).join(" ");
    return full.length ? full : "First Last";
  }, [passenger.firstName, passenger.lastName]);

  // Same as Passenger 1 체크 시 자동 채우기
  useEffect(() => {
    if (!emergency.sameAsPassenger) return;

    setEmergency((prev) => ({
      ...prev,
      firstName: passenger.firstName,
      lastName: passenger.lastName,
      email: passenger.email,
      phone: passenger.phone,
    }));
  }, [
    emergency.sameAsPassenger,
    passenger.firstName,
    passenger.lastName,
    passenger.email,
    passenger.phone,
  ]);

  const inputBase =
    "w-full rounded-md border border-[#B7C5FF] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#B7C5FF]";
  const labelBase = "text-xs text-[#7A86A7]";

  const onContinue = () => {
    // required 체크 (별표 있는 것만)
    if (
      !passenger.firstName ||
      !passenger.lastName ||
      !passenger.dob ||
      !passenger.email ||
      !passenger.phone
    ) {
      alert("Please fill in all required Passenger 1 fields.");
      return;
    }

    // known traveler number은 UI상 별표지만 실제론 회사마다 다름 → 과제 요구대로 별표니까 체크
    if (!passenger.knownTravelerNumber) {
      alert("Please fill in Known traveller number.");
      return;
    }

    if (!emergency.sameAsPassenger) {
      if (
        !emergency.firstName ||
        !emergency.lastName ||
        !emergency.email ||
        !emergency.phone
      ) {
        alert("Please fill in all required Emergency Contact fields.");
        return;
      }
    }

    const payload = {
      passenger,
      emergency: emergency.sameAsPassenger
        ? {
            sameAsPassenger: true,
            firstName: passenger.firstName,
            lastName: passenger.lastName,
            email: passenger.email,
            phone: passenger.phone,
          }
        : emergency,
      checkedBags,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem("skytrackr_checkout_customer", JSON.stringify(payload));

    const url = preservedQuery
      ? `/checkout/payment?${preservedQuery}`
      : "/checkout/payment";

    router.push(url);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-2xl font-semibold">Passenger information</h1>
        <p className="mt-2 max-w-2xl text-sm text-[#7A86A7]">
          Enter the required information for each traveler and be sure that it
          exactly matches the government-issued ID presented at the airport.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <h2 className="text-sm font-semibold text-[#1B1F2A]">
              Passenger 1 (Adult)
            </h2>

            {/* row 1 */}
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <div className={labelBase}>First name*</div>
                <input
                  className={inputBase}
                  value={passenger.firstName}
                  onChange={(e) =>
                    setPassenger((p) => ({ ...p, firstName: e.target.value }))
                  }
                  placeholder="First name*"
                />
              </div>
              <div>
                <div className={labelBase}>Middle (Optional)</div>
                <input
                  className={inputBase}
                  value={passenger.middleName}
                  onChange={(e) =>
                    setPassenger((p) => ({ ...p, middleName: e.target.value }))
                  }
                  placeholder="Middle (Optional)"
                />
              </div>
              <div>
                <div className={labelBase}>Last name*</div>
                <input
                  className={inputBase}
                  value={passenger.lastName}
                  onChange={(e) =>
                    setPassenger((p) => ({ ...p, lastName: e.target.value }))
                  }
                  placeholder="Last name*"
                />
              </div>
            </div>

            {/* row 2 */}
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <div className={labelBase}>Suffix</div>
                <input
                  className={inputBase}
                  value={passenger.suffix}
                  onChange={(e) =>
                    setPassenger((p) => ({ ...p, suffix: e.target.value }))
                  }
                  placeholder="Suffix"
                />
              </div>
              <div>
                <div className={labelBase}>Date of birth*</div>
                <input
                  className={inputBase}
                  value={passenger.dob}
                  onChange={(e) =>
                    setPassenger((p) => ({ ...p, dob: e.target.value }))
                  }
                  placeholder="MM/DD/YY"
                />
              </div>
            </div>

            {/* row 3 */}
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <div className={labelBase}>Email address*</div>
                <input
                  className={inputBase}
                  value={passenger.email}
                  onChange={(e) =>
                    setPassenger((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="Email address*"
                />
              </div>
              <div>
                <div className={labelBase}>Phone number*</div>
                <input
                  className={inputBase}
                  value={passenger.phone}
                  onChange={(e) =>
                    setPassenger((p) => ({ ...p, phone: e.target.value }))
                  }
                  placeholder="Phone number*"
                />
              </div>
            </div>

            {/* row 4 */}
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <div className={labelBase}>Redress number</div>
                <input
                  className={inputBase}
                  value={passenger.redressNumber}
                  onChange={(e) =>
                    setPassenger((p) => ({
                      ...p,
                      redressNumber: e.target.value,
                    }))
                  }
                  placeholder="Redress number"
                />
              </div>
              <div>
                <div className={labelBase}>Known traveller number*</div>
                <input
                  className={inputBase}
                  value={passenger.knownTravelerNumber}
                  onChange={(e) =>
                    setPassenger((p) => ({
                      ...p,
                      knownTravelerNumber: e.target.value,
                    }))
                  }
                  placeholder="Known traveller number*"
                />
              </div>
            </div>

            {/* emergency */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#1B1F2A]">
                  Emergency contact information
                </h3>

                <label className="flex cursor-pointer items-center gap-2 text-sm text-[#7A86A7]">
                  <input
                    type="checkbox"
                    checked={emergency.sameAsPassenger}
                    onChange={(e) =>
                      setEmergency((c) => ({
                        ...c,
                        sameAsPassenger: e.target.checked,
                      }))
                    }
                  />
                  Same as Passenger 1
                </label>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <div className={labelBase}>First name*</div>
                  <input
                    className={inputBase}
                    value={emergency.firstName}
                    onChange={(e) =>
                      setEmergency((c) => ({ ...c, firstName: e.target.value }))
                    }
                    placeholder="First name*"
                    disabled={emergency.sameAsPassenger}
                  />
                </div>
                <div>
                  <div className={labelBase}>Last name*</div>
                  <input
                    className={inputBase}
                    value={emergency.lastName}
                    onChange={(e) =>
                      setEmergency((c) => ({ ...c, lastName: e.target.value }))
                    }
                    placeholder="Last name*"
                    disabled={emergency.sameAsPassenger}
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <div className={labelBase}>Email address*</div>
                  <input
                    className={inputBase}
                    value={emergency.email}
                    onChange={(e) =>
                      setEmergency((c) => ({ ...c, email: e.target.value }))
                    }
                    placeholder="Email address*"
                    disabled={emergency.sameAsPassenger}
                  />
                </div>
                <div>
                  <div className={labelBase}>Phone number*</div>
                  <input
                    className={inputBase}
                    value={emergency.phone}
                    onChange={(e) =>
                      setEmergency((c) => ({ ...c, phone: e.target.value }))
                    }
                    placeholder="Phone number*"
                    disabled={emergency.sameAsPassenger}
                  />
                </div>
              </div>
            </div>

            {/* bags */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-[#1B1F2A]">
                Bag information
              </h3>
              <p className="mt-2 text-sm text-[#7A86A7]">
                Each passenger is allowed one free carry-on bag and one personal
                item. First checked bag for each passenger is also free. Second
                bag check fees are waived for loyalty program members. See the
                full bag policy.
              </p>

              <div className="mt-4 flex items-center justify-between border-t pt-4">
                <div className="text-sm text-[#7A86A7]">
                  <div className="font-semibold text-[#1B1F2A]">
                    Passenger 1
                  </div>
                  {/* ✅ 여기만 변경 */}
                  <div>{passengerFullName}</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-sm font-semibold text-[#1B1F2A]">
                    Checked bags
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      className="h-9 w-9 rounded-md border border-[#B7C5FF] text-lg"
                      onClick={() => setCheckedBags((n) => Math.max(0, n - 1))}
                      type="button"
                    >
                      –
                    </button>
                    <div className="min-w-[24px] text-center text-sm">
                      {checkedBags}
                    </div>
                    <button
                      className="h-9 w-9 rounded-md border border-[#B7C5FF] text-lg"
                      onClick={() => setCheckedBags((n) => Math.min(9, n + 1))}
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* actions */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white"
                onClick={onContinue}
                type="button"
              >
                Continue to payment
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <div className="relative h-[320px] w-[420px]">
              <Image
                src="/images/luggage.png"
                alt="Luggage"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-8 text-xs text-[#7A86A7]">
          *Dimensions include handles and wheels
        </div>
      </div>
    </main>
  );
}
