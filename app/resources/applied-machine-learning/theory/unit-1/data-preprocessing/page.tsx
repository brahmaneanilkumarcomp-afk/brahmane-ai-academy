import Link from "next/link";

const materials = [
  {
    title: "Data Processing and Exploration",
    pdf: "/pdf/applied-machine-learning/unit-1/data-preprocessing/data-processing-and-exploration.pdf",
  },
  {
    title: "Advanced Visualization",
    pdf: "/pdf/applied-machine-learning/unit-1/data-preprocessing/advanced-visualization.pdf",
  },
];

export default function DataPreprocessingPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      {/* Header */}

      <section className="text-center mb-12">

        <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
          Unit I • Module 3
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-blue-700">
          Data Preprocessing and Exploration
        </h1>

        <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
          Study materials covering data processing, exploration, and
          advanced visualization techniques for machine learning.
        </p>

      </section>


      {/* Study Materials */}

      <section>

        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Study Materials
        </h2>

        <div className="space-y-4">

          {materials.map((material, index) => (

            <a
              key={index}
              href={material.pdf}
              className="
                block
                bg-white
                rounded-2xl
                shadow-md
                border
                border-gray-200
                p-6
                hover:shadow-xl
                hover:border-blue-400
                hover:bg-blue-50
                transition-all
                duration-300
              "
            >

              <div className="flex items-center gap-4">

                {/* Green Check */}

                <span className="text-green-600 text-xl font-bold">
                  ✓
                </span>


                {/* Part Number */}

                <span className="text-blue-600 font-semibold text-sm min-w-[80px]">
                  Part {index + 1}
                </span>


                {/* PDF Topic */}

                <span className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                  {material.title}
                </span>


                {/* PDF Icon */}

                <span className="ml-auto text-red-600 text-xl">
                  📄
                </span>

              </div>

            </a>

          ))}

        </div>

      </section>


      {/* Back to Unit */}

      <div className="mt-12">

        <Link
          href="/resources/applied-machine-learning/theory/unit-1"
          className="
            inline-block
            bg-gray-700
            hover:bg-gray-800
            text-white
            px-6
            py-3
            rounded-xl
            transition
          "
        >
          ← Back to Unit I
        </Link>

      </div>

    </main>
  );
}