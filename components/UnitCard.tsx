import Link from "next/link";
import ResourceBadges from "./ResourceBadges";

type UnitCardProps = {
  unit: string;
  title: string;
  description: string;
  topics: string[];
  duration: string;
  difficulty: string;
  href: string;
};

export default function UnitCard({
  unit,
  title,
  description,
  topics,
  duration,
  difficulty,
  href,
}: UnitCardProps) {

  return (

    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition">

      <div className="flex justify-between items-start">

        <div className="flex-1">

          <p className="text-blue-600 font-semibold uppercase">
            {unit}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {title}
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            {description}
          </p>

          <div className="mt-6">

            <h3 className="font-semibold mb-3">
              Topics Covered
            </h3>

            <ul className="grid md:grid-cols-2 gap-2">

              {topics.map((topic) => (

                <li key={topic}>
                  ✓ {topic}
                </li>

              ))}

            </ul>

          </div>

          <div className="flex gap-8 mt-8">

            <div>

              <p className="text-sm text-gray-500">
                Duration
              </p>

              <p className="font-bold">
                {duration}
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Difficulty
              </p>

              <p className="font-bold">
                {difficulty}
              </p>

            </div>

          </div>

          <ResourceBadges />

        </div>

        <div className="ml-8">

          <Link
            href={href}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            Open Unit →
          </Link>

        </div>

      </div>

    </div>

  );
}