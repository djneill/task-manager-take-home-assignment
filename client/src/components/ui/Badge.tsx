interface BadgeProps {
  label: string;
  variant: "complete" | "pending";
}

export function Badge({ label, variant }: BadgeProps) {
  const variants = {
    complete: "bg-emerald-900 text-emerald-300 border border-emerald-700",
    pending:
      "bg-[var(--prussian-blue)] text-[var(--powder-blue)] border border-[var(--powder-blue)]",
  };

  return (
    <span
      className={`px-2 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
