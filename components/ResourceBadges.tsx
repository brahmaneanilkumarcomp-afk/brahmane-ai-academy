export default function ResourceBadges() {
  return (

    <div className="flex flex-wrap gap-3 mt-6">

      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
        📄 PDF
      </span>

      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
        📊 PPT
      </span>

      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
        📝 Notes
      </span>

    </div>

  );
}