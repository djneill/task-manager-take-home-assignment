interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "danger" | "ghost";
  disabled?: boolean;
  type?: "button" | "submit";
}

export function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[var(--regal-navy)] text-[var(--mint-cream)] hover:bg-[var(--oxford-navy)] border border-[var(--powder-blue)]",
    danger:
      "bg-red-800 text-[var(--mint-cream)] hover:bg-red-700 border border-red-600",
    ghost:
      "bg-transparent text-[var(--powder-blue)] hover:text-[var(--mint-cream)] border border-[var(--powder-blue)] hover:border-[var(--mint-cream)]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
