import Link from "next/link";
import ResourceStats from "./ResourceStats";

const modules = [
  {
    id: 1,
    title: "Introduction to Machine Learning Frameworks",
    href: "/pdf/applied-machine-learning/unit-3/introduction-to-machine-learning-frameworks.pdf",
    resourceId: 40,
  },
  {
    id: 2,
    title: "TensorFlow - Step-by-Step Explanation",
    href: "/pdf/applied-machine-learning/unit-3/tensorflow-step-by-step-explanation.pdf",
    resourceId: 41,
  },
  {
    id: 3,
    title: "PyTorch - Step-by-Step Explanation",
    href: "/pdf/applied-machine-learning/unit-3/pytorch-step-by-step-explanation.pdf",
    resourceId: 42,
  },
  {
    id: 4,
    title: "Scikit-learn for Machine Learning",
    href: "/pdf/applied-machine-learning/unit-3/tensorflow-step-by-step-explanation.pdf",
    resourceId: 43,
  },
  {
    id: 5,
    title: "Model Development and Training",
    href: "/pdf/applied-machine-learning/unit-3/model-development-and-training.pdf",
    resourceId: 44,
  },
  {
    id: 6,
    title: "Model Serialization and Deployment",
    href: "/pdf/applied-machine-learning/unit-3/model-serialization-and-deployment.pdf",
    resourceId: 45,
  },
  {
    id: 7,
    title: "Flask RESTful API for Machine Learning Models",
    href: "/pdf/applied-machine-learning/unit-3/flask-restful-api-for-machine-learning-models.pdf",
    resourceId: 46,
  },
  {
    id: 8,
    title: "Docker for Machine Learning Deployment",
    href: "/pdf/applied-machine-learning/unit-3/docker-for-machine-learning-deployment.pdf",
    resourceId: 47,
  },
  {
    id: 9,
    title: "ML Deployment on AWS and Azure",
    href: "/pdf/applied-machine-learning/unit-3/ml-deployment-on-aws-and-azure.pdf",
    resourceId: 48,
  },
];

export default function Unit3Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="text-center mb-10 sm:mb-14">

        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm sm:text-base">
          Unit III • CO3 • 9 Hours
        </span>

        <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700">
          Applied Machine Learning for Industry Solutions
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-7 sm:leading-8">
          This unit introduces modern machine learning frameworks including
          TensorFlow, PyTorch, and Scikit-learn. It also covers model
          development, training, serialization, and deployment using Flask,
          Docker, AWS, and Azure.
        </p>

      </section>


      {/* =========================================================
          LEARNING OUTCOMES
      ========================================================= */}
      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-5 sm:p-8 mb-10 sm:mb-12">

        <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
          Learning Outcomes
        </h2>

        <ul className="mt-5 space-y-3 text-sm sm:text-base text-gray-700">

          <li>
            ✅ Understand the purpose and importance of modern machine
            learning frameworks.
          </li>

          <li>
            ✅ Understand the basic features and working of TensorFlow,
            PyTorch, and Scikit-learn.
          </li>

          <li>
            ✅ Develop and train machine learning models using modern
            machine learning tools.
          </li>

          <li>
            ✅ Understand model serialization and techniques for saving
            trained machine learning models.
          </li>

          <li>
            ✅ Develop RESTful APIs for machine learning models using Flask.
          </li>

          <li>
            ✅ Understand the role of Docker in machine learning model
            deployment.
          </li>

          <li>
            ✅ Understand cloud-based deployment strategies using AWS
            and Microsoft Azure.
          </li>

          <li>
            ✅ Design and implement basic industry-oriented machine
            learning solutions.
          </li>

        </ul>

      </section>


      {/* =========================================================
          UNIT MODULES
      ========================================================= */}
      <section>

        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 sm:mb-8">
          Unit Modules
        </h2>

        <div className="space-y-4 sm:space-y-5">

          {modules.map((module) => (

            <div
              key={module.id}
              className="
                bg-white
                rounded-2xl
                shadow-md
                border
                border-gray-200
                p-4
                sm:p-5
                hover:shadow-xl
                hover:border-blue-400
                transition-all
                duration-300
              "
            >

              <div className="flex items-start gap-3 sm:gap-4">

                {/* =================================================
                    CHECK
                ================================================= */}
                <span className="text-green-600 font-bold text-xl mt-1 flex-shrink-0">
                  ✓
                </span>


                {/* =================================================
                    MODULE NUMBER
                ================================================= */}
                <span
                  className="
                    text-blue-600
                    font-semibold
                    text-sm
                    sm:text-base
                    min-w-[75px]
                    sm:min-w-[90px]
                    mt-1
                    flex-shrink-0
                  "
                >
                  Module {module.id}
                </span>


                {/* =================================================
                    TOPIC + STATISTICS
                ================================================= */}
                <div className="flex-1 min-w-0">

                  <a
                    href={module.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-base
                      sm:text-lg
                      font-semibold
                      text-gray-800
                      hover:text-blue-600
                      hover:underline
                      transition
                      cursor-pointer
                    "
                  >
                    📄 {module.title}
                  </a>

                  <ResourceStats
                    resourceId={module.resourceId}
                    resourceUrl={module.href}
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          justify-between
          gap-4
          mt-10
          sm:mt-16
        "
      >

        <Link
          href="/resources/applied-machine-learning/theory/unit-2"
          className="
            text-center
            bg-gray-700
            hover:bg-gray-800
            text-white
            px-5
            sm:px-6
            py-3
            rounded-xl
            transition
          "
        >
          ← Previous Unit
        </Link>

        <Link
          href="/resources/applied-machine-learning/theory"
          className="
            text-center
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-5
            sm:px-6
            py-3
            rounded-xl
            transition
          "
        >
          Theory Dashboard →
        </Link>

      </div>

    </main>
  );
}