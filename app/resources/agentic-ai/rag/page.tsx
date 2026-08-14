export default function RAGPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      {/* Heading */}

      <h1 className="text-5xl font-bold text-blue-700">
        Retrieval-Augmented Generation (RAG)
      </h1>

      <p className="text-gray-500 mt-2">
        Module 7 • Estimated Reading Time: 25 Minutes
      </p>

      {/* Learning Objectives */}

      <section className="mt-10">

        <h2 className="text-3xl font-semibold text-blue-700">
          Learning Objectives
        </h2>

        <ul className="list-disc ml-8 mt-5 space-y-2 text-gray-700">

          <li>Understand the concept of Retrieval-Augmented Generation.</li>

          <li>Understand why RAG is needed.</li>

          <li>Learn the architecture of a RAG system.</li>

          <li>Study Chunking, Embeddings and Vector Databases.</li>

          <li>Understand Retriever and Generator components.</li>

          <li>Implement RAG using modern AI frameworks.</li>

        </ul>

      </section>

      {/* Theory */}

      <section className="mt-12">

        <h2 className="text-3xl font-semibold text-blue-700">
          Theory
        </h2>

        <div className="mt-6 space-y-6 text-gray-700 leading-8">

          <p>
            Retrieval-Augmented Generation (RAG) is an advanced AI architecture
            that combines information retrieval with Large Language Models.
            Instead of relying only on the knowledge learned during training,
            a RAG system retrieves relevant information from external documents
            before generating the final response.
          </p>

          <p>
            A typical RAG pipeline consists of document loading, text chunking,
            embedding generation, vector database indexing, retrieval of
            relevant chunks, prompt augmentation and final response generation
            using an LLM.
          </p>

          <p>
            RAG significantly reduces hallucinations and enables AI systems to
            answer questions using the latest organizational knowledge, making
            it ideal for enterprise AI assistants, chatbots and knowledge
            management systems.
          </p>

        </div>

      </section>

      {/* Architecture */}

      <section className="mt-12">

        <h2 className="text-3xl font-semibold text-blue-700">
          RAG Architecture
        </h2>

        <div className="bg-gray-100 rounded-xl p-8 mt-6">

          <p className="text-center text-lg font-semibold text-gray-700">

            Documents

            ↓

            Chunking

            ↓

            Embeddings

            ↓

            Vector Database

            ↓

            Retriever

            ↓

            Prompt Augmentation

            ↓

            Large Language Model

            ↓

            Final Answer

          </p>

        </div>

      </section>

      {/* Download Section */}

      <section className="mt-12">

        <h2 className="text-3xl font-semibold text-blue-700">
          Learning Resources
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mt-6">

          <a
            href="/pdf/agentic-ai/rag.pdf"
            target="_blank"
            className="bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 text-center"
          >
            📄 Download PDF Notes
          </a>

          <a
            href="#"
            className="bg-green-600 text-white px-6 py-4 rounded-xl hover:bg-green-700 text-center"
          >
            📊 Download PPT
          </a>

          <a
            href="#"
            className="bg-purple-600 text-white px-6 py-4 rounded-xl hover:bg-purple-700 text-center"
          >
            💻 Jupyter Notebook
          </a>

          <a
            href="#"
            className="bg-orange-600 text-white px-6 py-4 rounded-xl hover:bg-orange-700 text-center"
          >
            🐍 Python Source Code
          </a>

          <a
            href="#"
            className="bg-red-600 text-white px-6 py-4 rounded-xl hover:bg-red-700 text-center"
          >
            📝 Assignment
          </a>

          <a
            href="#"
            className="bg-indigo-600 text-white px-6 py-4 rounded-xl hover:bg-indigo-700 text-center"
          >
            ❓ Quiz
          </a>

        </div>

      </section>

      {/* Navigation */}

      <section className="mt-16 flex justify-between">

        <a
          href="/resources/agentic-ai/llm"
          className="text-blue-700 font-semibold hover:underline"
        >
          ← Previous Lesson
        </a>

        <a
          href="/resources/agentic-ai/ai-agents"
          className="text-blue-700 font-semibold hover:underline"
        >
          Next Lesson →
        </a>

      </section>

    </main>
  );
}