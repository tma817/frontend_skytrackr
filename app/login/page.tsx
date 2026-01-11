export default function LoginPage() {
	return (
		<div className="w-2/5 flex align-middle justify-center px-15 py-20 items-start bg-white">
			<div className="relative">
				<div className="font-bold text-5xl text-center">Log In</div>

				<div className="w-[600px] h-80 top-36 left-0 flex flex-col">
					<div className="ml-px w-[600.86px] h-[82.25px] flex flex-col gap-[9.5px]">
						<label className="flex items-center justify-center ml-0 w-[130.93px] h-[20.78px] mt-0 font-semi-bold-16px font-(--semi-bold-16px-font-weight) text-base-02 text-(length:--semi-bold-16px-font-size) tracking-[var(--semi-bold-16px-letter-spacing)] leading-[var(--semi-bold-16px-line-height)] whitespace-nowrap [font-style:var(--semi-bold-16px-font-style)]">
							Email address
						</label>

						<input className="ml-0 w-[598.86px] h-[51.95px] bg-blue-gray50 rounded-xl border border-solid border-blue-gray300" />
					</div>

					<div className="w-[600.86px] h-[82.25px] mt-[60.7px] flex flex-col gap-[9.5px]">
						<label className="flex items-center justify-center ml-0 w-[88.8px] h-[20.78px] mt-0 font-semi-bold-16px font-[number:var(--semi-bold-16px-font-weight)] text-base-02 text-[length:var(--semi-bold-16px-font-size)] tracking-[var(--semi-bold-16px-letter-spacing)] leading-[var(--semi-bold-16px-line-height)] whitespace-nowrap [font-style:var(--semi-bold-16px-font-style)]">
							Password
						</label>

						<input className="ml-0 w-[598.86px] h-[51.95px] bg-blue-gray50 rounded-xl border border-solid border-blue-gray300" />
					</div>

					<div className="w-150.5 mt-[75.8px] flex gap-[303.1px]">
						<div className="mt-0 w-[153.43px] ml-0 flex gap-[10.2px]">
							<input
								type="checkbox"
								className="mt-[0.9px] w-[21.63px] h-[16.45px] ml-0 rounded-[5px] border border-solid border-blue-gray400"
							/>

							<label className="mt-0 w-[119.54px] h-[19.05px] font-regular-13px font-[number:var(--regular-13px-font-weight)] text-gray-900 text-[length:var(--regular-13px-font-size)] tracking-[var(--regular-13px-letter-spacing)] leading-[var(--regular-13px-line-height)] whitespace-nowrap [font-style:var(--regular-13px-font-style)]">
								Remember me
							</label>
						</div>

						<a className="cursor-pointer">Forgot password?</a>
					</div>
				</div>

				<button className="flex flex-col place-self-center w-45.5 h-12 items-center justify-center cursor-pointer p-4 bg-blue-600 rounded-[9px]">
					<div className="">
						Log In
					</div>
				</button>

				<div className="flex-1 flex-col justify-between">
					<p className="">Don&#39;t have an account?</p>
					<a className="">Create free account</a>
				</div>
			</div>
		</div>
	);
}
