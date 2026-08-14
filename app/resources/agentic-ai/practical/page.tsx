import Link from "next/link";

export default function PracticalPage() {

  const practicals = [

    "Practical 1 : Working with LLM APIs",

    "Practical 2 : Prompt Engineering using Gemini API",

    "Practical 3 : Embeddings using Sentence Transformers",

    "Practical 4 : Vector Database using FAISS",

    "Practical 5 : Retrieval-Augmented Generation (RAG)",

    "Practical 6 : AI Agents using LangChain",

    "Practical 7 : Model Context Protocol (MCP)",

    "Practical 8 : Multi-Agent Systems",

    "Mini Project",

    "Interview Practice"

  ];

  return (

    <main className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-blue-700">
        Practical & Hands-on Labs
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Learn Agentic AI through practical implementation,
        Python programming, APIs, LangChain, RAG,
        Vector Databases and AI Agents.
      </p>

      <div className="mt-10 space-y-4">

        {practicals.map((practical, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center hover:shadow-lg transition"
          >

            <div>

              <h3 className="font-bold text-lg">

                Practical {index + 1}

              </h3>

              <p className="text-gray-600">

                {practical}

              </p>

            </div>

            <button
              disabled
              className="bg-gray-300 text-gray-600 px-5 py-2 rounded-lg cursor-not-allowed"
            >

              Coming Soon

            </button>

          </div>

        ))}

      </div>

    </main>

  );
}