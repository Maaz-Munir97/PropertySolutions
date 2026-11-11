import clsx from "clsx";

type InterestPickerProps = {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
};

export default function InterestPicker({ options, value, onChange }: InterestPickerProps) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-ink">I&apos;m interested in</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option}
            className={clsx(
              "cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors duration-300 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold",
              value === option ? "border-ink bg-ink text-linen" : "border-ink/15 text-ink/75 hover:border-ink/40",
            )}
          >
            <input
              type="radio"
              name="interest"
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="sr-only"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
