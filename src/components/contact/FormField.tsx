import clsx from "clsx";

type FormFieldProps = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  textarea?: boolean;
};

const fieldClass =
  "peer w-full rounded-xl border border-ink/15 bg-linen px-4 pt-6 pb-2.5 text-ink outline-none transition-colors placeholder:text-transparent focus:border-gold";

const labelClass =
  "pointer-events-none absolute top-4 left-4 origin-left text-sm text-stone transition-all duration-300 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs";

export default function FormField({ id, label, type = "text", required, autoComplete, textarea }: FormFieldProps) {
  const shared = { id, name: id, required, placeholder: label };

  return (
    <div className="relative">
      {textarea ? (
        <textarea {...shared} rows={5} className={clsx(fieldClass, "resize-none")} />
      ) : (
        <input {...shared} type={type} autoComplete={autoComplete} className={fieldClass} />
      )}
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
    </div>
  );
}
