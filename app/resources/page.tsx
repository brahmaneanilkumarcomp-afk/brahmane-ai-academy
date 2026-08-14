import Link from "next/link";

export default function ResourcesPage() {
  const subjects = [
    {
      title: "Agentic AI & LLM Systems",
      icon: "📘",
      link: "/resources/agentic-ai",
    },
    {
  title: "Applied Machine Learning for Industry Solutions",
  icon: "🧩",
  link: "/resources/applied-machine-learning",
},
    {
      title: "Machine Learning",
      icon: "📊",
      link: "#",
    },
    {
      title: "Deep Learning",
      icon: "🧠",
      link: "#",
    },
    {
      title: "Python Programming",
      icon: "🐍",
      link: "#",
    },
    {
      title: "Data Science",
      icon: "📈",
      link: "#",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Learning Resources
      </h1>

      <p className="text-gray-600 mb-10 text-lg">
        Select a subject to access study notes, practicals,
        assignments, projects, interview questions, and learning materials.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {subjects.map((subject) => (
          <Link
            key={subject.title}
            href={subject.link}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center">

              <div className="flex items-center gap-4">

                <div className="text-4xl">
                  {subject.icon}
                </div>

                <div>

                  <h2 className="text-xl font-bold text-blue-700">
                    {subject.title}
                  </h2>

                  <p className="text-gray-500">
                    Open Learning Resources
                  </p>

                </div>

              </div>

              <span className="text-3xl text-blue-600">
                →
              </span>

            </div>

          </Link>
        ))}

      </div>

    </main>
  );
}