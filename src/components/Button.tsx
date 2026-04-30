interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({
  label,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const base =
    "px-4 py-2 rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? `${base} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`
      : `${base} bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400`;

  return (
    <button className={styles} onClick={onClick} type="button">
      {label}
    </button>
  );
}
