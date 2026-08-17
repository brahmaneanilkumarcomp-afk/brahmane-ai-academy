import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="h-[calc(100dvh-112px)] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="mx-auto flex h-full max-w-7xl items-center px-6">

        <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="max-w-xl">

            {/* Badge */}
            <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              ✨ Empowering AI Learners
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-extrabold leading-tight text-blue-700 md:text-5xl lg:text-6xl">
              Learn Artificial
              <br />
              Intelligence.
              <br />

              <span className="text-gray-900">
                Build Real-World
                <br />
                Skills.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-lg text-base leading-7 text-gray-700 md:text-lg">
              Learn Artificial Intelligence, Machine Learning, Deep Learning,
              Generative AI and Agentic AI through structured learning
              resources and practical examples.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-4">
              <Button text="Start Learning" />

              <Button
                text="Explore Courses"
                variant="secondary"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center">

            <div className="relative w-full max-w-[540px]">

              {/* Soft background glow */}
              <div className="absolute inset-10 rounded-full bg-blue-300/20 blur-3xl" />

              {/* AI Academy Hero Image */}
              <Image
                src="/images/hero/ai-academy-hero.png"
                alt="Artificial Intelligence, Machine Learning, Deep Learning, Generative AI and Agentic AI"
                width={1024}
                height={1024}
                priority
                className="relative z-10 h-auto w-full object-contain"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}