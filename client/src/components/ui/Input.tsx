interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
}

export function Input({
  value,
  onChange,
  placeholder,
  onKeyDown,
  autoFocus,
}: InputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      autoFocus={autoFocus}
      className="w-full px-3 py-2 rounded-md text-sm bg-[var(--oxford-navy)] text-[var(--mint-cream)] placeholder-[var(--powder-blue)] border border-[var(--powder-blue)] focus:outline-none focus:border-[var(--mint-cream)] transition-colors duration-150"
    />
  );
}
