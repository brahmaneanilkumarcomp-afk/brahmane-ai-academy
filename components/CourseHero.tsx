type CourseHeroProps = {
  title: string;
  description: string;
};

export default function CourseHero({
  title,
  description,
}: CourseHeroProps) {
  return (
    <section className="text-center mb-16">

      <h1 className="text-5xl font-extrabold text-blue-700">
        {title}
      </h1>

      <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-600 leading-8">
        {description}
      </p>

    </section>
  );
}