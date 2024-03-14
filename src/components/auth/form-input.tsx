export interface InputData {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

export function Input({
  field,
  register,
  errors,
}: {
  field: InputData;
  register: any;
  errors: any;
}) {
  return (
    <div>
      <label
        htmlFor={field.id}
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        {field.label}
      </label>
      <input
        className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
        type={field.type}
        placeholder={field.placeholder}
        {...register(field.name)}
      />
      {errors[field.name]?.message && (
        <p className="text-sm text-red-400">{errors[field.name].message}</p>
      )}
    </div>
  );
}
