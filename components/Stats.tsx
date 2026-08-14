export default function Stats() {
  const resources = [
    {
      icon: "📚",
      title: "Study Notes",
      subtitle: "PDF • PPT • Handwritten Notes",
    },
    {
      icon: "💻",
      title: "Coding Examples",
      subtitle: "Python • ML • Deep Learning",
    },
    {
      icon: "📝",
      title: "Assignments",
      subtitle: "Practice • Lab Work • Mini Projects",
    },
    {
      icon: "🎥",
      title: "Video Tutorials",
      subtitle: "Lectures • Demonstrations • Workshops",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-blue-700">
            Learning Resources
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Access high-quality study materials carefully designed for
            Artificial Intelligence, Machine Learning, Deep Learning,
            Generative AI, Data Science and Python Programming.
          </p>

        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {resources.map((resource, index) => (

            <div
              key={index}
              className="bg-blue-50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
            >

              <div className="text-6xl">
                {resource.icon}
              </div>

              <h3 className="mt-5 text-2xl font-bold text-blue-700">
                {resource.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {resource.subtitle}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}