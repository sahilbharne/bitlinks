"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-purple-50 via-purple-100 to-purple-50 min-h-screen">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 py-16 md:py-24 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800">
            🚀 The simplest & privacy-first URL shortener
          </h1>
          <p className="text-gray-700 text-lg">
            Shorten your long, messy links into clean BitLinks in seconds —
            without logins, tracking, or ads. Share confidently and keep your data private.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <Link href="/shorten">
              <button className="bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-64 md:h-[400px]">
          <Image
            src="/vector.jpg"
            alt="BitLinks illustration"
            fill
            className="object-contain mix-blend-multiply"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-16 grid gap-8 md:grid-cols-3">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-purple-700">No Tracking</h2>
          <p className="text-gray-600">
            We never track you or your users. Your privacy is our top priority.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-purple-700">Fast & Free</h2>
          <p className="text-gray-600">
            Shorten your links instantly without signup or fees.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-purple-700">Open Source</h2>
          <p className="text-gray-600">
            Fully open source so you can see, trust, and contribute to the code.
          </p>
        </div>
      </section>
    </main>
  );
}
