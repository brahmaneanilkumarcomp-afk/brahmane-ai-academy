import Link from "next/link";
import ResourceStats from "./ResourceStats";

const modules = [
  {
    id: 1,
    title: "Prompt Engineering Techniques",
    files: [
      {
        id: 1,
        title: "Prompt Engineering Techniques",
        href: "/pdf/agentic-ai/unit-2/prompt-engineering-techniques.pdf",
        resourceId: 24,
      },
    ],
  },

  {
    id: 2,
    title: "RAG",
    files: [
      {
        id: 1,
        title: "RAG",
        href: "/pdf/agentic-ai/unit-2/rag/rag.pdf",
        resourceId: 25,
      },
      {
        id: 2,
        title: "Retrieval-Augmented-Generation-RAG",
        href:
          "/pdf/agentic-ai/unit-2/rag/retrieval-augmented-generation-rag.pdf",
        resourceId: 26,
      },
    ],
  },

  {
    id: 3,
    title: "Vector Databases",
    files: [
      {
        id: 1,
        title: "Vector Databases",
        href:
          "/pdf/agentic-ai/unit-2/vector-databases/vector-databases.pdf",
        resourceId: 27,
      },
      {
        id: 2,
        title:
          "Vector Databases - A Complete Guide for Computer Engineering",
        href:
          "/pdf/agentic-ai/unit-2/vector-databases/vector-databases-a-complete-guide-for-computer-engineering.pdf",
        resourceId: 28,
      },
      {
        id: 3,
        title: "Vector Databases - FAISS and Pinecone Explained",
        href:
          "/pdf/agentic-ai/unit-2/vector-databases/vector-databases-faiss-and-pinecone-explained.pdf",
        resourceId: 29,
      },
    ],
  },

  {
    id: 4,
    title: "Multimodal Prompt Engineering and LLM Systems",
    files: [
      {
        id: 1,
        title: "Multimodal Prompt Engineering and LLM Systems",
        href:
          "/pdf/agentic-ai/unit-2/multimodal-prompt-engineering-and-llm-systems.pdf",
        resourceId: 30,
      },
    ],
  },

  {
    id: 5,
    title: "Prompt Evaluation and Hallucination Mitigation",
    files: [
      {
        id: 1,
        title: "Prompt Evaluation and Hallucination Mitigation",
        href:
          "/pdf/agentic-ai/unit-2/prompt-evaluation-and-hallucination-mitigation.pdf",
        resourceId: 31,
      },
    ],
  },
];

export default function Unit2Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="text-center mb-10 sm:mb-14">

        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm sm:text-base">
          Unit II • CO2 • 9 Hours
        </span>

        <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700">
          Prompt Engineering, RAG & Multimodal AI
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-7 sm:leading-8">
          This unit introduces advanced Prompt Engineering techniques,
          Retrieval-Augmented Generation, Vector Databases, Multimodal
          Prompt Engineering, LLM Systems, Prompt Evaluation and
          Hallucination Mitigation.
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
            ✅ Understand fundamental and advanced Prompt Engineering
            techniques.
          </li>

          <li>
            ✅ Apply zero-shot, few-shot, Chain-of-Thought, role and
            system prompting techniques.
          </li>

          <li>
            ✅ Understand In-Context Learning and its applications.
          </li>

          <li>
            ✅ Understand Retrieval-Augmented Generation and its
            architecture.
          </li>

          <li>
            ✅ Understand Vector Databases and their role in modern
            LLM applications.
          </li>

          <li>
            ✅ Understand embeddings and semantic similarity search.
          </li>

          <li>
            ✅ Understand Multimodal Prompt Engineering and LLM Systems.
          </li>

          <li>
            ✅ Evaluate prompts and identify LLM response quality issues.
          </li>

          <li>
            ✅ Understand hallucinations and apply mitigation strategies.
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

        <div className="space-y-5">

          {modules.map((module) => (

            <div
              key={module.id}
              className="
                bg-white
                rounded-2xl
                shadow-md
                border
                border-gray-200
                overflow-hidden
                hover:shadow-xl
                hover:border-blue-400
                transition-all
                duration-300
              "
            >

              {/* =================================================
                  MODULE HEADER
              ================================================= */}

              <div className="p-4 sm:p-5">

                <div className="flex items-start gap-3 sm:gap-4">

                  {/* CHECK */}

                  <span className="text-green-600 font-bold text-xl mt-1 flex-shrink-0">
                    ✓
                  </span>


                  {/* MODULE NUMBER */}

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


                  {/* MODULE TITLE */}

                  <div className="flex-1 min-w-0">

                    <h3
                      className="
                        text-base
                        sm:text-lg
                        font-bold
                        text-gray-800
                      "
                    >
                      📁 {module.title}
                    </h3>

                  </div>

                </div>


                {/* =================================================
                    PDF FILES
                ================================================= */}

                <div className="mt-4 ml-0 sm:ml-[125px] space-y-3">

                  {module.files.map((file) => (

                    <div
                      key={file.id}
                      className="
                        bg-gray-50
                        border
                        border-gray-200
                        rounded-xl
                        p-3
                        sm:p-4
                        hover:bg-blue-50
                        hover:border-blue-300
                        transition
                      "
                    >

                      <div className="flex items-start gap-3">

                        {/* PDF ICON */}

                        <span className="text-red-600 text-lg sm:text-xl flex-shrink-0">
                          📄
                        </span>


                        {/* PDF TITLE + STATISTICS */}

                        <div className="flex-1 min-w-0">

                          <a
                            href={file.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              block
                              text-sm
                              sm:text-base
                              font-semibold
                              text-gray-700
                              hover:text-blue-600
                              hover:underline
                              transition
                              cursor-pointer
                            "
                          >
                            {file.title}
                          </a>

                          <ResourceStats
                            resourceId={file.resourceId}
                            resourceUrl={file.href}
                          />

                        </div>

                      </div>

                    </div>

                  ))}

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
          href="/resources/agentic-ai/theory/unit-1"
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
          href="/resources/agentic-ai/theory"
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

