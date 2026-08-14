import Link from "next/link";

export default function AppliedMachineLearningPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

      <section className="text-center mb-14">

        <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
          Applied Machine Learning for Industry Solutions
        </span>

        <h1 className="mt-6 text-5xl font-extrabold text-blue-700">
          Applied Machine Learning
        </h1>

        <p className="mt-5 text-xl text-gray-600 max-w-4xl mx-auto leading-8">
          Learn machine learning concepts, data analysis, model development,
          deployment, evaluation, ethical AI, and emerging industrial
          applications through structured theory and practical learning.
        </p>

      </section>


      {/* ========================================================= */}
      {/* THEORY + PRACTICAL */}
      {/* ========================================================= */}

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">


        {/* ================= THEORY ================= */}

        <div
          className="
            bg-white
            rounded-3xl
            shadow-xl
            border
            border-blue-100
            p-8
            hover:shadow-2xl
            transition
            duration-300
          "
        >

          {/* Icon */}

          <div className="text-center">

            <div className="text-6xl">
              📖
            </div>

            <h2 className="mt-6 text-3xl font-bold text-blue-700">
              Theory & Learning Resources
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              Learn the complete theoretical foundation of Applied Machine
              Learning and its applications in industry.
            </p>

          </div>


          <hr className="my-8" />


          {/* Theory Features */}

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                5 Structured Learning Units
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                Detailed PDF Study Material
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                Machine Learning Concepts
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                Mathematical Foundations
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                Data Analysis & Feature Engineering
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                Model Evaluation & Ethical AI
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                Emerging ML Trends
              </span>
            </div>

          </div>


          {/* Theory Button */}

          <div className="text-center mt-10">

            <Link
              href="/resources/applied-machine-learning/theory"
              className="
                inline-block
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-bold
                px-10
                py-4
                rounded-xl
                transition
                duration-300
              "
            >
              📖 View Theory Modules
            </Link>

          </div>

        </div>



        {/* ================= PRACTICAL ================= */}

        <div
          className="
            bg-white
            rounded-3xl
            shadow-xl
            border
            border-green-100
            p-8
            hover:shadow-2xl
            transition
            duration-300
          "
        >

          {/* Icon */}

          <div className="text-center">

            <div className="text-6xl">
              💻
            </div>

            <h2 className="mt-6 text-3xl font-bold text-green-700">
              Practical & Hands-on Labs
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              Learn by implementing machine learning algorithms using Python,
              real-world datasets, and industry-oriented applications.
            </p>

          </div>


          <hr className="my-8" />


          {/* Practical Features */}

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                Python Machine Learning Programs
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                Jupyter Notebook Programs
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                Real-world Datasets
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                Data Preprocessing & Visualization
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                Machine Learning Model Implementation
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                Assignments & Mini Projects
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                Industry-oriented ML Projects
              </span>
            </div>

          </div>


          {/* Practical Button */}

          <div className="text-center mt-10">

            <Link
              href="/resources/applied-machine-learning/practical"
              className="
                inline-block
                bg-green-600
                hover:bg-green-700
                text-white
                font-bold
                px-10
                py-4
                rounded-xl
                transition
                duration-300
              "
            >
              💻 View Practical Labs
            </Link>

          </div>

        </div>

      </section>



      {/* ========================================================= */}
      {/* RESOURCE INFORMATION BAR */}
      {/* ========================================================= */}

      <section className="mt-12">

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            shadow-md
            p-6
          "
        >

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">


            {/* Units */}

            <div>

              <div className="text-3xl font-bold text-blue-600">
                5
              </div>

              <div className="text-sm text-gray-500 mt-1">
                Learning Units
              </div>

            </div>


            {/* Study Material */}

            <div>

              <div className="text-3xl font-bold text-blue-600">
                📚
              </div>

              <div className="text-sm text-gray-500 mt-1">
                Study Materials
              </div>

            </div>


            {/* Practical */}

            <div>

              <div className="text-3xl font-bold text-green-600">
                💻
              </div>

              <div className="text-sm text-gray-500 mt-1">
                Practical Programs
              </div>

            </div>


            {/* Projects */}

            <div>

              <div className="text-3xl font-bold text-purple-600">
                🚀
              </div>

              <div className="text-sm text-gray-500 mt-1">
                Industry Projects
              </div>

            </div>

          </div>

        </div>

      </section>



      {/* ========================================================= */}
      {/* PROFESSIONAL RESOURCE NOTE */}
      {/* ========================================================= */}

      <section className="mt-8">

        <div
          className="
            bg-blue-50
            border
            border-blue-100
            rounded-2xl
            px-6
            py-5
            text-center
          "
        >

          <p className="text-gray-600 text-sm leading-6">

            🎓 <strong className="text-blue-700">
              Academic Learning Resource
            </strong>
            {" "}
            — Structured study material, practical implementations,
            datasets and industry-oriented examples for Applied Machine Learning.

          </p>

        </div>

      </section>



      {/* ========================================================= */}
      {/* BACK NAVIGATION */}
      {/* ========================================================= */}

      <div className="flex justify-center mt-14">

        <Link
          href="/resources"
          className="
            bg-gray-700
            hover:bg-gray-800
            text-white
            px-8
            py-3
            rounded-xl
            font-semibold
            transition
          "
        >
          ← Back to Learning Resources
        </Link>

      </div>

    </main>
  );
}