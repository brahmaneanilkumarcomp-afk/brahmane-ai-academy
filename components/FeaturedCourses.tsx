import CourseCard from "./CourseCard";

export default function FeaturedCourses() {
  const courses = [
    {
      icon: "🤖",
      title: "Artificial Intelligence",
      topics: [
        "Fundamentals",
        "Intelligent Agents",
        "Search Algorithms",
        "Practical Examples",
      ],
    },
    {
      icon: "📈",
      title: "Machine Learning",
      topics: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Model Evaluation",
        "Industry Datasets",
      ],
    },
    {
      icon: "🧠",
      title: "Deep Learning",
      topics: [
        "Neural Networks",
        "CNN",
        "RNN",
        "Transformers",
      ],
    },
    {
      icon: "✨",
      title: "Generative AI",
      topics: [
        "Prompt Engineering",
        "RAG",
        "Large Language Models",
        "AI Agents",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-blue-700">
            Featured Courses
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Learn the latest AI technologies through structured,
            practical and industry-oriented courses.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {courses.map((course, index) => (
            <CourseCard
              key={index}
              icon={course.icon}
              title={course.title}
              topics={course.topics}
            />
          ))}

        </div>

      </div>

    </section>
  );
}