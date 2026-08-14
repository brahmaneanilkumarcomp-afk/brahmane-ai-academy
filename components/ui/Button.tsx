interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`px-8 py-3 rounded-xl font-semibold transition duration-300 ${
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
      }`}
    >
      {text}
    </button>
  );
}