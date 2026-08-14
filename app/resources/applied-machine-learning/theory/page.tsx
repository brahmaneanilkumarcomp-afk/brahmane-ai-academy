import Link from "next/link";

const units = [
  {
    unit: "Unit 1",
    icon: "📘",
    color: "border-blue-500",
    title: "FUNDAMENTALS OF APPLIED MACHINE LEARNING",
    duration: "9 Hours",
    href: "/resources/applied-machine-learning/theory/unit-1",

    topics: [
      {
        title: "Introduction to Machine Learning",
        description:
          "Overview of machine learning concepts, types (supervised, unsupervised, reinforcement), and real-world applications in industry.",
      },
      {
        title: "Mathematical Foundations",
        description:
          "Basics of linear algebra (vectors, matrices), calculus (derivatives, gradients), and probability theory essential for understanding ML algorithms.",
      },
      {
        title: "Data Preprocessing and Exploration",
        description:
          "Techniques for data cleaning, normalization, handling missing values, and exploratory data analysis.",
      },
      {
        title: "Introduction to Supervised Learning Algorithms",
        description:
          "Linear Regression, Logistic Regression, Decision Trees, and Support Vector Machines, including their mathematical underpinnings and applications.",
      },
      {
        title: "Model Evaluation and Validation",
        description:
          "Techniques understanding overfitting, underfitting, cross-validation methods.",
      },
    ],
  },

  {
    unit: "Unit 2",
    icon: "📗",
    color: "border-green-500",
    title:
      "DATA ANALYSIS AND MACHINE LEARNING TECHNIQUES FOR INDUSTRIAL APPLICATIONS",
    duration: "9 Hours",
    href: "/resources/applied-machine-learning/theory/unit-2",

    topics: [
      {
        title: "Exploratory Data Analysis (EDA)",
        description:
          "Techniques for summarizing and visualizing datasets to uncover patterns, spot anomalies, and test hypotheses.",
      },
      {
        title: "Feature Engineering and Selection",
        description:
          "Methods for creating new features, selecting relevant features, and reducing dimensionality to improve model performance.",
      },
      {
        title: "Supervised Learning Algorithms",
        description:
          "Decision Trees, Random Forests, and Gradient Boosting Machines, including their applications in industry.",
      },
      {
        title: "Unsupervised Learning Techniques",
        description:
          "K-Means, Hierarchical Clustering, and DBSCAN, and their use cases in industrial scenarios.",
      },
    ],
  },

  {
    unit: "Unit 3",
    icon: "📙",
    color: "border-purple-500",
    title: "DESIGNING AND IMPLEMENTING ML SOLUTIONS WITH MODERN TOOLS",
    duration: "9 Hours",
    href: "/resources/applied-machine-learning/theory/unit-3",

    topics: [
      {
        title: "Introduction to ML Frameworks",
        description:
          "TensorFlow, PyTorch, and Scikit-learn. Understanding their architecture, functionalities, and suitability for various industrial applications.",
      },
      {
        title: "Model Development and Training",
        description:
          "Hands-on experience in building, training, and validating machine learning models using real-world datasets. Emphasis on best practices for model development, including data preprocessing, feature engineering, and hyperparameter tuning.",
      },
      {
        title: "Deployment Strategies",
        description:
          "Model serialization, Flask-RESTful APIs, containerization using Docker, and deployment on cloud platforms like AWS and Azure.",
      },
    ],
  },

  {
    unit: "Unit 4",
    icon: "📕",
    color: "border-orange-500",
    title:
      "EVALUATION METRICS, ETHICAL CONSIDERATIONS, AND SOCIETAL IMPACT OF ML MODELS",
    duration: "9 Hours",
    href: "/resources/applied-machine-learning/theory/unit-4",

    topics: [
      {
        title: "Model Evaluation Metrics",
        description:
          "Understanding key performance metrics such as accuracy, precision, recall, F1-score, ROC-AUC, and confusion matrix to assess model effectiveness.",
      },
      {
        title: "Bias and Fairness in Machine Learning",
        description:
          "Identifying and mitigating biases in ML models.",
      },
    ],
  },

  {
    unit: "Unit 5",
    icon: "🚀",
    color: "border-red-500",
    title: "EMERGING TRENDS AND INNOVATIONS IN APPLIED MACHINE LEARNING",
    duration: "9 Hours",
    href: "/resources/applied-machine-learning/theory/unit-5",

    topics: [
      {
        title: "Foundation Models and Generative AI",
        description:
          "Study of large-scale models like GPT, BERT focusing on their architectures, training methodologies, and applications in various industries.",
      },
      {
        title: "Graph Neural Networks (GNNs)",
        description:
          "Exploration of GNNs and their applications in modeling relational data, such as social networks, recommendation systems, and biological networks.",
      },
      {
        title: "Edge AI and On-device Learning",
        description:
          "Understanding the deployment of ML models on edge devices, challenges involved, and strategies for efficient on-device learning to enable real-time analytics.",
      },
      {
        title: "AI in Emerging Domains",
        description:
          "Application of ML techniques in emerging domains such as climate modeling, healthcare diagnostics, and smart agriculture, highlighting innovative solutions and challenges.",
      },
    ],
  },
];

export default function TheoryPage() {
  return (
    <main className="max-w-[1800px] mx-auto px-8 py-12">

      {/* Page Header */}

      <div className="text-center mb-14">

        <h1 className="text-5xl font-extrabold text-blue-700">
          Theory Learning Dashboard
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Applied Machine Learning for Industry Solutions
        </p>

      </div>


      {/* Unit Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

        {units.map((unit) => (

          <div
            key={unit.unit}
            className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border-t-8 ${unit.color} overflow-hidden flex flex-col`}
          >

            {/* Unit Header */}

            <div className="p-6 text-center">

              <div className="text-5xl">
                {unit.icon}
              </div>

              <h2 className="mt-4 text-2xl font-bold text-blue-700">
                {unit.unit}
              </h2>

              <h3 className="mt-2 text-lg font-semibold text-gray-800 leading-6">
                {unit.title}
              </h3>

            </div>


            <hr />


            {/* Topics */}

            <div className="flex-1 px-6 py-5">

              <div className="space-y-5">

                {unit.topics.map((topic, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-2"
                  >

                    {/* Green Check */}

                    <span className="text-green-600 font-bold mt-0.5">
                      ✓
                    </span>


                    {/* Topic Content */}

                    <div>

                      <p className="text-sm font-semibold text-gray-800 leading-5">
                        {topic.title}
                      </p>

                      <p className="text-xs text-gray-600 leading-5 mt-1">
                        {topic.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* Footer */}

            <div className="border-t bg-gray-50 px-6 py-5">

              <div className="flex justify-between items-center mb-4">

                <div>

                  <p className="text-xs uppercase text-gray-500">
                    Duration
                  </p>

                  <p className="font-semibold text-blue-700">
                    {unit.duration}
                  </p>

                </div>


                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Active
                </span>

              </div>


              {/* Open Unit */}

              <Link
                href={unit.href}
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
              >
                Open Unit →
              </Link>

            </div>

          </div>

        ))}

      </div>


      {/* Navigation */}

      <div className="flex justify-between mt-16">

        <Link
          href="/resources"
          className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition"
        >
          ← Learning Resources
        </Link>

      </div>

    </main>
  );
}