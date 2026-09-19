import Link from "next/link";
import ResourceStats from "./ResourceStats";

const modules = [
  {
    id: 1,
    title: "Introduction to Agentic AI",
    files: [
      {
        id: 1,
        title: "Introduction to Agentic AI",
        href: "/pdf/agentic-ai/unit-3/introduction-to-agentic-ai.pdf",
        resourceId: 40,
      },
    ],
  },

  {
    id: 2,
    title: "LLM as Reasoning Engine",
    files: [
      {
        id: 1,
        title: "LLM as Reasoning Engine",
        href: "/pdf/agentic-ai/unit-3/llm-as-reasoning-engine.pdf",
        resourceId: 41,
      },
    ],
  },

  {
    id: 3,
    title: "Tool Using Agents & API Integration",
    files: [
      {
        id: 1,
        title: "Tool Using Agents",
        href: "/pdf/agentic-ai/unit-3/tool-using-agents.pdf",
        resourceId: 42,
      },
      {
        id: 2,
        title: "API Integration",
        href: "/pdf/agentic-ai/unit-3/api-integration.pdf",
        resourceId: 43,
      },
      {
        id: 3,
        title: "Search Tools",
        href: "/pdf/agentic-ai/unit-3/search-tools.pdf",
        resourceId: 44,
      },
      {
        id: 4,
        title: "Calculator Tools",
        href: "/pdf/agentic-ai/unit-3/calculator-tools.pdf",
        resourceId: 45,
      },
    ],
  },

  {
    id: 4,
    title: "Agentic AI Frameworks",
    files: [
      {
        id: 1,
        title: "LangChain",
        href: "/pdf/agentic-ai/unit-3/langchain.pdf",
        resourceId: 46,
      },
      {
        id: 2,
        title: "AutoGPT",
        href: "/pdf/agentic-ai/unit-3/autogpt.pdf",
        resourceId: 47,
      },
      {
        id: 3,
        title: "CrewAI",
        href: "/pdf/agentic-ai/unit-3/crewai.pdf",
        resourceId: 48,
      },
      {
        id: 4,
        title: "Multi-Agent Systems",
        href: "/pdf/agentic-ai/unit-3/multi-agent-systems.pdf",
        resourceId: 49,
      },
    ],
  },

  {
    id: 5,
    title: "Agent Memory, Planning & Reasoning",
    files: [
      {
        id: 1,
        title: "Memory",
        href: "/pdf/agentic-ai/unit-3/memory.pdf",
        resourceId: 50,
      },
      {
        id: 2,
        title: "Planning",
        href: "/pdf/agentic-ai/unit-3/planning.pdf",
        resourceId: 51,
      },
      {
        id: 3,
        title: "ReAct Framework",
        href: "/pdf/agentic-ai/unit-3/react-framework.pdf",
        resourceId: 52,
      },
      {
        id: 4,
        title: "Tree of Thoughts",
        href: "/pdf/agentic-ai/unit-3/tree-of-thoughts.pdf",
        resourceId: 53,
      },
    ],
  },

  {
    id: 6,
    title: "Multimodal & Embodied Agents",
    files: [
      {
        id: 1,
        title: "Vision-enabled Agents",
        href: "/pdf/agentic-ai/unit-3/vision-enabled-agents.pdf",
        resourceId: 54,
      },
      {
        id: 2,
        title: "Speech-enabled Agents",
        href: "/pdf/agentic-ai/unit-3/speech-enabled-agents.pdf",
        resourceId: 55,
      },
      {
        id: 3,
        title: "Multimodal Reasoning",
        href: "/pdf/agentic-ai/unit-3/multimodal-reasoning.pdf",
        resourceId: 56,
      },
    ],
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
          Agentic AI Systems & Autonomous Agents
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-7 sm:leading-8">
          This unit introduces Agentic AI systems and autonomous agents,
          focusing on LLMs as reasoning engines, tool-using agents, API
          integration, agentic AI frameworks, memory, planning, reasoning
          frameworks, multi-agent systems, and multimodal intelligent agents.
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
            ✅ Understand the fundamental concepts and architecture of
            Agentic AI systems.
          </li>

          <li>
            ✅ Understand the role of LLMs as reasoning engines for
            autonomous agents.
          </li>

          <li>
            ✅ Understand tool-using agents and API integration in
            agentic systems.
          </li>

          <li>
            ✅ Apply search and calculator tools to enhance agent
            capabilities.
          </li>

          <li>
            ✅ Understand and use popular Agentic AI frameworks such as
            LangChain, AutoGPT and CrewAI.
          </li>

          <li>
            ✅ Understand the architecture and working of Multi-Agent
            Systems.
          </li>

          <li>
            ✅ Understand memory and planning mechanisms used by
            autonomous agents.
          </li>

          <li>
            ✅ Understand ReAct and Tree of Thoughts reasoning
            frameworks.
          </li>

          <li>
            ✅ Understand Vision-enabled and Speech-enabled agents.
          </li>

          <li>
            ✅ Understand multimodal reasoning in modern Agentic AI
            systems.
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
          href="/resources/agentic-ai/theory/unit-2"
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