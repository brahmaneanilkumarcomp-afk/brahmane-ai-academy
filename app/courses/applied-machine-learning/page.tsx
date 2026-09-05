import Link from "next/link";

const weeks = [
  {
    week: "Week 1",
    title: "Introduction to Applied Machine Learning",
    topics:
      "Machine Learning fundamentals, types of ML, ML workflow, real-world applications, industry use cases",
  },
  {
    week: "Week 2",
    title: "Python & Data Preparation for ML",
    topics:
      "NumPy, Pandas, data loading, data cleaning, missing values, data types and preprocessing",
  },
  {
    week: "Week 3",
    title: "Exploratory Data Analysis",
    topics:
      "Data visualization, statistical analysis, correlation, distributions, outliers and feature relationships",
  },
  {
    week: "Week 4",
    title: "Linear Regression",
    topics:
      "Simple and multiple linear regression, cost function, gradient descent, prediction and evaluation",
  },
  {
    week: "Week 5",
    title: "Classification Algorithms",
    topics:
      "Logistic Regression, KNN, classification workflow, confusion matrix and classification metrics",
  },
  {
    week: "Week 6",
    title: "Decision Trees & Ensemble Learning",
    topics:
      "Decision Trees, Random Forest, Bagging, Boosting and practical classification problems",
  },
  {
    week: "Week 7",
    title: "Feature Engineering & Model Improvement",
    topics:
      "Feature selection, feature transformation, encoding, scaling, model optimization and pipelines",
  },
  {
    week: "Week 8",
    title: "Unsupervised Learning",
    topics:
      "Clustering, K-Means, hierarchical clustering, dimensionality reduction and customer segmentation",
  },
  {
    week: "Week 9",
    title: "Model Evaluation & Validation",
    topics:
      "Train-test split, cross-validation, overfitting, underfitting, bias-variance and hyperparameter tuning",
  },
  {
    week: "Week 10",
    title: "Applied Machine Learning in Industry",
    topics:
      "Healthcare, banking, retail, manufacturing, recommendation systems and predictive analytics",
  },
  {
    week: "Week 11",
    title: "End-to-End Machine Learning Project",
    topics:
      "Problem definition, dataset selection, preprocessing, model development, evaluation and documentation",
  },
  {
    week: "Week 12",
    title: "Project Presentation & Industry Readiness",
    topics:
      "Project presentation, model interpretation, deployment overview, portfolio building and ML career roadmap",
  },
];

const outcomes = [
  "Understand the fundamentals and workflow of Machine Learning.",
  "Prepare, clean and analyze real-world datasets.",
  "Apply regression, classification and clustering algorithms.",
  "Evaluate and improve Machine Learning models.",
  "Solve industry-oriented Machine Learning problems.",
  "Develop and present an end-to-end Machine Learning project.",
];

const skills = [
  "Python for Machine Learning",
  "NumPy & Pandas",
  "Data Preprocessing",
  "Exploratory Data Analysis",
  "Regression",
  "Classification",
  "Decision Trees",
  "Ensemble Learning",
  "Clustering",
  "Feature Engineering",
  "Model Evaluation",
  "ML Project Development",
];

export default function AppliedMachineLearningCoursePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <div className="max-w-4xl">

            <span className="inline-block rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur">
              🎓 12-Week Professional Course
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Applied Machine Learning
              <br />
              for Industry Solutions
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50 md:text-xl">
              A structured 12-week journey from Machine Learning fundamentals
              to real-world industry applications, practical projects and
              professional ML skills.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/courses/applied-machine-learning/enroll"
                className="rounded-xl bg-white px-7 py-3 font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Enroll Now →
              </Link>

              <a
                href="#curriculum"
                className="rounded-xl border border-white/40 bg-white/10 px-7 py-3 font-semibold backdrop-blur transition hover:bg-white/20"
              >
                View Curriculum
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          COURSE INFORMATION
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-5 md:grid-cols-4">

          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-500">
              Duration
            </p>
            <p className="mt-2 text-xl font-bold text-blue-700">
              12 Weeks
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-500">
              Level
            </p>
            <p className="mt-2 text-xl font-bold text-blue-700">
              Beginner → Advanced
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-500">
              Learning Mode
            </p>
            <p className="mt-2 text-xl font-bold text-blue-700">
              Theory + Practical
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-500">
              Focus
            </p>
            <p className="mt-2 text-xl font-bold text-blue-700">
              Industry Applications
            </p>
          </div>

        </div>

      </section>


      {/* =========================================================
          COURSE OVERVIEW
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-8">

        <div className="grid gap-10 lg:grid-cols-2">

          <div>

            <span className="font-semibold text-blue-600">
              ABOUT THE COURSE
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Learn Machine Learning by Building Real Skills
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              This course is designed to provide students with a structured
              understanding of Applied Machine Learning. The course begins
              with fundamental concepts and gradually progresses toward
              practical Machine Learning solutions used in industry.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Students will work with datasets, implement ML algorithms,
              evaluate models and develop an end-to-end project that can be
              included in their academic and professional portfolio.
            </p>

          </div>


          <div className="rounded-3xl bg-blue-50 p-8">

            <h3 className="text-2xl font-bold text-blue-700">
              What You Will Learn
            </h3>

            <ul className="mt-6 space-y-4">

              {outcomes.map((outcome, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-700"
                >
                  <span className="font-bold text-green-600">
                    ✓
                  </span>

                  <span>{outcome}</span>
                </li>
              ))}

            </ul>

          </div>

        </div>

      </section>


      {/* =========================================================
          SKILLS
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="rounded-3xl bg-white p-8 shadow-md">

          <h2 className="text-3xl font-bold text-blue-700">
            Skills You Will Develop
          </h2>

          <div className="mt-7 flex flex-wrap gap-3">

            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          12 WEEK CURRICULUM
      ========================================================= */}

      <section
        id="curriculum"
        className="mx-auto max-w-7xl px-6 py-12"
      >

        <div className="text-center">

          <span className="font-semibold text-blue-600">
            COURSE CURRICULUM
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            12-Week Learning Journey
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            Each week focuses on a specific skill area and progressively
            prepares students for real-world Machine Learning projects.
          </p>

        </div>


        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {weeks.map((item) => (

            <div
              key={item.week}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                  {item.week.replace("Week ", "")}
                </div>

                <div>

                  <p className="text-sm font-semibold text-blue-600">
                    {item.week}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.topics}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 pb-16">

        <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-purple-700 p-10 text-center text-white md:p-14">

          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Start Your Machine Learning Journey?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-50">
            Join the 12-week Applied Machine Learning course and develop
            practical skills through structured learning and projects.
          </p>

          <Link
            href="/courses/applied-machine-learning/enroll"
            className="mt-7 inline-block rounded-xl bg-white px-8 py-3 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
          >
            Enroll in the Course →
          </Link>

        </div>

      </section>

    </main>
  );
}

