"use client"
import { useForm, useFieldArray } from "react-hook-form";
import { useEffect, useState } from "react";
import { getDecodedToken } from "@/utils/auth-helpers";

interface PassengerFormProps {
  adultCount: number;
  onSubmit: (data: any) => void;
  initialData?: any;
}

export default function PassengerForm({ adultCount, onSubmit, initialData }: PassengerFormProps) {
  const [useAccountEmail, setUseAccountEmail] = useState(false);

  const { register, control, handleSubmit, reset, setValue  } = useForm({
    defaultValues: initialData || {
      travelers: Array.from({ length: adultCount }, (_, i) => ({
        id: (i + 1).toString(),
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "MALE",
      })),
      contact: { emailAddress: "", countryCallingCode: "+1", number: "" },
    },
  });

  const accountEmail = getDecodedToken()?.email ?? null;


  function handleUseAccountEmail(checked: boolean) {
    setUseAccountEmail(checked);
    if (checked && accountEmail) {
      setValue("contact.emailAddress", accountEmail);
    } else {
      setValue("contact.emailAddress", "");
    }
  }

  useEffect(() => {
    if (initialData) reset(initialData);
  }, [initialData, reset]);

  const { fields } = useFieldArray({ control, name: "travelers" });

  const inputCls = "w-full border rounded-xl p-3 bg-transparent text-sm text-gray-900 placeholder:text-gray-300 focus:border-sky-400 focus:outline-none transition-colors duration-200";
  const labelCls = "block text-[10px] font-bold uppercase tracking-[0.18em] mb-2 group-focus-within:text-sky-500 transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 p-10 font-sans bg-white rounded-2xl">

      {/* ── Passengers ── */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-black tracking-tight  text-gray-900 uppercase leading-none">Passenger Information</h2>
          <p className="text-xs text-gray-400 mt-1">Must match official travel documents exactly</p>
        </div>

        {fields.map((field, index) => (
          <div key={field.id}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[16px] font-bold uppercase">
                Passenger {index + 1}
              </span>
              {index === 0 && (
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white bg-black border px-2 py-0.5 rounded-full">
                  Primary
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="group">
                <label className={labelCls}>First Name</label>
                <input
                  {...register(`travelers.${index}.firstName` as const, { required: true })}
                  placeholder="First Name"
                  className={inputCls + " uppercase"}
                />
              </div>

              <div className="group">
                <label className={labelCls}>Last Name</label>
                <input
                  {...register(`travelers.${index}.lastName` as const, { required: true })}
                  placeholder="Last Name"
                  className={inputCls + " uppercase"}
                />
              </div>

              <div className="group">
                <label className={labelCls}>Date of Birth</label>
                <input
                  type="date"
                  {...register(`travelers.${index}.dateOfBirth` as const, { required: true })}
                  className={inputCls}
                />
              </div>

              <div className="group">
                <label className={labelCls}>Gender</label>
                <div className="flex gap-2">
                  {["MALE", "FEMALE"].map((g) => (
                    <label key={g} className="flex-1 cursor-pointer">
                      <input
                        type="radio"
                        value={g}
                        {...register(`travelers.${index}.gender` as const)}
                        className="hidden peer"
                      />
                      <div className="w-full py-3 text-center rounded-xl border text-xs font-bold uppercase tracking-[0.12em] text-gray-400 transition-all duration-200 peer-checked:border-black peer-checked:bg-black peer-checked:text-white hover:border-gray-300">
                        {g === "MALE" ? "Male" : "Female"}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {index < fields.length - 1 && (
              <div className="mt-8 border-t border-gray-100" />
            )}
          </div>
        ))}
      </div>



      {/* ── Contact ── */}
      <div className="space-y-5">
        <div>
          <h2 className="text-2xl font-black tracking-tight  text-gray-900 uppercase leading-none">Contact Details</h2>
          <p className="text-xs text-gray-400 mt-1">Booking confirmation will be sent here</p>
        </div>


		<div className="group">
          <div className="flex items-center justify-between mb-2">
            <label className={labelCls + " mb-0"}>Email Address</label>
            {accountEmail && (
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={useAccountEmail}
                  onChange={(e) => handleUseAccountEmail(e.target.checked)}
                  className="hidden peer"
                />
                <div className="h-4 w-4 rounded border-2 border-gray-300 peer-checked:border-black peer-checked:bg-black transition-all duration-150 flex items-center justify-center">
                  {useAccountEmail && (
                    <svg className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Use account email
                </span>
              </label>
            )}
          </div>
          <input
            type="email"
            {...register("contact.emailAddress", { required: true })}
            placeholder="you@example.com"
            disabled={useAccountEmail}
            className={inputCls + (useAccountEmail ? " opacity-60 cursor-not-allowed bg-gray-50" : "")}
          />
        </div>

        <div className="group">
          <label className={labelCls}>Phone Number</label>
          <div className="flex gap-2">
            <input
              {...register("contact.countryCallingCode")}
              placeholder="+1"
              className="w-16 border rounded-xl p-3 bg-transparent text-sm text-center text-gray-900 placeholder:text-gray-300 focus:border-sky-400 focus:outline-none transition-colors duration-200"
            />
            <input
              {...register("contact.number", { required: true })}
              placeholder="Phone number"
              className={inputCls + " flex-1"}
            />
          </div>
        </div>
      </div>

      {/* ── Submit ── */}
      <div className="space-y-3">
        <button
          type="submit"
          className="w-full flex items-center justify-center rounded-xl bg-black py-3.5 text-sm font-bold text-white hover:bg-zinc-800 active:scale-[0.99] transition-all duration-150"
        >
          Continue to Seat Selection
        </button>
        <p className="text-center text-xs text-gray-400">
          Ensure all details match your official travel documents
        </p>
      </div>
    </form>
  );
}
