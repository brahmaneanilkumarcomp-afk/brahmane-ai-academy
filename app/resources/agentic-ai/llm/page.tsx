export default function LLMPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-5xl font-bold text-blue-700">
        Large Language Models (LLMs)
      </h1>

      <p className="text-gray-500 mt-2">
        Module 4 • Estimated Reading Time: 20 Minutes
      </p>

      {/* Learning Objectives */}

      <section className="mt-10">

        <h2 className="text-3xl font-semibold text-blue-700">
          Learning Objectives
        </h2>

        <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-700">

          <li>Understand what Large Language Models are.</li>

          <li>Learn how LLMs are trained.</li>

          <li>Understand Tokens, Parameters and Context Window.</li>

          <li>Explore popular LLMs such as GPT, Gemini, Claude and Llama.</li>

          <li>Study industrial applications of Large Language Models.</li>

        </ul>

      </section>

      {/* Theory */}

      <section className="mt-12">

        <h2 className="text-3xl font-semibold text-blue-700">
          Theory
        </h2>

        <div className="mt-6 space-y-6 text-gray-700 leading-8">

          <p>
            Large Language Models (LLMs) are advanced Artificial Intelligence
            systems trained on massive amounts of textual data. They can
            understand, generate, summarize, translate and reason over
            human language with remarkable accuracy.
          </p>

          <p>
            Modern LLMs are built using the Transformer architecture and
            contain billions of parameters that learn complex language
            patterns during pre-training. These models can perform a wide
            range of tasks without requiring task-specific programming.
          </p>

          <p>
            Examples of popular LLMs include GPT, Gemini, Claude,
            Llama, DeepSeek, Mistral and Qwen. These models are widely
            used in education, healthcare, finance, software development,
            research and enterprise AI applications.
          </p>

        </div>

      </section>

      {/* PDF */}

      <section className="mt-12">

        <a
          href="/pdf/agentic-ai/llm.pdf"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          📄 Download PDF Notes
        </a>

      </section>

      {/* Navigation */}

      <section className="mt-12 flex justify-between">

        <a
          href="/resources/agentic-ai/transformers"
          className="text-blue-700 font-semibold hover:underline"
        >
          ← Previous Lesson
        </a>

        <a
          href="/resources/agentic-ai/prompt-engineering"
          className="text-blue-700 font-semibold hover:underline"
        >
          Next Lesson →
        </a>

      </section>

    </main>
  );
}