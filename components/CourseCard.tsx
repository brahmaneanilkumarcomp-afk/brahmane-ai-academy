import Button from "./ui/Button";

interface CourseCardProps {
  icon: string;
  title: string;
  topics: string[];
}

export default function CourseCard({
  icon,
  title,
  topics,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="text-6xl text-center">
        {icon}
      </div>

      <h3 className="mt-5 text-2xl font-bold text-blue-700 text-center">
        {title}
      </h3>

      <ul className="mt-6 space-y-3 text-gray-700">

        {topics.map((topic, index) => (
          <li key={index}>
            ✔ {topic}
          </li>
        ))}

      </ul>

      <div className="mt-8 flex justify-center">
        <Button
          text="Explore Course"
          variant="secondary"
        />
      </div>

    </div>
  );
}