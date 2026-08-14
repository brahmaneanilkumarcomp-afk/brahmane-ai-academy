export default function ResourceBadges() {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-3">
      <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
        📘 Learning Resource
      </span>

      <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
        ✓ Available
      </span>
    </div>
  );
}