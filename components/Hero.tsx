import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-purple-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side */}
          <div className="max-w-xl">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-6">
              Empowering AI Learners
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-700 leading-tight">
  Learn Artificial Intelligence
  <br />
  Build Real-World Skills
</h1>
            <p className="mt-6 text-lg text-gray-700 leading-9">
              Learn Artificial Intelligence, Machine Learning, Deep Learning,
              Generative AI, Agentic AI, Data Science, Python and Industry
              Projects through high-quality notes, videos, assignments and
              real-world examples.
            </p>

            <div className="mt-10 flex gap-5">
              <Button text="Start Learning" />
              <Button text="Browse Courses" variant="secondary" />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="w-96 h-96 rounded-3xl bg-white shadow-2xl flex items-center justify-center">
              <div className="text-center">

                <Image
                  src="/images/logo/brahmane-ai-logo.png"
                  alt="Brahmane AI Academy Logo"
                  width={120}
                  height={120}
                  className="mx-auto"
                />

                <h2 className="mt-5 text-2xl font-bold text-blue-700">
                  Brahmane AI Academy
                </h2>

                <p className="mt-4 text-gray-600">
                  Machine Learning
                </p>

                <p className="text-gray-600">
                  Deep Learning
                </p>

                <p className="text-gray-600">
                  Generative AI
                </p>

                <p className="text-gray-600">
                  Agentic AI
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}