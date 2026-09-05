import Link from "next/link";
import ResourceStats from "../../agentic-ai/practical/ResourceStats";

const practicals = [
  {
    id: 1,
    title: "Data Cleaning and Visualization for Retail Sales Analysis",
    active: true,
    href: "/pdf/applied-machine-learning/practical/data-cleaning-and-visualization.pdf",
    resourceId: 19,
  },
  {
    id: 2,
    title: "Linear Regression for House Price Prediction",
    active: true,
    href: "/pdf/applied-machine-learning/practical/linear-regression-house-price.pdf",
    resourceId: 20,
  },
  {
    id: 3,
    title: "Classification of Loan Applications Using Logistic Regression",
    active: true,
    href: "/pdf/applied-machine-learning/practical/logistic-regression-loan-approval.pdf",
    resourceId: 21,
  },
  {
    id: 4,
    title: "Credit Risk Assessment in Banking (Model Evaluation Metrics)",
    active: true,
    href: "/pdf/applied-machine-learning/practical/Credit-Risk-Assessment-in-Banking.pdf",
    resourceId: 22,
  },
  {
    id: 5,
    title: "Real-time Fraud Detection System (Model Deployment & Efficiency)",
    active: false,
    href: "#",
    resourceId: 0,
  },
  {
    id: 6,
    title: "Customer Churn Prediction using Decision Tree Classifier",
    active: true,
    href: "/pdf/applied-machine-learning/practical/Decision_Tree_Classifier.pdf",
    resourceId: 23,
  },
  {
    id: 7,
    title: "Email Spam Detection using Naive Bayes Classifier",
    active: false,
    href: "#",
    resourceId: 0,
  },
  {
    id: 8,
    title: "Product Recommendation Category Classification using K-NN",
    active: false,
    href: "#",
    resourceId: 0,
  },
  {
    id: 9,
    title:
      "Handwritten Digit Recognition using Support Vector Machine (SVM)",
    active: false,
    href: "#",
    resourceId: 0,
  },
  {
    id: 10,
    title: "Bias Detection and Fairness Evaluation in Hiring Algorithms",
    active: false,
    href: "#",
    resourceId: 0,
  },
  {
    id: 11,
    title: "Edge AI for Smart Agriculture using TinyML",
    active: false,
    href: "#",
    resourceId: 0,
  },
];

export default function PracticalPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="text-center mb-10 sm:mb-14">

        <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm sm:text-base">
          Practical • Hands-on Learning
        </span>

        <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-700">
          Practical & Hands-on Labs
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-7 sm:leading-8">
          Learn Applied Machine Learning through practical implementation
          using data preprocessing, visualization, regression, classification,
          model evaluation, decision trees and industry-oriented machine
          learning applications.
        </p>

      </section>


      {/* =========================================================
          PRACTICAL MODULES
      ========================================================= */}

      <section>

        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6 sm:mb-8">
          Practical Assignments
        </h2>

        <div className="space-y-4 sm:space-y-5">

          {practicals.map((practical) => (

            <div
              key={practical.id}
              className="
                bg-white
                rounded-2xl
                shadow-md
                border
                border-gray-200
                p-4
                sm:p-5
                hover:shadow-xl
                hover:border-green-300
                transition-all
                duration-300
              "
            >

              <div className="flex items-start gap-3 sm:gap-4">

                {/* =================================================
                    CHECK / LOCK
                ================================================= */}

                <span
                  className={`font-bold text-xl mt-1 flex-shrink-0 ${
                    practical.active
                      ? "text-green-600"
                      : "text-gray-400"
                  }`}
                >
                  {practical.active ? "✓" : "🔒"}
                </span>


                {/* =================================================
                    PRACTICAL NUMBER
                ================================================= */}

                <span
                  className="
                    text-green-700
                    font-semibold
                    text-sm
                    sm:text-base
                    min-w-[85px]
                    sm:min-w-[100px]
                    mt-1
                    flex-shrink-0
                  "
                >
                  Practical {practical.id}
                </span>


                {/* =================================================
                    TITLE + STATISTICS
                ================================================= */}

                <div className="flex-1 min-w-0">

                  {practical.active && practical.resourceId > 0 ? (

                    <>
                      <a
                        href={practical.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          block
                          text-base
                          sm:text-lg
                          font-semibold
                          text-gray-800
                          hover:text-green-700
                          hover:underline
                          transition
                          cursor-pointer
                        "
                      >
                        {practical.title}
                      </a>

                      <ResourceStats
                        resourceId={practical.resourceId}
                        resourceUrl={practical.href}
                      />
                    </>

                  ) : (

                    <div>

                      <h3
                        className="
                          text-base
                          sm:text-lg
                          font-semibold
                          text-gray-500
                        "
                      >
                        {practical.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-400">
                        Study material coming soon
                      </p>

                    </div>

                  )}

                </div>


                {/* =================================================
                    STATUS
                ================================================= */}

                <div className="flex-shrink-0">

                  {practical.active && practical.resourceId > 0 ? (

                    <span
                      className="
                        hidden
                        sm:inline-block
                        bg-green-100
                        text-green-700
                        text-xs
                        font-semibold
                        px-3
                        py-1.5
                        rounded-full
                      "
                    >
                      Available
                    </span>

                  ) : (

                    <span
                      className="
                        hidden
                        sm:inline-block
                        bg-gray-100
                        text-gray-500
                        text-xs
                        font-semibold
                        px-3
                        py-1.5
                        rounded-full
                      "
                    >
                      Coming Soon
                    </span>

                  )}

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
          href="/resources/applied-machine-learning"
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
          ← Applied Machine Learning
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
          View Theory →
        </Link>

      </div>

    </main>
  );
}