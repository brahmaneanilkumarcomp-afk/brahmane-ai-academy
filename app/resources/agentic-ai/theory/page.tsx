import Link from "next/link";

const units = [
  {
    unit: "Unit 1",
    icon: "📘",
    color: "border-blue-500",
    title: "Foundations of Large Language Models",
    duration: "9 Hours",
    href: "/resources/agentic-ai/theory/unit-1",

    topics: [
      "Evolution of NLP",
      "Transformers & Large Language Models",
      "Transformer Architecture (Deep Dive)",
      "Pre-training Objectives",
      "Tokenization (BPE & WordPiece)",
      "Scaling Laws & Emergent Abilities",
      "GPT, BERT, LLaMA & PaLM",
      "Metrics & Evaluation of LLMs",
    ],
  },

  {
    unit: "Unit 2",
    icon: "📗",
    color: "border-green-500",
    title: "Prompt Engineering & RAG Systems",
    duration: "9 Hours",
    href: "/resources/agentic-ai/theory/unit-2",

    topics: [
      "Prompt Engineering",
      "Zero-shot Prompting",
      "Few-shot Prompting",
      "Chain-of-Thought Prompting",
      "Role & System Prompting",
      "In-Context Learning",
      "Retrieval Augmented Generation",
      "Vector Databases",
      "FAISS",
      "Pinecone",
      "Embeddings",
      "Semantic Search",
      "Hallucination Mitigation",
      "Multimodal Prompting",
      "Multimodal RAG",
      "CLIP",
      "Whisper",
      "Gemini/GPT APIs",
    ],
  },

  {
    unit: "Unit 3",
    icon: "📙",
    color: "border-purple-500",
    title: "Agentic AI Systems & Autonomous Agents",
    duration: "9 Hours",
    href: "/resources/agentic-ai/theory/unit-3",

    topics: [
      "Introduction to Agentic AI",
      "LLM as Reasoning Engine",
      "Tool Using Agents",
      "API Integration",
      "Search Tools",
      "Calculator Tools",
      "LangChain",
      "AutoGPT",
      "CrewAI",
      "Multi-Agent Systems",
      "Memory",
      "Planning",
      "ReAct Framework",
      "Tree of Thoughts",
      "Vision-enabled Agents",
      "Speech-enabled Agents",
      "Multimodal Reasoning",
    ],
  },

  {
    unit: "Unit 4",
    icon: "📕",
    color: "border-orange-500",
    title: "LLM APIs for Application Development",
    duration: "9 Hours",
    href: "/resources/agentic-ai/theory/unit-4",

    topics: [
      "LLM Concepts",
      "API Architecture",
      "Workflow",
      "API Integration",
      "Response Handling",
      "Temperature",
      "Max Tokens",
      "Prompt Templates",
      "System Prompts",
      "Prompt Versioning",
      "Prompt Testing",
      "Context Windows",
      "Prompt Chaining",
      "RAG",
      "OpenAI",
      "Gemini",
      "Anthropic",
      "Ollama",
      "LM Studio",
      "LiteLLM",
      "Langfuse",
      "Observability",
      "Tracing",
      "Monitoring",
      "Cost Optimization",
      "Production Best Practices",
    ],
  },

  {
    unit: "Unit 5",
    icon: "🚀",
    color: "border-red-500",
    title: "Development of Applications using Agentic AI",
    duration: "9 Hours",
    href: "/resources/agentic-ai/theory/unit-5",

    topics: [
      "AI Video Summarizer",
      "Image Captioning",
      "Speech-to-Text Agent",
      "Customer Support Agent",
      "AI Media Analysis",
      "AI Copilot",
      "Autonomous Task Agent",
      "System Architecture",
      "Planning",
      "Memory",
      "Tool Integration",
      "Reasoning",
      "Prompt Design",
      "Deployment",
    ],
  },
];

export default function TheoryPage() {
  return (
    <main className="max-w-[1800px] mx-auto px-8 py-12">

      <div className="text-center mb-14">

        <h1 className="text-5xl font-extrabold text-blue-700">
          Theory Learning Dashboard
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Learn Agentic AI & Large Language Models from fundamentals to
          enterprise applications through structured university modules.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

        {units.map((unit) => (

          <div
            key={unit.unit}
            className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border-t-8 ${unit.color} overflow-hidden flex flex-col`}
          >

            {/* Header */}

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

              <div className="space-y-2">                {unit.topics.map((topic, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-2"
                  >

                    <span className="text-green-600 font-bold mt-0.5">
                      ✓
                    </span>

                    <span className="text-sm text-gray-700 leading-5">
                      {topic}
                    </span>

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

                <div>

                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Active
                  </span>

                </div>

              </div>

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

    </main>

  );
}