type EditFieldType = "text" | "email" | "select";

type SelectOption = string | { value: string; option: string };

type EditFieldProps = {
	label: string;
	value: string;
	isEditing: boolean;
	onChange?: (value: string) => void;
	type?: EditFieldType;
	options?: SelectOption[];
};

export default function EditField({
	label,
	value,
	isEditing,
	onChange,
	type = "text",
	options = [],
}: EditFieldProps) {
	return (
		<div className="w-full">
			<label className="block mb-1 text-sm text-gray-500">{label}</label>

			<div
				className={`
          relative h-[48px] px-4 rounded-lg flex items-center
          transition-colors duration-150
          ${
						isEditing
							? "bg-white border-2 border-indigo-300 ring-1 ring-indigo-200/30 shadow-sm"
							: "bg-gray-100 border border-gray-200"
					}
        `}
			>
				{isEditing ? (
					type === "select" ? (
						<>
							<select
								value={value}
								onChange={(e) => onChange?.(e.target.value)}
								className="
                  w-full bg-transparent text-sm text-gray-800
                  outline-none appearance-none
                  leading-[1.25rem]
                  cursor-pointer
                "
							>
								<option value="" disabled hidden>
									Select…
								</option>
								{options.map((opt, idx) => {
									const optionValue = typeof opt === "string" ? opt : opt.value;
									const optionLabel =
										typeof opt === "string" ? opt : opt.option;

									return (
										<option key={idx} value={optionValue}>
											{optionLabel}
										</option>
									);
								})}
							</select>

							<span className="pointer-events-none absolute right-4 text-gray-400">
								▾
							</span>
						</>
					) : (
						<input
							type={type}
							value={value}
							onChange={(e) => onChange?.(e.target.value)}
							className="
    w-full bg-transparent text-sm text-gray-800
    outline-none
    leading-[1.25rem]
    cursor-text
  "
							autoFocus
						/>
					)
				) : (
					<span className="text-sm text-gray-700 leading-[1.25rem]">
						{value}
					</span>
				)}
			</div>
		</div>
	);
}
