import Link from "next/link";

const topics = [
  {
    number: "01",
    title: "Evolution of NLP",
    description:
      "Understand the journey of Natural Language Processing from rule-based systems and statistical methods to neural networks and modern language models.",
    duration: "55 min",
    href: "/resources/agentic-ai/theory/unit-1/evalution-of-nlp",
  },
  {
    number: "02",
    title: "Transformers",
    description:
      "Learn how Transformer architecture revolutionized NLP through self-attention, positional encoding, encoder-decoder architecture and parallel processing.",
    duration: "70 min",
    href: "/resources/agentic-ai/theory/unit-1/transformers",
  },
  {
    number: "03",
    title: "Large Language Models",
    description:
      "Explore the development of LLMs, pre-training, fine-tuning, scaling, emergent capabilities and modern LLM architectures.",
    duration: "60 min",
    href: "/resources/agentic-ai/theory/unit-1/large-language-models",
  },
];

export default function EvolutionOfNLPPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFF] text-slate-900">

      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

          <Link
            href="/resources/agentic-ai/theory/unit-1"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            ← Back to Unit 1
          </Link>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-4xl">

              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Unit 1 • Module 1
              </p>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Evolution of NLP, Transformers and LLMs
              </h1>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                Explore the evolution of Natural Language Processing,
                understand the Transformer architecture, and discover how
                Large Language Models transformed modern Artificial Intelligence.
              </p>

            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 px-6 py-5">

              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                Module
              </p>

              <p className="mt-1 text-2xl font-bold">
                01
              </p>

              <p className="text-sm text-slate-500">
                3 Topics • 185 min
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* Module Content */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div className="mb-8">

          <h2 className="text-2xl font-bold">
            Module 1 Learning Topics
          </h2>

          <p className="mt-2 max-w-3xl text-slate-600">
            Follow the learning path from traditional NLP techniques to
            Transformers and finally to modern Large Language Models.
          </p>

        </div>


        {/* Topic Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {topics.map((topic) => (

            <article
              key={topic.number}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Number + Duration */}
              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white">
                  {topic.number}
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {topic.duration}
                </span>

              </div>


              {/* Title */}
              <h3 className="mt-6 text-xl font-bold">
                {topic.title}
              </h3>


              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {topic.description}
              </p>


              {/* Button */}
              <Link
                href={topic.href}
                className="mt-6 flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
              >
                <span>
                  Open Topic
                </span>

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </article>

          ))}

        </div>


        {/* Learning Path */}
        <section className="mt-12 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Recommended Learning Path
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                From NLP to Modern LLMs
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Start with the evolution of NLP, understand the Transformer
                architecture, and then explore the development and capabilities
                of Large Language Models.
              </p>

            </div>

            <Link
              href="/resources/agentic-ai/theory/unit-1/evalution-of-nlp"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Start Module →
            </Link>

          </div>

        </section>


        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">

          <Link
            href="/resources/agentic-ai/theory/unit-1"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            ← Unit 1 Dashboard
          </Link>

          <Link
            href="/resources/agentic-ai/theory/unit-1/evalution-of-nlp"
            className="text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            Begin Module →
          </Link>

        </div>

      </section>

    </main>
  );
}