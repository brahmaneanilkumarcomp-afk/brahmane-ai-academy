import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
              Meet Your Mentor
            </span>

            <h1 className="mt-6 text-5xl font-extrabold text-blue-700 leading-tight">
              Dr. Anilkumar Vishwanath Brahmane
            </h1>

            <h2 className="mt-4 text-2xl text-gray-700 font-semibold">
              AI Educator • Researcher • Mentor
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Postdoctoral Researcher | AI Club Coordinator |
              NBA Coordinator | AIML Honours Coordinator |
              Sanjivani College of Engineering
            </p>

            <p className="mt-8 text-gray-700 leading-8">
              Dedicated to empowering students with
              industry-oriented Artificial Intelligence education
              through research, innovation and practical learning.
            </p>

            <div className="mt-10 flex gap-4">

              <a
                href="/cv/Dr-Anilkumar-Brahmane-CV.pdf"
                className="bg-blue-700 text-white px-7 py-3 rounded-xl hover:bg-blue-800 transition"
              >
                Download CV
              </a>

              <Link
                href="/contact"
                className="border-2 border-blue-700 text-blue-700 px-7 py-3 rounded-xl hover:bg-blue-700 hover:text-white transition"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="bg-white rounded-3xl shadow-2xl p-6">

              <Image
                src="/images/profile/dr-brahmane.png"
                alt="Dr. Brahmane"
                width={430}
                height={520}
                className="rounded-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* About */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl shadow-lg p-10">

          <h2 className="text-3xl font-bold text-blue-700">
            About Me
          </h2>

          <p className="mt-6 text-gray-700 leading-9">

            Dr. Anilkumar Vishwanath Brahmane is an accomplished
            academician, AI educator, researcher and mentor with
            extensive experience in Artificial Intelligence,
            Machine Learning, Deep Learning, Natural Language
            Processing, Large Language Models, Big Data Analytics
            and Agentic AI.

          </p>

          <p className="mt-5 text-gray-700 leading-9">

            He is actively involved in teaching,
            curriculum development,
            student mentoring,
            institutional quality initiatives
            and high-impact AI research.

            His work has been published in SCI,
            Scopus,
            IEEE,
            Springer
            and Web of Science indexed journals
            and conferences.

          </p>

          <p className="mt-5 text-gray-700 leading-9">

            Through Brahmane AI Academy,
            his vision is to bridge the gap between
            academia and industry by delivering
            practical,
            research-oriented,
            project-based education in
            Artificial Intelligence.

          </p>

        </div>

      </section>

      {/* Current Roles */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-blue-700 mb-8">

          Current Roles

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            "Faculty Member",
            "AI Club Coordinator",
            "NBA Coordinator",
            "AIML Honours Coordinator",
            "Founder - Brahmane AI Academy",
            "Research Mentor",
          ].map((role) => (

            <div
              key={role}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >

              <h3 className="text-xl font-bold text-blue-700">

                {role}

              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* Expertise */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-blue-700 mb-8">

          Areas of Expertise

        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "Artificial Intelligence",
            "Machine Learning",
            "Deep Learning",
            "Large Language Models",
            "Agentic AI",
            "Natural Language Processing",
            "Big Data Analytics",
            "Computer Vision",
            "Python",
            "Data Science",
          ].map((item) => (

            <span
              key={item}
              className="bg-blue-100 text-blue-700 px-5 py-3 rounded-full font-semibold"
            >
              {item}
            </span>

          ))}

        </div>

      </section>

      {/* Research Highlights */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-blue-700 mb-8">

          Research Highlights

        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-700">18+</h3>
            <p className="mt-2">Publications</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-700">₹10.3L</h3>
            <p className="mt-2">Research Grants</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-700">1</h3>
            <p className="mt-2">Patent</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-700">1</h3>
            <p className="mt-2">Copyright</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-700">2</h3>
            <p className="mt-2">Book Chapters</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-700">20+</h3>
            <p className="mt-2">FDPs & Certifications</p>
          </div>

        </div>

      </section>

      {/* Teaching Philosophy */}

      <section className="max-w-7xl mx-auto px-6 py-12 pb-20">

        <div className="bg-blue-700 rounded-3xl p-12 text-white">

          <h2 className="text-3xl font-bold">

            Teaching Philosophy

          </h2>

          <p className="mt-6 leading-9 text-lg">

            "I believe Artificial Intelligence education should
            combine strong theoretical foundations with practical
            implementation. My mission is to prepare students for
            the AI-driven future through project-based learning,
            research, innovation and real-world industry applications."

          </p>

        </div>

      </section>

    </main>
  );
}