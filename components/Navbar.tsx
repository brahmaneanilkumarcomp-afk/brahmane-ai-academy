import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Website Name */}
        <div className="flex items-center gap-3">

          <Image
            src="/images/logo/brahmane-ai-logo.png"
            alt="Brahmane AI Academy Logo"
            width={80}
            height={80}
            priority
          />

          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              Brahmane AI Academy
            </h1>

            <p className="text-sm text-gray-500">
              Learn • Innovate • Transform
            </p>
          </div>

        </div>

       {/* Navigation */}
<div className="flex gap-8 text-gray-700 font-medium">

  <Link href="/" className="hover:text-blue-700 transition">
    Home
  </Link>

  <Link href="#" className="hover:text-blue-700 transition">
    Courses
  </Link>

  <Link href="/resources" className="hover:text-blue-700 transition">
    Resources
  </Link>

  <Link href="/research" className="hover:text-blue-700 transition">
    Research & Publications
  </Link>

  <Link href="/about" className="hover:text-blue-700 transition">
    About Dr. Brahmane
  </Link>

  <Link href="#" className="hover:text-blue-700 transition">
    Blogs
  </Link>

  <Link href="#" className="hover:text-blue-700 transition">
    Contact
  </Link>

</div>

      </div>
    </nav>
  );
}