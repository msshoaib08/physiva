interface FormFieldProps {
	label: string;
	id: string;
	type: string;
	value: string | number;
	setValue: (value: string | number) => void;
	description?: string;
}

const FormField: React.FC<FormFieldProps> = ({
	label,
	id,
	type,
	value,
	setValue,
	description,
}) => (
	<div>
		<label htmlFor={id} className="block text-heading font-medium">
			{label}
		</label>
		<input
			type={type}
			id={id}
			className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
			value={value}
			onChange={(e) => setValue(e.target.value)}
			required
		/>
		{description && <p className="text-sm text-heading mt-1">{description}</p>}
	</div>
);

export default FormField;
