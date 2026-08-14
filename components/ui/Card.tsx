interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl bg-white shadow-lg p-6 hover:shadow-xl transition">
      {children}
    </div>
  );
}