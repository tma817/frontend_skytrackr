"use client"
import { useForm, useFieldArray } from "react-hook-form";
import { PiUserCircleFill, PiEnvelopeSimpleFill } from "react-icons/pi";
import { useEffect } from "react";

interface PassengerFormProps {
  adultCount: number;
  onSubmit: (data: any) => void;
  initialData?: any;
}

export default function PassengerForm({ adultCount, onSubmit, initialData }: PassengerFormProps) {
  const { register, control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: initialData || {
      travelers: Array.from({ length: adultCount }, (_, i) => ({
        id: (i + 1).toString(),
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "MALE",
      })),
      contact: {
        emailAddress: "",
        countryCallingCode: "+1",
        number: ""
      }
    }
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const { fields } = useFieldArray({ control, name: "travelers" });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 border border-slate-100 rounded-[2rem] max-w-4xl mx-auto space-y-12">
      
      {/* SECTION 1: PASSENGERS */}
      <div className="space-y-6">
        <h2 className="text-xl font-black text-slate-800 flex items-center gap-3">
          <PiUserCircleFill className="text-black" size={28} />
          Passenger Information
        </h2>
        
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-1 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-3">
                Passenger {index + 1}
              </h3>
              <span className="text-[10px] font-bold bg-blue-100 text-blue-500 p-1 rounded-2xl px-2 uppercase tracking-tight">
                {index === 0 ? "Primary Contact" : "Additional Passenger"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {/* First Name */}
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-black uppercase ml-1">First Name</label>
                    <input 
                        {...register(`travelers.${index}.firstName` as const, { required: true })}
                        placeholder="e.g. JORGE"
                        className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-[11px] font-bold uppercase placeholder:font-normal placeholder:normal-case placeholder:text-slate-400"
                    />
                </div>

                {/* Last Name */}
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-black uppercase ml-1">Last Name</label>
                    <input 
                        {...register(`travelers.${index}.lastName` as const, { required: true })}
                        placeholder="e.g. GONZALES"
                        className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-[11px] font-bold uppercase placeholder:font-normal placeholder:normal-case placeholder:text-slate-400"
                    />
                </div>

                {/* Date of Birth */}
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-black uppercase ml-1">Date Of Birth</label>
                    <input
                        type="date"
                        {...register(`travelers.${index}.dateOfBirth` as const, { required: true })}
                        className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-[11px] font-bold text-slate-600"
                    />
                </div>

                {/* Gender */}
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase ml-1">
                        Gender
                    </label>
                    <div className="flex gap-1.5 border border-slate-200 rounded-xl w-fit"> 
                        {['MALE', 'FEMALE'].map((g) => (
                        <label key={g} className="cursor-pointer">
                            <input 
                            type="radio" 
                            value={g} 
                            {...register(`travelers.${index}.gender` as const)} 
                            className="hidden peer"
                            />
                            <div className="
                            px-4 py-2 text-center rounded-lg
                            peer-checked:bg-black peer-checked:text-white peer-checked:shadow-sm
                            text-slate-500 font-bold text-[11px] uppercase transition-all
                            hover:text-slate-400
                            ">
                            {g === 'MALE' ? 'MALE' : 'FEMALE'}
                            </div>
                        </label>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION 2: CONTACT */}
      <div className="space-y-4 pt-4">
        <h2 className="text-xl font-black text-slate-800 flex items-center gap-3">
          <PiEnvelopeSimpleFill className="text-black" size={28} />
          Contact Details
        </h2>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-black uppercase ml-1">Email Address</label>
            <div className="relative">
              <input 
                type="email"
                {...register("contact.emailAddress", { required: true })}
                placeholder="example@gmail.com"
                // className="w-full p-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[11px] font-bold transition-all placeholder:font-normal"
                className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-[12px] font-bold placeholder:font-normal placeholder:normal-case placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-black uppercase ml-1">Phone Number</label>
            <div className="flex gap-2">
              <input 
                {...register("contact.countryCallingCode")}
                placeholder="+1"
                className="w-14 py-2 border border-slate-200 rounded-xl text-center text-[11px] font-bold focus:border-blue-500 outline-none"
              />
              <div className="relative flex-1">
                <input 
                  {...register("contact.number", { required: true })}
                  placeholder="Phone number"
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-[12px] font-bold placeholder:font-normal placeholder:normal-case placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="pt-4 space-y-4">
        <button 
          type="submit"
          className="w-full bg-black hover:bg-slate-600 text-white py-5 rounded-2xl font-black text-sm shadow-xs shadow-blue-100 transition-all active:scale-[0.98] uppercase tracking-[0.1em]"
        >
          Confirm & Select Seats
        </button>
        <p className="text-center text-[10px] text-slate-400 font-medium px-10 leading-relaxed uppercase tracking-tighter">
          Please ensure information matches your official travel documents.
        </p>
      </div>
    </form>
  );
}